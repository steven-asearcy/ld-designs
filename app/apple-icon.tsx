import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #4A3728, #3D2B1F)",
          borderRadius: "36px",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="110"
          height="110"
        >
          <polygon
            points="12,2 15,9 22,9 16,14 18,22 12,17 6,22 8,14 2,9 9,9"
            fill="#C9A227"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
