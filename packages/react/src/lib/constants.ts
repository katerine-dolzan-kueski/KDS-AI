// Animation and timing constants
export const ANIMATION_DURATION = 300; // milliseconds
export const DRAG_THRESHOLD = 50; // minimum drag distance to trigger size change

export const BOTTOM_SHEET_STATES = {
  HALF: 'HALF',
  LARGE: 'LARGE',
  FULL: 'FULL',
} as const;

// Event types for drag behavior
export const DRAG_EVENTS = {
  POINTER_MOVE: 'pointermove',
  POINTER_UP: 'pointerup',
  POINTER_DOWN: 'pointerdown',
} as const;

// Height constants for different sizes
export const HEIGHT_PERCENTAGES = {
  HALF: 0.5,
  LARGE: 0.9,
  FULL: 1.0,
  MIN: 0.1, // minimum height to prevent complete collapse
  FULL_THRESHOLD: 0.99, // threshold for considering full height (for styling purposes)
} as const;

// Drag behavior constants
export const DRAG_CONSTRAINTS = {
  // Opacity thresholds for visual feedback during drag
  LIGHT_DRAG_THRESHOLD: 50,
  MEDIUM_DRAG_THRESHOLD: 100,
  STRONG_DRAG_THRESHOLD: 200,

  // Opacity values for different drag states
  OPACITY: {
    NORMAL: 1,
    LIGHT_DRAG_MIN: 0.7,
    LIGHT_DRAG_MAX: 0.9,
    MEDIUM_DRAG_MIN: 0.4,
    MEDIUM_DRAG_MAX: 0.7,
    STRONG_DRAG: 0.2,
  },
} as const;

// Height state thresholds for determining current state
export const HEIGHT_STATE_THRESHOLDS = {
  HALF_MAX: 0.6,
  LARGE_MAX: 0.95,
} as const;

// Size mapping for initial heights
export const SIZE_TO_HEIGHT_MAP = {
  half: HEIGHT_PERCENTAGES.HALF,
  large: HEIGHT_PERCENTAGES.LARGE,
  full: HEIGHT_PERCENTAGES.FULL,
  auto: HEIGHT_PERCENTAGES.HALF, // default fallback
} as const;

// Default values
export const DEFAULT_VALUES = {
  DISMISSIBLE: true,
  CLOSE_ON_ESCAPE: true,
  ENABLE_DRAG_TO_RESIZE: true,
  SIZE: 'half' as const,
} as const;

// Height cycling order for drag handle clicks
export const HEIGHT_CYCLE_ORDER = [
  HEIGHT_PERCENTAGES.HALF,
  HEIGHT_PERCENTAGES.LARGE,
  HEIGHT_PERCENTAGES.FULL,
] as const;

// Drag constraints based on starting height
export const DRAG_CONSTRAINT_MAP = {
  [HEIGHT_PERCENTAGES.FULL]: {
    min: HEIGHT_PERCENTAGES.MIN,
    max: HEIGHT_PERCENTAGES.FULL,
  },
  [HEIGHT_PERCENTAGES.LARGE]: {
    min: HEIGHT_PERCENTAGES.HALF,
    max: HEIGHT_PERCENTAGES.FULL,
  },
  [HEIGHT_PERCENTAGES.HALF]: {
    min: HEIGHT_PERCENTAGES.MIN,
    max: HEIGHT_PERCENTAGES.LARGE,
  },
} as const;
