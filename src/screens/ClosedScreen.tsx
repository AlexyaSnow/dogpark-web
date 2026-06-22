import { useLang } from '../context/LanguageContext';
import s from './screens.module.css';

export default function ClosedScreen() {
  const { t } = useLang();
  return (
    <div className={s.screen} style={{ background: '#0a0f0a' }}>
      <div className={s.center}>
        <span className={s.emoji}>🌙</span>
        <h1 className={s.title}>{t.parkClosed}</h1>
        <p className={s.subtitle}>{t.parkClosedSub}</p>
        <div className={s.hoursBox}>
          <div className={s.hoursRow}>
            <span>Lun – Dim / Mon – Sun</span>
            <span className={s.hoursTime}>7h00 – 21h00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
