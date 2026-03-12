import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3D2B1F",
          borderRadius: "6px",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          style={{ color: "#C9A227" }}
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
