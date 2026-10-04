import { useEffect, useRef, useState, type ReactNode } from "react";

export type VideoConfig = {
  desktop?: string;
  mobile?: string;
  poster: string;
  label: string;
};

type Props = {
  video: VideoConfig;
  eager?: boolean;
  className?: string;
  children: ReactNode;
};

/** Background video with lazy loading, mobile source, slow-connection + reduced-motion poster fallback. */
export function CinematicVideo({ video, eager = false, className = "", children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slow = conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType ?? "");
    if (reduce || slow) return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const chosen = (isMobile ? video.mobile : video.desktop) ?? video.desktop ?? video.mobile;
    if (!chosen) return;
    if (eager) { setSrc(chosen); return; }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) { setSrc(chosen); io.disconnect(); }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager, video.desktop, video.mobile]);

  return (
    <section ref={ref} className={`relative w-full overflow-hidden ${className}`}>
      <img
        src={video.poster}
        alt={video.label}
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading={eager ? "eager" : "lazy"}
        width={1920}
        height={1088}
      />
      {src && (
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={src}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
          preload={eager ? "auto" : "none"}
          aria-label={video.label}
        >
          {video.label}
        </video>
      )}
      <div className="video-overlay absolute inset-0" aria-hidden />
      <div className="relative z-10 h-full">{children}</div>
    </section>
  );
}
