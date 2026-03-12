import { ImageResponse } from "next/og";

export const alt = "Lisa Dinkins Designs — Hand-Painted Denim Art";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #4A3728, #3D2B1F, #2A1F17)",
          fontFamily: "serif",
        }}
      >
        {/* Star */}
        <svg viewBox="0 0 24 24" width="80" height="80">
          <polygon
            points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
            fill="#C9A227"
          />
        </svg>

        {/* Decorative divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "1px",
              background: "linear-gradient(to right, transparent, #8B4726)",
            }}
          />
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#C9A227",
            }}
          />
          <div
            style={{
              width: "80px",
              height: "1px",
              background: "linear-gradient(to left, transparent, #8B4726)",
            }}
          />
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#F5EDE0",
            letterSpacing: "0.05em",
          }}
        >
          Lisa Dinkins Designs
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#2A7B7B",
            marginTop: "16px",
            letterSpacing: "0.1em",
          }}
        >
          Hand-Painted Denim Art with a Southwestern Soul
        </div>
      </div>
    ),
    { ...size }
  );
}
