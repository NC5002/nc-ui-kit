import styles from './Progress.module.css';

/**
 * Progress bar — NC UI Kit
 * @param {'amber'|'blue'|'green'|'red'} color
 */
export function Progress({ value = 0, max = 100, label, showValue = true, color = 'amber' }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={styles.wrap}>
      {(label || showValue) && (
        <div className={styles.meta}>
          {label && <span className={styles.label}>{label}</span>}
          {showValue && <span className={styles.value}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={styles.track} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div
          className={[styles.fill, styles[`fill_${color}`]].join(' ')}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
