import 'package:flutter/material.dart';
import 'kds_tokens.dart';

// ── Public types ──────────────────────────────────────────────────────────────

/// Maps to React's `$checked: boolean | 'indeterminate'`.
enum KdsCheckboxState {
  unchecked,
  checked,
  indeterminate,
}

// ── Widget ────────────────────────────────────────────────────────────────────

/// A controlled checkbox that faithfully mirrors the KDS React Checkbox spec.
///
/// Tokens consumed (see [KdsTokens]):
///   colorBackgroundBrand / colorBackgroundDanger  ← checked/error fill
///   colorStrokeSecondary / colorStrokeError        ← unchecked border
///   colorStrokeBrand                               ← focus ring
///   colorTextAndIconsInvertPrimary                 ← icon colour
///   colorStatesHover / colorStatesPressed          ← interaction overlays
///   radiusX1                                       ← box corners
///   borderThick                                    ← border & focus ring width
///   spacingX1 / spacingX2                          ← hit-area padding / label gap
///
/// ```dart
/// KdsCheckbox(
///   state: KdsCheckboxState.unchecked,
///   onChanged: (next) => setState(() => _state = next),
///   label: 'Acepto los términos y condiciones',
/// )
/// ```
class KdsCheckbox extends StatefulWidget {
  const KdsCheckbox({
    super.key,
    required this.state,
    required this.onChanged,
    this.error = false,
    this.disabled = false,
    this.label,
  });

  /// Current selection state — unchecked, checked, or indeterminate.
  final KdsCheckboxState state;

  /// Called when the user taps. Receives the toggled state.
  /// Indeterminate always resolves to [KdsCheckboxState.checked] on tap.
  /// Pass null to make the checkbox read-only.
  final ValueChanged<KdsCheckboxState>? onChanged;

  /// When true, switches fill and border to the danger/error colour tokens.
  final bool error;

  /// Disables interaction and reduces the widget opacity to 40 %.
  final bool disabled;

  /// Optional label rendered to the right of the box.
  final String? label;

  @override
  State<KdsCheckbox> createState() => _KdsCheckboxState();
}

