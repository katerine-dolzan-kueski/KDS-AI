import 'dart:ui';
import 'package:flutter/material.dart';

/// KDS token foundation — Flutter equivalent of the KDS CSS custom properties.
///
/// Usage — register in your MaterialApp:
///
/// ```dart
/// MaterialApp(
///   theme: ThemeData(
///     extensions: [KdsTokens.light],
///   ),
///   darkTheme: ThemeData(
///     extensions: [KdsTokens.dark],
///   ),
/// )
/// ```
///
/// Consume in a widget:
///
/// ```dart
/// final tokens = Theme.of(context).extension<KdsTokens>() ?? KdsTokens.light;
/// ```
///
/// Every property name maps 1-to-1 to its CSS custom property counterpart:
///   colorBackgroundBrand  ←→  --color-background-brand
///   spacingX2             ←→  --spacing-x2
///   radiusX1              ←→  --radius-x1
///   borderThick           ←→  --border-thick
@immutable
class KdsTokens extends ThemeExtension<KdsTokens> {
  const KdsTokens({
    // ── Backgrounds ──────────────────────────────────────────────────────────
    required this.colorBackgroundBrand,
    required this.colorBackgroundDanger,
    required this.colorBackgroundPrimary,

    // ── Text & icons ─────────────────────────────────────────────────────────
    required this.colorTextAndIconsPrimary,
    required this.colorTextAndIconsInvertPrimary,

    // ── Strokes ──────────────────────────────────────────────────────────────
    required this.colorStrokeSecondary,
    required this.colorStrokeError,
    required this.colorStrokeBrand,

    // ── States ───────────────────────────────────────────────────────────────
    required this.colorStatesHover,
    required this.colorStatesPressed,

    // ── Spacing (--spacing-xN = N × 4px) ─────────────────────────────────────
    required this.spacingX1,
    required this.spacingX2,
    required this.spacingX3,
    required this.spacingX4,
    required this.spacingX5,
    required this.spacingX6,

    // ── Corner radius ─────────────────────────────────────────────────────────
    required this.radiusX1,
    required this.radiusX2,
    required this.radiusX3,
    required this.radiusMax,

    // ── Border / stroke widths ───────────────────────────────────────────────
    required this.borderThin,
    required this.borderRegular,
    required this.borderThick,
  });

  // ── Backgrounds ────────────────────────────────────────────────────────────
  final Color colorBackgroundBrand;
  final Color colorBackgroundDanger;
  final Color colorBackgroundPrimary;

  // ── Text & icons ────────────────────────────────────────────────────────────
  final Color colorTextAndIconsPrimary;
  final Color colorTextAndIconsInvertPrimary;

  // ── Strokes ─────────────────────────────────────────────────────────────────
  final Color colorStrokeSecondary;
  final Color colorStrokeError;
  final Color colorStrokeBrand;

  // ── States ──────────────────────────────────────────────────────────────────
  final Color colorStatesHover;
  final Color colorStatesPressed;

  // ── Spacing ─────────────────────────────────────────────────────────────────
  final double spacingX1; // 4px
  final double spacingX2; // 8px
  final double spacingX3; // 12px
  final double spacingX4; // 16px
  final double spacingX5; // 20px
  final double spacingX6; // 24px

  // ── Corner radius ────────────────────────────────────────────────────────────
  final double radiusX1; //  4px
  final double radiusX2; //  8px
  final double radiusX3; // 12px
  final double radiusMax; // 9999px (pill)

  // ── Border widths ────────────────────────────────────────────────────────────
  final double borderThin;    // 0.5px
  final double borderRegular; // 1px
  final double borderThick;   // 2px

