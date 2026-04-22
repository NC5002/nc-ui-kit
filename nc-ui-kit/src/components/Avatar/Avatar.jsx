import styles from './Avatar.module.css';

/**
 * Avatar — NC UI Kit
 * @param {'xs'|'sm'|'md'|'lg'} size
 * @param {'amber'|'dark'|'green'|'blue'} color
 * @param {boolean} online
 */
export function Avatar({ initials, src, alt, size = 'md', color = 'amber', online = false }) {
  return (
    <div className={[styles.avatar, styles[`avatar_${size}`], styles[`avatar_${color}`]].join(' ')}>
      {src
        ? <img src={src} alt={alt || initials} className={styles.img} />
        : <span>{initials}</span>
      }
      {online && <span className={styles.status} aria-label="Online" />}
    </div>
  );
}

/** AvatarGroup — stacks avatars with overlap */
export function AvatarGroup({ children, max, total }) {
  const visible = max ? [...children].slice(0, max) : children;
  const overflow = total ? total - (max || children.length) : 0;
  return (
    <div className={styles.group}>
      {visible}
      {overflow > 0 && (
        <div className={[styles.avatar, styles.avatar_sm, styles.avatar_overflow].join(' ')}>
          +{overflow}
        </div>
      )}
    </div>
  );
}
