/// KDS Flutter PoC — KdsCheckbox showcase.
///
/// Run with:
///   flutter run -t example/main.dart
///
/// Shows all Checkbox states side-by-side in both light and dark mode so the
/// engineer can verify visual parity with the React / Figma implementations.

import 'package:flutter/material.dart';
import '../lib/kds_tokens.dart';
import '../lib/kds_checkbox.dart';

void main() {
  runApp(const KdsShowcase());
}

class KdsShowcase extends StatelessWidget {
  const KdsShowcase({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'KDS Flutter PoC',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.light(),
        extensions: const [KdsTokens.light],
      ),
      darkTheme: ThemeData(
        colorScheme: ColorScheme.dark(),
        extensions: const [KdsTokens.dark],
      ),
      themeMode: ThemeMode.system,
      home: const _ShowcasePage(),
    );
  }
}

class _ShowcasePage extends StatefulWidget {
  const _ShowcasePage();
  @override
  State<_ShowcasePage> createState() => _ShowcasePageState();
}

class _ShowcasePageState extends State<_ShowcasePage> {
  // Each row tracks its own state independently.
  KdsCheckboxState _default      = KdsCheckboxState.unchecked;
  KdsCheckboxState _withLabel    = KdsCheckboxState.unchecked;
  KdsCheckboxState _checked      = KdsCheckboxState.checked;
  KdsCheckboxState _indeterminate = KdsCheckboxState.indeterminate;
  KdsCheckboxState _error        = KdsCheckboxState.unchecked;
  KdsCheckboxState _errorChecked = KdsCheckboxState.checked;
  // disabled rows are read-only — no state tracking needed

  @override
  Widget build(BuildContext context) {
    final tokens = Theme.of(context).extension<KdsTokens>() ?? KdsTokens.light;

    return Scaffold(
      backgroundColor: tokens.colorBackgroundPrimary,
      appBar: AppBar(
        title: const Text('KDS Checkbox — Flutter PoC'),
        backgroundColor: tokens.colorBackgroundPrimary,
        foregroundColor: tokens.colorTextAndIconsPrimary,
        elevation: 0,
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(tokens.spacingX6),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _sectionTitle('Default states', tokens),
            SizedBox(height: tokens.spacingX4),

            _row(
              label: 'Unchecked',
              child: KdsCheckbox(
                state: _default,
                onChanged: (s) => setState(() => _default = s),
              ),
              tokens: tokens,
            ),
            _dividerLine(tokens),

            _row(
              label: 'Checked',
              child: KdsCheckbox(
                state: _checked,
                onChanged: (s) => setState(() => _checked = s),
              ),
              tokens: tokens,
            ),
            _dividerLine(tokens),

            _row(
              label: 'Indeterminate',
              child: KdsCheckbox(
                state: _indeterminate,
                onChanged: (s) => setState(() => _indeterminate = s),
              ),
              tokens: tokens,
            ),
            _dividerLine(tokens),

            _row(
              label: 'With label',
              child: KdsCheckbox(
                state: _withLabel,
                onChanged: (s) => setState(() => _withLabel = s),
                label: 'Acepto los términos y condiciones',
              ),
              tokens: tokens,
            ),

            SizedBox(height: tokens.spacingX6),
            _sectionTitle('Error states', tokens),
            SizedBox(height: tokens.spacingX4),

            _row(
              label: 'Error unchecked',
              child: KdsCheckbox(
                state: _error,
                onChanged: (s) => setState(() => _error = s),
                error: true,
                label: 'Debes aceptar los términos',
              ),
              tokens: tokens,
            ),
            _dividerLine(tokens),

            _row(
              label: 'Error checked',
              child: KdsCheckbox(
                state: _errorChecked,
                onChanged: (s) => setState(() => _errorChecked = s),
                error: true,
              ),
              tokens: tokens,
            ),

            SizedBox(height: tokens.spacingX6),
            _sectionTitle('Disabled states', tokens),
            SizedBox(height: tokens.spacingX4),

            _row(
              label: 'Disabled unchecked',
              child: KdsCheckbox(
                state: KdsCheckboxState.unchecked,
                onChanged: null,
                disabled: true,
                label: 'Opción no disponible',
              ),
              tokens: tokens,
            ),
            _dividerLine(tokens),

            _row(
              label: 'Disabled checked',
              child: KdsCheckbox(
                state: KdsCheckboxState.checked,
                onChanged: null,
                disabled: true,
                label: 'Opción no disponible',
              ),
              tokens: tokens,
            ),
            _dividerLine(tokens),

            _row(
              label: 'Disabled indeterminate',
              child: KdsCheckbox(
                state: KdsCheckboxState.indeterminate,
                onChanged: null,
                disabled: true,
              ),
              tokens: tokens,
            ),

            SizedBox(height: tokens.spacingX6),
            _tokenNote(tokens),
          ],
        ),
      ),
    );
  }

  Widget _sectionTitle(String text, KdsTokens tokens) {
    return Text(
      text,
      style: TextStyle(
        fontSize: 18,
        fontWeight: FontWeight.w600,
        color: tokens.colorTextAndIconsPrimary,
      ),
    );
  }

  Widget _row({
    required String label,
    required Widget child,
    required KdsTokens tokens,
  }) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: tokens.spacingX3),
      child: Row(
        children: [
          SizedBox(
            width: 180,
            child: Text(
              label,
              style: TextStyle(
                fontSize: 13,
                color: tokens.colorTextAndIconsPrimary.withOpacity(0.6),
              ),
            ),
          ),
          child,
        ],
      ),
    );
  }

  Widget _dividerLine(KdsTokens tokens) {
    return Divider(
      height: 1,
      thickness: tokens.borderThin,
      color: tokens.colorStrokeSecondary.withOpacity(0.2),
    );
  }

  Widget _tokenNote(KdsTokens tokens) {
    return Container(
      padding: EdgeInsets.all(tokens.spacingX4),
      decoration: BoxDecoration(
        color: tokens.colorStrokeSecondary.withOpacity(0.06),
        borderRadius: BorderRadius.circular(tokens.radiusX2),
      ),
      child: Text(
        'All colours, radii, spacing, and border widths above come from KdsTokens '
        '— the same semantic token names as the CSS custom properties in the React '
        'implementation. Switch your device to dark mode to see the dark palette.',
        style: TextStyle(
          fontSize: 12,
          height: 1.6,
          color: tokens.colorTextAndIconsPrimary.withOpacity(0.7),
        ),
      ),
    );
  }
}