  // ── Light mode ──────────────────────────────────────────────────────────────
  // Values sourced from packages/react/src/styles/tokens/colors.css (light)
  static const KdsTokens light = KdsTokens(
    colorBackgroundBrand:           Color(0xFF0069F1),
    colorBackgroundDanger:          Color(0xFFD82938),
    colorBackgroundPrimary:         Color(0xFFFFFFFF),
    colorTextAndIconsPrimary:       Color(0xFF141C22),
    colorTextAndIconsInvertPrimary: Color(0xFFFFFFFF),
    colorStrokeSecondary:           Color(0xFF384550),
    colorStrokeError:               Color(0xFFD82938),
    colorStrokeBrand:               Color(0xFF0069F1),
    colorStatesHover:               Color(0x1A141C22), // #141c22 @ 10%
    colorStatesPressed:             Color(0x33141C22), // #141c22 @ 20%
    spacingX1: 4.0,
    spacingX2: 8.0,
    spacingX3: 12.0,
    spacingX4: 16.0,
    spacingX5: 20.0,
    spacingX6: 24.0,
    radiusX1:  4.0,
    radiusX2:  8.0,
    radiusX3:  12.0,
    radiusMax: 9999.0,
    borderThin:    0.5,
    borderRegular: 1.0,
    borderThick:   2.0,
  );

  // ── Dark mode ────────────────────────────────────────────────────────────────
  // Invert colours flip where contrast is needed; spacing/radius/border are
  // theme-invariant.
  static const KdsTokens dark = KdsTokens(
    colorBackgroundBrand:           Color(0xFF2988FF),
    colorBackgroundDanger:          Color(0xFFEB5859),
    colorBackgroundPrimary:         Color(0xFF141C22),
    colorTextAndIconsPrimary:       Color(0xFFECF2F7),
    colorTextAndIconsInvertPrimary: Color(0xFF141C22),
    colorStrokeSecondary:           Color(0xFFB2BDC5),
    colorStrokeError:               Color(0xFFEB5859),
    colorStrokeBrand:               Color(0xFF2988FF),
    colorStatesHover:               Color(0x1AFFFFFF), // white @ 10%
    colorStatesPressed:             Color(0x33FFFFFF), // white @ 20%
    spacingX1: 4.0,
    spacingX2: 8.0,
    spacingX3: 12.0,
    spacingX4: 16.0,
    spacingX5: 20.0,
    spacingX6: 24.0,
    radiusX1:  4.0,
    radiusX2:  8.0,
    radiusX3:  12.0,
    radiusMax: 9999.0,
    borderThin:    0.5,
    borderRegular: 1.0,
    borderThick:   2.0,
  );

  // ── ThemeExtension boilerplate ───────────────────────────────────────────────

  @override
  KdsTokens copyWith({
    Color? colorBackgroundBrand,
    Color? colorBackgroundDanger,
    Color? colorBackgroundPrimary,
    Color? colorTextAndIconsPrimary,
    Color? colorTextAndIconsInvertPrimary,
    Color? colorStrokeSecondary,
    Color? colorStrokeError,
    Color? colorStrokeBrand,
    Color? colorStatesHover,
    Color? colorStatesPressed,
    double? spacingX1,
    double? spacingX2,
    double? spacingX3,
    double? spacingX4,
    double? spacingX5,
    double? spacingX6,
    double? radiusX1,
    double? radiusX2,
    double? radiusX3,
    double? radiusMax,
    double? borderThin,
    double? borderRegular,
    double? borderThick,
  }) {
    return KdsTokens(
      colorBackgroundBrand:           colorBackgroundBrand           ?? this.colorBackgroundBrand,
      colorBackgroundDanger:          colorBackgroundDanger          ?? this.colorBackgroundDanger,
      colorBackgroundPrimary:         colorBackgroundPrimary         ?? this.colorBackgroundPrimary,
      colorTextAndIconsPrimary:       colorTextAndIconsPrimary       ?? this.colorTextAndIconsPrimary,
      colorTextAndIconsInvertPrimary: colorTextAndIconsInvertPrimary ?? this.colorTextAndIconsInvertPrimary,
      colorStrokeSecondary:           colorStrokeSecondary           ?? this.colorStrokeSecondary,
      colorStrokeError:               colorStrokeError               ?? this.colorStrokeError,
      colorStrokeBrand:               colorStrokeBrand               ?? this.colorStrokeBrand,
      colorStatesHover:               colorStatesHover               ?? this.colorStatesHover,
      colorStatesPressed:             colorStatesPressed             ?? this.colorStatesPressed,
      spacingX1:    spacingX1    ?? this.spacingX1,
      spacingX2:    spacingX2    ?? this.spacingX2,
      spacingX3:    spacingX3    ?? this.spacingX3,
      spacingX4:    spacingX4    ?? this.spacingX4,
      spacingX5:    spacingX5    ?? this.spacingX5,
      spacingX6:    spacingX6    ?? this.spacingX6,
      radiusX1:     radiusX1     ?? this.radiusX1,
      radiusX2:     radiusX2     ?? this.radiusX2,
      radiusX3:     radiusX3     ?? this.radiusX3,
      radiusMax:    radiusMax    ?? this.radiusMax,
      borderThin:    borderThin    ?? this.borderThin,
      borderRegular: borderRegular ?? this.borderRegular,
      borderThick:   borderThick   ?? this.borderThick,
    );
  }

