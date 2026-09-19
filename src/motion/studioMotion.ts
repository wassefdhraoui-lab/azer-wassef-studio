import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function studioMotion(root: HTMLElement) {
  const media = gsap.matchMedia();
  let disposed = false;
  let refreshFrame = 0;
  const refreshLayout = () => {
    cancelAnimationFrame(refreshFrame);
    refreshFrame = requestAnimationFrame(() => {
      if (!disposed) ScrollTrigger.refresh();
    });
  };
  root.addEventListener("toggle", refreshLayout, true);
  document.fonts.ready.then(() => { if (!disposed) refreshLayout(); });
  media.add("(prefers-reduced-motion: no-preference)", () => {
    const context = gsap.context(() => {
      gsap.to(".hero-proof", {
        rotation: -5,
        y: 75,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
      gsap.to(".work-watermark", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: "#work",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.4,
        },
      });
      gsap.fromTo(
        ".contact-word",
        { letterSpacing: "-0.095em" },
        {
          letterSpacing: "-0.055em",
          ease: "none",
          scrollTrigger: {
            trigger: "#contact",
            start: "top bottom",
            end: "center center",
            scrub: 0.35,
          },
        },
      );
    }, root);
    return () => context.revert();
  });
  media.add(
    "(pointer: fine) and (min-width: 900px) and (prefers-reduced-motion: no-preference)",
    () => {
      const cleanups: (() => void)[] = [];
      root
        .querySelectorAll<HTMLElement>("[data-magnetic], [data-reactive]")
        .forEach((element) => {
          const target =
            element.querySelector<HTMLElement>("[data-motion-target]") ??
            element;
          const magnetic = element.hasAttribute("data-magnetic");
          const strength = magnetic ? 7 : 16;
          const xTo = gsap.quickTo(target, "x", {
            duration: 0.55,
            ease: "power3.out",
          });
          const yTo = gsap.quickTo(target, "y", {
            duration: 0.55,
            ease: "power3.out",
          });
          const rotateTo = gsap.quickTo(target, "rotation", {
            duration: 0.7,
            ease: "power3.out",
          });
          let bounds: DOMRect | null = null;
          let idle: ReturnType<typeof setTimeout>;
          const enter = () => {
            bounds = element.getBoundingClientRect();
          };
          const reset = () => {
            xTo(0);
            yTo(0);
            rotateTo(0);
          };
          const move = (event: PointerEvent) => {
            if (!bounds || event.pointerType !== "mouse") return;
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            xTo(x * strength * 2);
            yTo(y * strength * 2);
            if (!magnetic) rotateTo(x * 2.4);
            clearTimeout(idle);
            idle = setTimeout(reset, 1400);
          };
          const leave = () => {
            clearTimeout(idle);
            bounds = null;
            reset();
          };
          element.addEventListener("pointerenter", enter);
          element.addEventListener("pointermove", move, { passive: true });
          element.addEventListener("pointerleave", leave);
          cleanups.push(() => {
            clearTimeout(idle);
            element.removeEventListener("pointerenter", enter);
            element.removeEventListener("pointermove", move);
            element.removeEventListener("pointerleave", leave);
          });
        });
      return () => cleanups.forEach((cleanup) => cleanup());
    },
  );
  return () => {
    disposed = true;
    cancelAnimationFrame(refreshFrame);
    root.removeEventListener("toggle", refreshLayout, true);
    media.revert();
  };
}
