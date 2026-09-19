import { ImageResponse } from "next/og";
import { site } from "@/data/site";
export const alt = "Good ideas. Better made. A creative digital studio.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#efefe7",
        color: "#242720",
        padding: "50px 60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <span>{site.name}</span>
        <span style={{ fontSize: 18 }}>Creative digital studio</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 128,
          letterSpacing: "-9px",
          lineHeight: 1,
        }}
      >
        <span>Good ideas.</span>
        <span style={{ marginLeft: 150 }}>Better made.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #242720",
          paddingTop: 24,
          fontSize: 20,
        }}
      >
        <span>Web / Automation / Interaction</span>
        <span style={{ background: "#d9f76a", padding: "8px 16px" }}>
          For real businesses.
        </span>
      </div>
    </div>,
    size,
  );
}
