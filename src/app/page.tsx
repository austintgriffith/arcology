"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 1, height: 1 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Initialize
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate parallax speed based on aspect ratio
  // Wide screens (landscape): faster parallax (up to 0.45)
  // Tall screens (portrait/mobile): slower parallax (down to 0.1)
  const aspectRatio = windowSize.width / windowSize.height;
  const parallaxSpeed = Math.min(0.45, Math.max(0.1, aspectRatio * 0.25));
  const parallaxOffset = scrollY * parallaxSpeed;

  // Calculate background zoom based on aspect ratio
  // Tall screens: more zoomed in (up to 180%)
  // Wide screens: less zoomed (down to 120%)
  const bgZoom = Math.max(120, Math.min(180, 150 / aspectRatio));

  // Calculate responsive font size for scroll-by titles
  // Scale aggressively to prevent text from wrapping
  // At 800px: ~2rem, at 375px (phone): ~0.95rem
  const scrollTitleFontSize = `${Math.max(
    0.75,
    Math.min(3.5, windowSize.width / 400)
  )}rem`;

  return (
    <main
      style={{
        minHeight: "600vh",
        width: "100%",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Parallax background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "300vh",
          backgroundImage: "url(/arcology_backgound.jpg)",
          backgroundSize: `${bgZoom}% auto`,
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          transform: `translateY(-${parallaxOffset}px)`,
          willChange: "transform",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      {/* Bottom gradient overlay that fades to black */}
      <div
        style={{
          position: "absolute",
          bottom: "90vh",
          left: 0,
          right: 0,
          height: "280vh",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.7) 70%, #000000 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      {/* Top gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60vh",
          background:
            "linear-gradient(to bottom, rgba(232, 228, 220, 1) 0%, rgba(232, 228, 220, 0.8) 40%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Solid black section at the bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100vh",
          background: "#000000",
          zIndex: 2,
        }}
      />
      {/* Header */}
      <header
        style={{
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Ethereum title */}
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: "0.25rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0.1em",
                bottom: "0.1em",
                right: "-0.2em",
                left: "-100vw",
                background: "rgba(57, 255, 20, 0.9)",
                zIndex: 0,
              }}
            />
            <span
              style={{
                position: "relative",
                zIndex: 1,
                fontFamily: '"Major Mono Display", monospace',
                fontSize: "1.5rem",
                fontWeight: 400,
                letterSpacing: "0.05em",
                color: "#000000",
                paddingLeft: "1rem",
              }}
            >
              ethereum
            </span>
          </div>
          {/* Arcology title */}
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            {/* Highlight box that extends off screen to the left */}
            <div
              style={{
                position: "absolute",
                top: "0.1em",
                bottom: "0.1em",
                right: "-0.2em",
                left: "-100vw",
                background: "rgba(57, 255, 20, 0.9)",
                zIndex: 0,
              }}
            />
            <span
              style={{
                position: "relative",
                zIndex: 1,
                fontFamily: '"Major Mono Display", monospace',
                fontSize: "5rem",
                fontWeight: 400,
                letterSpacing: "0.05em",
                color: "#000000",
                paddingLeft: "1rem",
              }}
            >
              arcology
            </span>
          </div>
        </div>

        {/* Center - Feb 2026 */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "30vh",
            transform: "translateX(-50%)",
          }}
        >
          <span
            style={{
              fontFamily: '"Major Mono Display", monospace',
              fontSize: "1.5rem",
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: "#000000",
              background: "rgba(57, 255, 20, 0.9)",
              padding: "0.3rem 0.8rem",
            }}
          >
            feb 2026
          </span>
        </div>

        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          {/* Highlight box that extends off screen to the right */}
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "-0.2em",
              right: "-100vw",
              background: "rgba(57, 255, 20, 0.9)",
              zIndex: 0,
            }}
          />
          <a
            href="#apply"
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: '"Major Mono Display", monospace',
              fontSize: "0.9rem",
              fontWeight: 400,
              color: "#000000",
              textDecoration: "none",
              letterSpacing: "0.05em",
              padding: "0.5rem 1rem",
              display: "inline-block",
            }}
          >
            apply
          </a>
        </div>
      </header>

      {/* Content sections */}
      <section
        style={{
          position: "absolute",
          top: "100vh",
          left: 0,
          right: 0,
          zIndex: 3,
        }}
      >
        {/* 2 month virtual program - LEFT */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "70vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0.1em",
              bottom: "0.1em",
              right: "-0.3em",
              left: "-100vw",
              background: "rgba(57, 255, 20, 0.9)",
              zIndex: 0,
            }}
          />
          <span
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: '"Major Mono Display", monospace',
              fontSize: scrollTitleFontSize,
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: "#000000",
              paddingLeft: "2rem",
              whiteSpace: "nowrap",
            }}
          >
            3 months virtual
          </span>
        </div>

        {/* ship apps in the ethereum ecosystem - RIGHT */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "70vh",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0.1em",
                bottom: "0.1em",
                left: "-0.3em",
                right: "-100vw",
                background: "rgba(57, 255, 20, 0.9)",
                zIndex: 0,
              }}
            />
            <span
              style={{
                position: "relative",
                zIndex: 1,
                fontFamily: '"Major Mono Display", monospace',
                fontSize: scrollTitleFontSize,
                fontWeight: 400,
                letterSpacing: "0.05em",
                color: "#000000",
                paddingRight: "2rem",
                whiteSpace: "nowrap",
              }}
            >
              ship apps onchain
            </span>
          </div>
        </div>

        {/* no prizes - LEFT */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "70vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0.1em",
              bottom: "0.1em",
              right: "-0.3em",
              left: "-100vw",
              background: "rgba(57, 255, 20, 0.9)",
              zIndex: 0,
            }}
          />
          <span
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: '"Major Mono Display", monospace',
              fontSize: scrollTitleFontSize,
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: "#000000",
              paddingLeft: "2rem",
              whiteSpace: "nowrap",
            }}
          >
            no prizes
          </span>
        </div>

        {/* founder support - RIGHT */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "70vh",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0.1em",
                bottom: "0.1em",
                left: "-0.3em",
                right: "-100vw",
                background: "rgba(57, 255, 20, 0.9)",
                zIndex: 0,
              }}
            />
            <span
              style={{
                position: "relative",
                zIndex: 1,
                fontFamily: '"Major Mono Display", monospace',
                fontSize: scrollTitleFontSize,
                fontWeight: 400,
                letterSpacing: "0.05em",
                color: "#000000",
                paddingRight: "2rem",
                whiteSpace: "nowrap",
              }}
            >
              founder support
            </span>
          </div>
        </div>

        {/* Accelerator Access - LEFT */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "70vh",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0.1em",
              bottom: "0.1em",
              right: "-0.3em",
              left: "-100vw",
              background: "rgba(57, 255, 20, 0.9)",
              zIndex: 0,
            }}
          />
          <span
            style={{
              position: "relative",
              zIndex: 1,
              fontFamily: '"Major Mono Display", monospace',
              fontSize: scrollTitleFontSize,
              fontWeight: 400,
              letterSpacing: "0.05em",
              color: "#000000",
              paddingLeft: "2rem",
              whiteSpace: "nowrap",
            }}
          >
            accelerator access
          </span>
        </div>

        {/* Apply Today - RIGHT */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "70vh",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0.1em",
                bottom: "0.1em",
                left: "-0.3em",
                right: "-100vw",
                background: "rgba(57, 255, 20, 0.9)",
                zIndex: 0,
              }}
            />
            <span
              style={{
                position: "relative",
                zIndex: 1,
                fontFamily: '"Major Mono Display", monospace',
                fontSize: scrollTitleFontSize,
                fontWeight: 400,
                letterSpacing: "0.05em",
                color: "#000000",
                paddingRight: "2rem",
                whiteSpace: "nowrap",
              }}
            >
              apply today
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
