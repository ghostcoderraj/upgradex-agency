import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

const SPHERE_MARKS = ['UI', 'UX', 'WEB', 'APP', 'AI'] as const;

type HeroCoreVariant = 'stage' | 'ambient';

interface HeroCoreCanvasProps {
  variant?: HeroCoreVariant;
}

const CARDS = [
  {
    n: '01',
    title: 'Websites',
    line: 'Built to convert',
    className: 'left-0 top-0',
    tilt: -2.4,
    drift: -13,
    duration: 6.4,
    delay: 0,
  },
  {
    n: '02',
    title: 'Products',
    line: 'Apps and SaaS',
    className: 'right-0 top-8',
    tilt: 2.1,
    drift: -10,
    duration: 7.1,
    delay: 0.45,
  },
  {
    n: '03',
    title: 'AI systems',
    line: 'Inside the work',
    className: 'bottom-4 left-0',
    tilt: 1.6,
    drift: 12,
    duration: 6.8,
    delay: 0.2,
  },
  {
    n: '04',
    title: 'Growth',
    line: 'Found after launch',
    className: 'bottom-8 right-8',
    tilt: -1.8,
    drift: 11,
    duration: 7.5,
    delay: 0.7,
  },
] as const;

type OrbitDotSpec = {
  rx: number;
  ry: number;
  tilt: number;
  duration: number;
  phase: number;
  size: number;
  color: string;
  glow: boolean;
};

const ORBIT_DOTS: OrbitDotSpec[] = [
  { rx: 176, ry: 58, tilt: -16, duration: 13, phase: 0.02, size: 7, color: '#f3d068', glow: true },
  { rx: 176, ry: 58, tilt: -16, duration: 13, phase: 0.38, size: 4, color: '#ffffff', glow: false },
  { rx: 176, ry: 58, tilt: -16, duration: 13, phase: 0.71, size: 5, color: '#d4af37', glow: true },
  { rx: 188, ry: 72, tilt: 28, duration: 17, phase: 0.16, size: 5, color: '#ffffff', glow: false },
  { rx: 188, ry: 72, tilt: 28, duration: 17, phase: 0.48, size: 3.5, color: '#f3d068', glow: true },
  { rx: 188, ry: 72, tilt: 28, duration: 17, phase: 0.82, size: 4, color: '#00f2fe', glow: true },
  { rx: 132, ry: 118, tilt: 74, duration: 11, phase: 0.22, size: 4, color: '#f3d068', glow: true },
  { rx: 132, ry: 118, tilt: 74, duration: 11, phase: 0.64, size: 3, color: '#ffffff', glow: false },
];

const DRIFTERS = [
  { x: -36, y: -168, size: 5, delay: 0, color: '#f3d068' },
  { x: 108, y: -132, size: 3, delay: 0.5, color: '#ffffff' },
  { x: -148, y: 28, size: 4, delay: 0.9, color: '#ffffff' },
  { x: 156, y: 64, size: 3.5, delay: 0.3, color: '#f3d068' },
  { x: 18, y: 168, size: 4, delay: 1.1, color: '#00f2fe' },
  { x: -96, y: 120, size: 3, delay: 0.15, color: '#ffffff' },
];

function ellipsePoint(rx: number, ry: number, tiltDeg: number, angle: number) {
  const tilt = (tiltDeg * Math.PI) / 180;
  const px = Math.cos(angle) * rx;
  const py = Math.sin(angle) * ry;
  return {
    x: px * Math.cos(tilt) - py * Math.sin(tilt),
    y: px * Math.sin(tilt) + py * Math.cos(tilt),
  };
}

function OrbitDot({ rx, ry, tilt, duration, phase, size, color, glow }: OrbitDotSpec) {
  const reduce = useReducedMotion();
  const { x, y, start } = useMemo(() => {
    const frames = 32;
    const xs: number[] = [];
    const ys: number[] = [];
    for (let i = 0; i <= frames; i++) {
      const point = ellipsePoint(rx, ry, tilt, (i / frames + phase) * Math.PI * 2);
      xs.push(point.x);
      ys.push(point.y);
    }
    return { x: xs, y: ys, start: ellipsePoint(rx, ry, tilt, phase * Math.PI * 2) };
  }, [rx, ry, tilt, phase]);

  return (
    <motion.span
      className="absolute left-1/2 top-1/2 rounded-full"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        background: color,
        boxShadow: glow ? `0 0 10px 2px ${color}` : undefined,
        x: start.x,
        y: start.y,
      }}
      animate={reduce ? undefined : { x, y }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    />
  );
}

