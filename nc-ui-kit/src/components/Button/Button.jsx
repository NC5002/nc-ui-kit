import styles from './Button.module.css';

/**
 * Button — NC UI Kit
 * @param {'primary'|'amber'|'outline'|'ghost'|'danger'|'success'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} loading
 * @param {boolean} disabled
 * @param {boolean} iconOnly
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  iconOnly = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={[
        styles.btn,
        styles[`btn_${variant}`],
        styles[`btn_${size}`],
        iconOnly ? styles.btn_iconOnly : '',
        loading ? styles.btn_loading : '',
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {children}
    </button>
  );
}
