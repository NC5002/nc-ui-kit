import styles from './Toggle.module.css';

/**
 * Toggle switch — NC UI Kit
 */
export function Toggle({ checked = false, onChange, label, disabled = false, id }) {
  return (
    <label className={[styles.toggle, disabled ? styles.disabled : ''].join(' ')}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        className={styles.input}
        role="switch"
        aria-checked={checked}
      />
      <span className={[styles.track, checked ? styles.on : ''].join(' ')}>
        <span className={styles.thumb} />
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