class _KdsCheckboxState extends State<KdsCheckbox>
    with SingleTickerProviderStateMixin {
  // Animates the box fill appearing / disappearing (200 ms ease-in-out).
  late final AnimationController _fillCtrl;
  late final Animation<double> _fillAnim;

  bool _hovered = false;
  bool _pressed = false;
  bool _focused = false;

  @override
  void initState() {
    super.initState();
    _fillCtrl = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 200),
      value: widget.state != KdsCheckboxState.unchecked ? 1.0 : 0.0,
    );
    _fillAnim = CurvedAnimation(
      parent: _fillCtrl,
      curve: Curves.easeInOut,
    );
  }

  @override
  void didUpdateWidget(KdsCheckbox old) {
    super.didUpdateWidget(old);
    final wasActive = old.state != KdsCheckboxState.unchecked;
    final isActive  = widget.state != KdsCheckboxState.unchecked;
    if (wasActive != isActive) {
      isActive ? _fillCtrl.forward() : _fillCtrl.reverse();
    }
  }

  @override
  void dispose() {
    _fillCtrl.dispose();
    super.dispose();
  }

  // ── Interaction helpers ───────────────────────────────────────────────────

  void _handleTap() {
    if (widget.disabled || widget.onChanged == null) return;
    final next = widget.state == KdsCheckboxState.checked
        ? KdsCheckboxState.unchecked
        : KdsCheckboxState.checked;
    widget.onChanged!(next);
  }

  // ── Build ─────────────────────────────────────────────────────────────────

  @override
  Widget build(BuildContext context) {
    final tokens = Theme.of(context).extension<KdsTokens>() ?? KdsTokens.light;

    final isActive = widget.state != KdsCheckboxState.unchecked;

    // Colour tokens resolved per error state — mirrors the CSS custom property
    // swap in Checkbox.styles.ts.
    final fillColor   = widget.error ? tokens.colorBackgroundDanger : tokens.colorBackgroundBrand;
    final borderColor = widget.error ? tokens.colorStrokeError      : tokens.colorStrokeSecondary;

    return Opacity(
      // 40 % opacity for disabled — same as React's `opacity-40`.
      opacity: widget.disabled ? 0.4 : 1.0,
      child: Focus(
        onFocusChange: (f) => setState(() => _focused = f),
        child: MouseRegion(
          cursor: widget.disabled
              ? SystemMouseCursors.forbidden
              : SystemMouseCursors.click,
          onEnter: (_) => setState(() => _hovered = true),
          onExit:  (_) => setState(() {
            _hovered = false;
            _pressed = false;
          }),
          child: GestureDetector(
            onTap: _handleTap,
            onTapDown: (_) => setState(() => _pressed = true),
            onTapUp:   (_) => setState(() => _pressed = false),
            onTapCancel: () => setState(() => _pressed = false),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // ── Hit area: 36 × 36 px (18px box + spacingX1 all sides) ──
                SizedBox(
                  width:  36,
                  height: 36,
                  child: Center(
                    child: AnimatedBuilder(
                      animation: _fillAnim,
                      builder: (context, _) => _buildBox(
                        tokens: tokens,
                        isActive: isActive,
                        fillColor: fillColor,
                        borderColor: borderColor,
                      ),
                    ),
                  ),
                ),

                // ── Optional label ────────────────────────────────────────────
                if (widget.label != null) ...[
                  SizedBox(width: tokens.spacingX2),
                  Flexible(
                    child: Text(
                      widget.label!,
                      style: TextStyle(
                        fontSize:   14,
                        height:     1.0,
                        color:      tokens.colorTextAndIconsPrimary,
                        decoration: TextDecoration.none,
                      ),
                    ),
                  ),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }

  // ── Box ───────────────────────────────────────────────────────────────────

  Widget _buildBox({
    required KdsTokens tokens,
    required bool isActive,
    required Color fillColor,
    required Color borderColor,
  }) {
    // Background colour logic:
    //   active  → fill (brand or danger)
    //   pressed → states/pressed overlay on transparent base
    //   hovered → states/hover overlay on transparent base
    //   default → transparent
    final Color bg = isActive
        ? Color.lerp(Colors.transparent, fillColor, _fillAnim.value)!
        : _pressed
            ? tokens.colorStatesPressed
            : _hovered
                ? tokens.colorStatesHover
                : Colors.transparent;

    final Color effectiveBorder = isActive ? fillColor : borderColor;

    return Stack(
      clipBehavior: Clip.none,
      children: [
        // ── Focus ring ──────────────────────────────────────────────────────
        // Placed in a Stack so it sits outside the 18×18 box bounds.
        if (_focused)
          Positioned(
            top:    -tokens.spacingX1,
            left:   -tokens.spacingX1,
            right:  -tokens.spacingX1,
            bottom: -tokens.spacingX1,
            child: DecoratedBox(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(tokens.radiusX2),
                border: Border.all(
                  color: tokens.colorStrokeBrand,
                  width: tokens.borderThick,
                ),
              ),
            ),
          ),

        // ── Checkbox box: 18 × 18 px ────────────────────────────────────────
        Container(
          width:  18,
          height: 18,
          decoration: BoxDecoration(
            color: bg,
            borderRadius: BorderRadius.circular(tokens.radiusX1),
            border: Border.all(
              color: effectiveBorder,
              width: tokens.borderThick,
            ),
          ),
          // ── Icon ───────────────────────────────────────────────────────────
          child: isActive
              ? Center(
                  child: CustomPaint(
                    size: const Size(12, 12),
                    painter: widget.state == KdsCheckboxState.indeterminate
                        ? _MinusPainter(
                            color:       tokens.colorTextAndIconsInvertPrimary,
                            strokeWidth: tokens.borderThick,
                          )
                        : _CheckPainter(
                            color:       tokens.colorTextAndIconsInvertPrimary,
                            strokeWidth: tokens.borderThick,
                          ),
                  ),
                )
              : null,
        ),
      ],
    );
  }
}

// ── Icon painters ─────────────────────────────────────────────────────────────

class _CheckPainter extends CustomPainter {
  const _CheckPainter({required this.color, required this.strokeWidth});
  final Color  color;
  final double strokeWidth;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color      = color
      ..strokeWidth = strokeWidth
      ..style      = PaintingStyle.stroke
      ..strokeCap  = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    // Classic tick: bottom-left inflection → bottom-right tail.
    final path = Path()
      ..moveTo(size.width * 0.15, size.height * 0.52)
      ..lineTo(size.width * 0.42, size.height * 0.78)
      ..lineTo(size.width * 0.85, size.height * 0.24);

    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(_CheckPainter old) => old.color != color;
}

class _MinusPainter extends CustomPainter {
  const _MinusPainter({required this.color, required this.strokeWidth});
  final Color  color;
  final double strokeWidth;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color       = color
      ..strokeWidth  = strokeWidth
      ..style       = PaintingStyle.stroke
      ..strokeCap   = StrokeCap.round;

    canvas.drawLine(
      Offset(size.width * 0.15, size.height * 0.5),
      Offset(size.width * 0.85, size.height * 0.5),
      paint,
    );
  }

  @override
  bool shouldRepaint(_MinusPainter old) => old.color != color;
}
