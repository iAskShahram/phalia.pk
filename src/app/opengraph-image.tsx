import { ImageResponse } from "next/og";

export const alt = "Phalia.pk - Coming Soon";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 1000,
            height: 430,
            borderRadius: 32,
            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 140,
              height: 140,
              borderRadius: "50%",
              background: "rgba(248, 250, 252, 0.15)",
              top: 110,
              left: 430,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 110,
              height: 110,
              borderRadius: "50%",
              background: "rgba(248, 250, 252, 0.12)",
              bottom: -20,
              left: 160,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: "rgba(248, 250, 252, 0.18)",
              bottom: 0,
              right: 120,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 82,
                fontWeight: 600,
                letterSpacing: 18,
                color: "#0f172a",
                fontFamily: 'Inter, "Segoe UI", sans-serif',
                marginBottom: 20,
              }}
            >
              PHALIA.PK
            </div>
            <div
              style={{
                fontSize: 40,
                letterSpacing: 10,
                color: "#e2e8f0",
                fontFamily: 'Inter, "Segoe UI", sans-serif',
              }}
            >
              COMING SOON
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
