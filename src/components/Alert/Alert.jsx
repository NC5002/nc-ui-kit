import styles from './Alert.module.css';

const ICONS = { success: '✓', warning: '⚠', error: '✕', info: 'ℹ' };

/**
 * Alert — NC UI Kit
 * @param {'success'|'warning'|'error'|'info'} variant
 */
export function Alert({ variant = 'info', title, children }) {
  return (
    <div className={[styles.alert, styles[`alert_${variant}`]].join(' ')} role="alert">
      <span className={styles.icon} aria-hidden="true">{ICONS[variant]}</span>
      <div>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
