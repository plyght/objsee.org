"use client";

import { useEffect, useMemo, useState } from "react";

const VB_W = 1000;
const VB_H = 240;
const TEXT_Y = 192;
const FONT_SIZE = 240;

const BOOT_DURATION = 1.15;
const STAGGER_MAX = 0.7;
const SETTLE_DELAY = 1250;
const SETTLE_FADE = 0.5;

export function BootMark({ cols = 32, rows = 6 }: { cols?: number; rows?: number }) {
  const cells = useMemo(() => {
    const cw = VB_W / cols;
    const ch = VB_H / rows;
    const out = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c;
        out.push({
          x: c * cw - 1.5,
          y: r * ch - 1.5,
          w: cw + 3,
          h: ch + 3,
          delay: (c * 22 + r * 55) % (STAGGER_MAX * 1000),
          variant: (i * 7) % 5,
        });
      }
    }
    return out;
  }, [cols, rows]);

  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSettled(true), SETTLE_DELAY);
    return () => clearTimeout(t);
  }, []);

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="boot-svg block w-full h-auto"
      role="img"
      aria-label="objsee"
      shapeRendering="geometricPrecision"
    >
      <defs>
        <mask id="boot-mask">
          <rect width="100%" height="100%" fill="black" />
          <text
            x="0"
            y={TEXT_Y}
            fontFamily='"Vampiro One", serif'
            fontWeight={400}
            fontSize={FONT_SIZE}
            letterSpacing={-2}
            fill="white"
          >
            objsee
          </text>
        </mask>
      </defs>
      <g mask="url(#boot-mask)">
        {cells.map((c, i) => (
          <rect
            key={i}
            x={c.x}
            y={c.y}
            width={c.w}
            height={c.h}
            className="boot-cell"
            style={{
              animation: `boot-${c.variant} ${BOOT_DURATION}s cubic-bezier(0.22, 1, 0.36, 1) ${c.delay}ms forwards`,
            }}
          />
        ))}
      </g>
      <text
        x="0"
        y={TEXT_Y}
        fontFamily='"Vampiro One", serif'
        fontWeight={400}
        fontSize={FONT_SIZE}
        letterSpacing={-2}
        fill="var(--fg)"
        style={{
          opacity: settled ? 1 : 0,
          transition: `opacity ${SETTLE_FADE}s cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      >
        objsee
      </text>
    </svg>
  );
}
