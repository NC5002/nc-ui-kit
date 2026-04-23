import styles from './Badge.module.css';

/**
 * Badge — NC UI Kit
 * @param {'default'|'amber'|'green'|'red'|'blue'} variant
 * @param {boolean} dot
 */
export function Badge({ children, variant = 'default', dot = false }) {
  const dotColors = { default:'#8C7E74', amber:'#D97706', green:'#059669', red:'#DC2626', blue:'#2563EB' };
  return (
    <span className={[styles.badge, styles[`badge_${variant}`]].join(' ')}>
      {dot && (
        <span
          className={styles.dot}
          style={{ background: dotColors[variant] }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
