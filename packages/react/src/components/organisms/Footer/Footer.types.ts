export type FooterButtons = 'single' | 'side-by-side' | 'stacked';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Action zone layout.
   * - `single`: one full-width primary action
   * - `side-by-side`: two equal-width buttons in a row
   * - `stacked`: primary on top, secondary below, both full-width
   */
  $buttons?: FooterButtons;

  /**
   * L2 elevation shadow on the top edge — use when Footer floats above
   * scrollable content (e.g. bottom-sheet confirmations).
   */
  $elevated?: boolean;

  /**
   * Show the Android system navigation indicator (4×108px pill at the bottom).
   * Only display when the screen renders over the device's gesture navigation area.
   */
  $systemBar?: boolean;

  /** Required primary CTA — pass a KDS `<Button>` with the appropriate hierarchy/variant. */
  primaryAction: React.ReactNode;

  /**
   * Optional secondary action. Only rendered when `$buttons` is `'side-by-side'`
   * or `'stacked'`. Pass a lower-emphasis KDS Button.
   */
  secondaryAction?: React.ReactNode;

  /**
   * Optional supporting text above the buttons — consent copy, legal notice,
   * or any inline-link rich text. Rendered with `typo-meta` and secondary text colour.
   * Accepts any ReactNode.
   */
  caption?: React.ReactNode;

  /**
   * Optional icon + link element below the buttons. Use for trust signals
   * or contextual links (e.g. an icon + "How we protect your data").
   * The Footer provides the layout frame; pass the icon and link as children.
   */
  badge?: React.ReactNode;

  className?: string;
}
