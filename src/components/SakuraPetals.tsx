import { useMemo } from 'react';
import s from './sakura.module.css';

/**
 * Pétales de cerisier qui dérivent doucement vers le bas.
 * Pur CSS — léger, ne bloque jamais l'interface.
 */
export default function SakuraPetals({ count = 14 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const left = Math.random() * 100;            // position horizontale (%)
        const duration = 9 + Math.random() * 9;       // 9–18 s pour traverser
        const delay = -Math.random() * 18;            // démarrage déphasé
        const size = 10 + Math.random() * 10;         // 10–20 px
        const drift = (Math.random() * 2 - 1) * 60;   // dérive latérale (px)
        const tone = i % 3;                           // 3 nuances de rose
        return { left, duration, delay, size, drift, tone };
      }),
    [count]
  );

  return (
    <div className={s.field} aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className={`${s.petal} ${s[`tone${p.tone}`]}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.85,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ['--drift' as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