  @override
  KdsTokens lerp(KdsTokens? other, double t) {
    if (other == null) return this;
    return KdsTokens(
      colorBackgroundBrand:           Color.lerp(colorBackgroundBrand,           other.colorBackgroundBrand,           t)!,
      colorBackgroundDanger:          Color.lerp(colorBackgroundDanger,          other.colorBackgroundDanger,          t)!,
      colorBackgroundPrimary:         Color.lerp(colorBackgroundPrimary,         other.colorBackgroundPrimary,         t)!,
      colorTextAndIconsPrimary:       Color.lerp(colorTextAndIconsPrimary,       other.colorTextAndIconsPrimary,       t)!,
      colorTextAndIconsInvertPrimary: Color.lerp(colorTextAndIconsInvertPrimary, other.colorTextAndIconsInvertPrimary, t)!,
      colorStrokeSecondary:           Color.lerp(colorStrokeSecondary,           other.colorStrokeSecondary,           t)!,
      colorStrokeError:               Color.lerp(colorStrokeError,               other.colorStrokeError,               t)!,
      colorStrokeBrand:               Color.lerp(colorStrokeBrand,               other.colorStrokeBrand,               t)!,
      colorStatesHover:               Color.lerp(colorStatesHover,               other.colorStatesHover,               t)!,
      colorStatesPressed:             Color.lerp(colorStatesPressed,             other.colorStatesPressed,             t)!,
      spacingX1:    lerpDouble(spacingX1,    other.spacingX1,    t)!,
      spacingX2:    lerpDouble(spacingX2,    other.spacingX2,    t)!,
      spacingX3:    lerpDouble(spacingX3,    other.spacingX3,    t)!,
      spacingX4:    lerpDouble(spacingX4,    other.spacingX4,    t)!,
      spacingX5:    lerpDouble(spacingX5,    other.spacingX5,    t)!,
      spacingX6:    lerpDouble(spacingX6,    other.spacingX6,    t)!,
      radiusX1:     lerpDouble(radiusX1,     other.radiusX1,     t)!,
      radiusX2:     lerpDouble(radiusX2,     other.radiusX2,     t)!,
      radiusX3:     lerpDouble(radiusX3,     other.radiusX3,     t)!,
      radiusMax:    lerpDouble(radiusMax,    other.radiusMax,    t)!,
      borderThin:    lerpDouble(borderThin,    other.borderThin,    t)!,
      borderRegular: lerpDouble(borderRegular, other.borderRegular, t)!,
      borderThick:   lerpDouble(borderThick,   other.borderThick,   t)!,
    );
  }
}
