import styles from './Card.module.css';

/**
 * Card — NC UI Kit
 * @param {'default'|'elevated'|'amber'} variant
 */
export function Card({ children, variant = 'default', className = '', ...props }) {
  return (
    <div
      className={[styles.card, styles[`card_${variant}`], className].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return <div className={[styles.cardHeader, className].join(' ')}>{children}</div>;
}

export function CardTitle({ children, className = '' }) {
  return <div className={[styles.cardTitle, className].join(' ')}>{children}</div>;
}

export function CardBody({ children, className = '' }) {
  return <div className={[styles.cardBody, className].join(' ')}>{children}</div>;
}

export function CardFooter({ children, className = '' }) {
  return <div className={[styles.cardFooter, className].join(' ')}>{children}</div>;
}
