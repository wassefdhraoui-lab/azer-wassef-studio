import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { services, packages } from "../src/data/services";

for (const viewport of [
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 1366, height: 768 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
]) {
  test(`studio at ${viewport.width}×${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toBeVisible();
    await page.screenshot({
      path: `qa-artifacts/final-hero-${viewport.width}.png`,
    });
    for (const id of ["work", "services", "support", "studio", "contact"]) {
      await page.locator(`#${id}`).evaluate((el) => el.scrollIntoView());
      await expect(page.locator(`#${id} h2`).first()).toBeInViewport();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      await page.screenshot({
        path: `qa-artifacts/final-${id}-${viewport.width}.png`,
      });
    }
    await expect(
      page.locator('#contact a[href="mailto:azerkahwech@gmail.com"]'),
    ).toBeVisible();
    await expect(
      page.locator('#contact a[href="mailto:wassefdhraoui@gmail.com"]'),
    ).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test("services are independently priced, expandable and keyboard accessible", async ({
  page,
}) => {
  await page.goto("/#services");
  await expect(page.locator(".service-row")).toHaveCount(13);
  for (const service of services) {
    const row = page
      .locator(".service-row")
      .filter({
        has: page.locator(".service-name", { hasText: service.name }),
      });
    await row.locator("summary").focus();
    await page.keyboard.press("Enter");
    await expect(row).toHaveAttribute("open", "");
    await expect(row.locator(".service-price")).toHaveText(service.price);
    await expect(row.locator(".service-details")).toContainText(
      service.description,
    );
    await expect(row.locator("a")).toHaveAttribute(
      "href",
      /mailto:azerkahwech@gmail.com,wassefdhraoui@gmail.com/,
    );
  }
  await expect(page.locator(".service-row[open]")).toHaveCount(1);
});

test("optional plans and boundaries are accurate", async ({ page }) => {
  await page.goto("/#support");
  for (const plan of packages) {
    const block = page
      .locator(".support-plan")
      .filter({
        has: page.getByRole("heading", { name: plan.name, exact: true }),
      });
    await expect(block.locator(".plan-price")).toContainText(`€${plan.price}`);
    await expect(block.locator("a")).toHaveAttribute(
      "href",
      new RegExp(`${plan.name}`),
    );
  }
  await page.getByText("Where does monthly support stop?").click();
  await expect(page.locator(".support-faq details[open]")).toContainText(
    "separate projects",
  );
  await page.getByText("Are third-party costs included?").click();
  await expect(page.locator(".support-faq details").nth(1)).toContainText(
    "separate unless explicitly agreed",
  );
});

test("pointer response settles and service hover updates the preview", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.waitForTimeout(500);
  const target = page.locator(".hero-second");
  const box = await page.locator(".hero-type").boundingBox();
  await page.mouse.move(box!.x + box!.width * 0.8, box!.y + box!.height * 0.7);
  await expect
    .poll(() => target.evaluate((el) => Math.abs(new DOMMatrix(getComputedStyle(el).transform).m41)))
    .toBeGreaterThan(1);
  await page.mouse.move(0, 0);
  await expect
    .poll(() => target.evaluate((el) => getComputedStyle(el).transform))
    .toBe("matrix(1, 0, 0, 1, 0, 0)");
  const nav = page.locator('.site-header a[href="#services"]');
  const navBox = await nav.boundingBox();
  await page.mouse.move(navBox!.x + navBox!.width * .85, navBox!.y + navBox!.height * .6);
  await expect.poll(() => nav.locator("[data-motion-target]").evaluate(el => Math.abs(new DOMMatrix(getComputedStyle(el).transform).m41))).toBeGreaterThan(.5);
  await page.locator(".work-in-progress").scrollIntoViewIfNeeded();
  const workBox = await page.locator(".work-in-progress").boundingBox();
  await page.mouse.move(workBox!.x + workBox!.width * .7, workBox!.y + workBox!.height * .3);
  await expect.poll(() => page.locator(".work-proof").evaluate(el => Math.abs(new DOMMatrix(getComputedStyle(el).transform).m41))).toBeGreaterThan(1);
  await page.locator(".service-row").nth(7).hover();
  await expect(page.locator(".service-preview-price")).toHaveText(
    "Custom quote",
  );
  await page.locator(".support-plan").first().hover();
  await expect.poll(() => page.locator(".plan-price").first().evaluate(el => new DOMMatrix(getComputedStyle(el).transform).m42)).toBeLessThan(-1);
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await expect(page.locator(".site-footer")).toBeInViewport();
  await page.evaluate(() => scrollTo(0, 0));
  await expect(page.locator("h1")).toBeInViewport();
});

test("reduced motion, no JavaScript and accessible semantics", async ({
  page,
  browser,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
  await page.locator(".service-row summary").first().click();
  await expect(page.locator(".service-row[open]")).toHaveCount(1);
  const context = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await context.newPage();
  await staticPage.goto("http://127.0.0.1:3000/#services");
  await staticPage.locator(".service-row summary").first().click();
  await expect(staticPage.locator(".service-row[open]")).toContainText(
    "responsive home",
  );
  await context.close();
});

test("unpublished work stays unpublished and SEO endpoints work", async ({
  page,
  request,
}) => {
  expect((await page.goto("/work/ld-connect"))?.status()).toBe(404);
  for (const path of ["/robots.txt", "/sitemap.xml", "/opengraph-image"])
    expect((await request.get(path)).status()).toBe(200);
});
