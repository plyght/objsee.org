"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const EMAIL = "me@objsee.org";

export function Bio({ delay = "rv-2" }: { delay?: string }) {
  return (
    <p className={`rv ${delay} bio text-[15px] sm:text-[16px] max-w-[44ch]`}>
      <b>low-level C.</b> unix internals, allocators, syscalls — the layer underneath.
    </p>
  );
}

export function Links({ delay = "rv-3" }: { delay?: string }) {
  const [copied, setCopied] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onCopy = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (t.current) clearTimeout(t.current);
      t.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);
  useEffect(() => () => { if (t.current) clearTimeout(t.current); }, []);

  return (
    <nav className={`rv ${delay} flex flex-wrap items-center gap-x-7 gap-y-1 text-[14px] sm:text-[15px]`}>
      <a className="lnk" href="https://tangled.org/objsee.tngl.sh" target="_blank" rel="noopener noreferrer">
        git
      </a>
      <a className="lnk" href="https://instagram.com/objsee" target="_blank" rel="noopener noreferrer">
        ig
      </a>
      <a
        href={`mailto:${EMAIL}`}
        onClick={onCopy}
        className="copy"
        aria-label={copied ? "email copied" : `copy ${EMAIL}`}
      >
        <span key={copied ? "c" : "m"} className="copy-swap">
          {copied ? "copied" : "mail"}
        </span>
      </a>
    </nav>
  );
}
