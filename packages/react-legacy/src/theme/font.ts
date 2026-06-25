/* eslint-disable sort-keys-fix/sort-keys-fix */
import { font as FONT, type KDSFoundationFont } from '../foundation';

export type KDSFontFamily = 'Text' | 'Numbers';
export type KDSFontHeading = 'Display' | 'Headline' | 'Title';
export type KDSFontText = 'Body' | 'Label';
export type KDSFontType = KDSFontHeading | KDSFontText;
export type KDSFontSize = 'Large' | 'Medium' | 'Small';
export type KDSFontWeight = 'Bold' | 'Semi Bold' | 'Regular' | 'Medium' | 'Light' | 'Extra Light' | 'Thin';
export type KDSFont = `${'Typography/' | ''}${KDSFontFamily}/${KDSFontType}/${KDSFontSize}/${KDSFontWeight}`;
export type KDSFontTuple = [KDSFontFamily, KDSFontType, KDSFontSize, KDSFontWeight];

/**
 * Helper generic to get all the values from a Foundation Font object
 */
type FontValues<T extends keyof KDSFoundationFont> =
  KDSFoundationFont[T][keyof KDSFoundationFont[T]];

export interface KDSFontCatalog {
  face: Record<KDSFontFamily, FontValues<'family'>>,
  weight: Record<KDSFontWeight, FontValues<'weight'>>,
}

type KFDFont = KDSFontCatalog & {
  [F in KDSFontFamily]: {
    [T in KDSFontType]: {
      lineHeight: FontValues<'lineHeight'>,
      size: {
        [S in KDSFontSize]: {
          fontSize: FontValues<'size'>,
          tracking: FontValues<'tracking'>,
        };
      },
    };
  };
};

export const font: KFDFont = {
  face: {
    Text: FONT.family.primary,
    Numbers: FONT.family.secondary,
  },
  weight: {
    Bold: FONT.weight.bold,
    'Semi Bold': FONT.weight.semibold,
    Regular: FONT.weight.regular,
    Medium: FONT.weight.medium,
    Light: FONT.weight.light,
    'Extra Light': FONT.weight.extralight,
    Thin: FONT.weight.thin,
  },
  Text: {
    Display: {
      lineHeight: FONT.lineHeight.tight,
      size: {
        Large: {
          fontSize: FONT.size.xxxxxl,
          tracking: FONT.tracking.normal,
        },
        Medium: {
          fontSize: FONT.size.xxxxl,
          tracking: FONT.tracking.normal,
        },
        Small: {
          fontSize: FONT.size.xxxl,
          tracking: FONT.tracking.normal,
        },
      },
    },
    Headline: {
      lineHeight: FONT.lineHeight.snug,
      size: {
        Large: {
          fontSize: FONT.size.xxl,
          tracking: FONT.tracking.normal,
        },
        Medium: {
          fontSize: FONT.size.xl,
          tracking: FONT.tracking.normal,
        },
        Small: {
          fontSize: FONT.size.lg,
          tracking: FONT.tracking.normal,
        },
      },
    },
    Title: {
      lineHeight: FONT.lineHeight.snug,
      size: {
        Large: {
          fontSize: FONT.size.base,
          tracking: FONT.tracking.normal,
        },
        Medium: {
          fontSize: FONT.size.xs,
          tracking: FONT.tracking.wide,
        },
        Small: {
          fontSize: FONT.size.xxs,
          tracking: FONT.tracking.widey,
        },
      },
    },
    Body: {
      lineHeight: FONT.lineHeight.relaxed,
      size: {
        Large: {
          fontSize: FONT.size.xs,
          tracking: FONT.tracking.wide,
        },
        Medium: {
          fontSize: FONT.size.xxs,
          tracking: FONT.tracking.wider,
        },
        Small: {
          fontSize: FONT.size.xxxs,
          tracking: FONT.tracking.widest,
        },
      },
    },
    Label: {
      lineHeight: FONT.lineHeight.normal,
      size: {
        Large: {
          fontSize: FONT.size.xxs,
          tracking: FONT.tracking.widey,
        },
        Medium: {
          fontSize: FONT.size.xxxs,
          tracking: FONT.tracking.widest,
        },
        Small: {
          fontSize: FONT.size.xxxxs,
          tracking: FONT.tracking.widest,
        },
      },
    },
  },
  Numbers: {
    Display: {
      lineHeight: FONT.lineHeight.tight,
      size: {
        Large: {
          fontSize: FONT.size.xxxxxl,
          tracking: FONT.tracking.normal,
        },
        Medium: {
          fontSize: FONT.size.xxxxl,
          tracking: FONT.tracking.normal,
        },
        Small: {
          fontSize: FONT.size.xxxl,
          tracking: FONT.tracking.normal,
        },
      },
    },
    Headline: {
      lineHeight: FONT.lineHeight.snug,
      size: {
        Large: {
          fontSize: FONT.size.xxl,
          tracking: FONT.tracking.normal,
        },
        Medium: {
          fontSize: FONT.size.xl,
          tracking: FONT.tracking.normal,
        },
        Small: {
          fontSize: FONT.size.lg,
          tracking: FONT.tracking.normal,
        },
      },
    },
    Title: {
      lineHeight: FONT.lineHeight.snug,
      size: {
        Large: {
          fontSize: FONT.size.base,
          tracking: FONT.tracking.normal,
        },
        Medium: {
          fontSize: FONT.size.xs,
          tracking: FONT.tracking.wide,
        },
        Small: {
          fontSize: FONT.size.xxs,
          tracking: FONT.tracking.widey,
        },
      },
    },
    Body: {
      lineHeight: FONT.lineHeight.relaxed,
      size: {
        Large: {
          fontSize: FONT.size.xs,
          tracking: FONT.tracking.wide,
        },
        Medium: {
          fontSize: FONT.size.xxs,
          tracking: FONT.tracking.wider,
        },
        Small: {
          fontSize: FONT.size.xxxs,
          tracking: FONT.tracking.widest,
        },
      },
    },
    Label: {
      lineHeight: FONT.lineHeight.normal,
      size: {
        Large: {
          fontSize: FONT.size.xxs,
          tracking: FONT.tracking.widey,
        },
        Medium: {
          fontSize: FONT.size.xxxs,
          tracking: FONT.tracking.widest,
        },
        Small: {
          fontSize: FONT.size.xxxxs,
          tracking: FONT.tracking.widest,
        },
      },
    },
  },
};