function TravelingOrbit() {
  const reduce = useReducedMotion();

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 500 480" aria-hidden>
      <g transform="rotate(-18 250 240)">
        <ellipse cx="250" cy="240" rx="168" ry="54" fill="none" stroke="rgba(243,208,104,0.22)" strokeWidth="1.2" />
        <motion.ellipse
          cx="250"
          cy="240"
          rx="168"
          ry="54"
          fill="none"
          stroke="#f3d068"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="18 250"
          animate={reduce ? undefined : { strokeDashoffset: [0, -268] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
        />
      </g>
      <g transform="rotate(46 250 240)">
        <motion.ellipse
          cx="250"
          cy="240"
          rx="142"
          ry="64"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeDasharray="3 7 3 210"
          animate={reduce ? undefined : { strokeDashoffset: [0, 223] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
        />
      </g>
    </svg>
  );
}

function SphereMark() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SPHERE_MARKS.length);
    }, 1700);
    return () => window.clearInterval(timer);
  }, [reduce]);

  const label = reduce ? 'UX' : SPHERE_MARKS[index];

  return (
    <div className="relative z-10 flex h-full items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.78 }}
          animate={{ opacity: [0, 1, 0.2, 1], scale: [0.78, 1.08, 1, 1] }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.16 } }}
          transition={{ duration: 0.5, times: [0, 0.2, 0.34, 0.5], ease: 'easeOut' }}
          className="text-[46px] font-black leading-none tracking-[-0.06em] text-white drop-shadow-[0_6px_14px_rgba(70,40,0,0.45)]"
          aria-live="polite"
        >
          {label}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function CoreSphere({ showMark }: { showMark: boolean }) {
  const reduce = useReducedMotion();

  return (
    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(243,208,104,0.55)_0%,rgba(212,175,55,0.18)_42%,transparent_70%)] blur-2xl"
          animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div
        className="relative h-[188px] w-[188px] overflow-hidden rounded-full"
        style={{
          background:
            'radial-gradient(circle at 32% 30%, #fff8e4 0%, #ffe7a3 7%, #f3d068 16%, #e0a322 34%, #a87412 58%, #5c3d0c 82%, #241806 100%)',
          boxShadow:
            'inset -16px -22px 28px rgba(40,18,0,0.45), inset 10px 12px 18px rgba(255,255,255,0.28), 0 22px 40px rgba(0,0,0,0.4), 0 0 70px rgba(212,175,55,0.45)',
        }}
      >
        <motion.span
          className="absolute left-6 top-5 h-14 w-14 rounded-full bg-white/90 blur-[7px]"
          animate={
            reduce
              ? undefined
              : {
                  x: [0, 26, 14, -4, 0],
                  y: [0, 12, 28, 10, 0],
                  opacity: [0.95, 0.7, 0.45, 0.75, 0.95],
                }
          }
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]" />
        {showMark && <SphereMark />}
      </div>
    </div>
  );
}

function ServiceCard({
  n,
  title,
  line,
  className,
  tilt,
  drift,
  duration,
  delay,
}: (typeof CARDS)[number]) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className={`absolute z-20 w-[188px] rounded-[20px] border border-white/70 bg-[#fffaf6] px-4 py-3.5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.55)] ${className}`}
      style={{ rotate: tilt }}
      animate={reduce ? undefined : { y: [0, drift, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.035 }}
    >
      <p className="text-[12px] font-semibold tracking-[0.04em] text-[#c4a15b]">{n}</p>
      <p className="mt-1 text-[17px] font-bold leading-tight text-[#161616]">{title}</p>
      <p className="mt-1 text-[13px] leading-snug text-[#6d7280]">{line}</p>
    </motion.article>
  );
}

export const HeroCoreCanvas: React.FC<HeroCoreCanvasProps> = ({ variant = 'stage' }) => {
  const reduce = useReducedMotion();
  const [lite, setLite] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches,
  );

  useEffect(() => {
    const query = window.matchMedia('(max-width: 1023px)');
    const sync = () => setLite(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  const calm = reduce || lite;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 46, damping: 18, mass: 0.7 });
  const y = useSpring(pointerY, { stiffness: 46, damping: 18, mass: 0.7 });

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || variant === 'ambient') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const nx = (event.clientX - bounds.left) / bounds.width - 0.5;
    const ny = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(nx * 14);
    pointerY.set(ny * 10);
  };

  const onMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className="relative h-[340px] w-full overflow-hidden [container-type:size] sm:h-[420px] lg:h-[520px]"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="absolute left-1/2 top-1/2 h-[480px] w-[500px]"
        style={{
          transform:
            'translate(-50%, -50%) scale(min(1, (100cqw - 16px) / 500px, (100cqh - 16px) / 480px))',
        }}
      >
        <motion.div className="relative h-full w-full" style={{ x, y }}>
          <div
            className="pointer-events-none absolute bottom-2 left-1/2 h-48 w-[156%]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(243,208,104,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(243,208,104,0.2) 1px, transparent 1px)',
              backgroundSize: '46px 46px',
              transform: 'translateX(-50%) perspective(520px) rotateX(64deg)',
              WebkitMaskImage: 'linear-gradient(to top, transparent, black 28%, black 58%, transparent)',
              maskImage: 'linear-gradient(to top, transparent, black 28%, black 58%, transparent)',
            }}
          />

          <TravelingOrbit />

          <div className="absolute inset-0">
            {(calm ? ORBIT_DOTS.filter((_, index) => index % 3 === 0) : ORBIT_DOTS).map((dot) => (
              <OrbitDot key={`${dot.tilt}-${dot.phase}-${dot.size}`} {...dot} />
            ))}
            {!calm && (
              <>
              {DRIFTERS.map((dot) => (
                <motion.span
                  key={`${dot.x}-${dot.y}`}
                  className="absolute left-1/2 top-1/2 rounded-full"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    marginLeft: -dot.size / 2,
                    marginTop: -dot.size / 2,
                    background: dot.color,
                    boxShadow: `0 0 8px ${dot.color}`,
                    x: dot.x,
                    y: dot.y,
                  }}
                  animate={reduce ? undefined : { y: [dot.y, dot.y - 16, dot.y], opacity: [0.45, 1, 0.45] }}
                  transition={{ duration: 5.5 + dot.delay, delay: dot.delay, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
              </>
            )}
          </div>

          <CoreSphere showMark={variant === 'stage'} />

          {variant === 'stage' && CARDS.map((card) => <ServiceCard key={card.n} {...card} />)}
        </motion.div>
      </div>
    </div>
  );
};
