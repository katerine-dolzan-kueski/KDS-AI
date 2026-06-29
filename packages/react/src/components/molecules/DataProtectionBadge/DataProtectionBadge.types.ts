// ── Props ─────────────────────────────────────────────────────────────────────

/**
 * DataProtectionBadge accepts either an `href` (renders as <a>) or an
 * `onPress` callback (renders as <button>). One of the two is required.
 */
type DataProtectionBadgeBase = {
  /** Override the default label. @default 'Cómo protegemos tus datos' */
  label?: string;
  className?: string;
};

type DataProtectionBadgeLink = DataProtectionBadgeBase & {
  /** Destination URL — renders the badge as an <a> tag. */
  href: string;
  onPress?: never;
};

type DataProtectionBadgeButton = DataProtectionBadgeBase & {
  /** Tap/click handler — renders the badge as a <button>. */
  onPress: () => void;
  href?: never;
};

export type DataProtectionBadgeProps =
  | DataProtectionBadgeLink
  | DataProtectionBadgeButton;
