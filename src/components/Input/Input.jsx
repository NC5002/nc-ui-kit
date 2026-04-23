import styles from './Input.module.css';

/**
 * Input field — NC UI Kit
 * @param {'default'|'error'|'success'} state
 */
export function Input({
  label,
  helperText,
  errorText,
  state = 'default',
  required = false,
  icon,
  className = '',
  id,
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.req} aria-label="required"> *</span>}
        </label>
      )}
      <div className={icon ? styles.inputWithIcon : undefined}>
        {icon && <span className={styles.inputIcon} aria-hidden="true">{icon}</span>}
        <input
          id={inputId}
          className={[
            styles.input,
            state === 'error'   ? styles.inputError   : '',
            state === 'success' ? styles.inputSuccess : '',
            className,
          ].filter(Boolean).join(' ')}
          aria-invalid={state === 'error'}
          aria-describedby={errorText ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
      </div>
      {state === 'error' && errorText && (
        <span id={`${inputId}-error`} className={styles.errorText} role="alert">✕ {errorText}</span>
      )}
      {state !== 'error' && helperText && (
        <span id={`${inputId}-helper`} className={styles.helperText}>{helperText}</span>
      )}
    </div>
  );
}
