export type VariableResolvedType = 'COLOR' | 'BOOLEAN' | 'STRING' | 'NUMBER';

export interface VariableCollectionMode {
  modeId: string;
  name: string;
}

export interface CodeSyntax {
  WEB: string;
  ANDROID: string;
  iOS: string;
}

export interface VariableCollection {
  id: string;
  name: string;
  key: string;
  modes: VariableCollectionMode[];
  defaultModeId: string;
  remote: boolean;
  hiddenFromPublishing: boolean;
  variableIds: string[];
}

export interface VariableAlias {
  type: 'VARIABLE_ALIAS';
  id: string;
}

export type ColorValue = RGBAColor | VariableAlias;
export type FloatValue = number | VariableAlias;
export type StringValue = string;

export type ValuesByMode = Record<string, ColorValue | FloatValue | StringValue>;

export interface Variable {
  id: string;
  name: string;
  key: string;
  variableCollectionId: string;
  resolvedType: VariableResolvedType;
  valuesByMode: ValuesByMode;
  remote: boolean;
  description: string;
  hiddenFromPublishing: boolean;
  scopes: string[];
  codeSyntax: CodeSyntax;
  deletedButReferenced: boolean;
}

export interface Meta {
  variables: Record<string, Variable>;
  variableCollections: Record<string, VariableCollection>;
}

export interface FigmaOkResponse {
  status: number;
  error: false;
  meta: Meta;
}

export interface FigmaErrResponse {
  status: number;
  error: true;
  message: string;
}

export interface RGBAColor {
  r: number;
  g: number;
  b: number;
  a?: number;
}

export type GetLocalVariablesResponse = FigmaOkResponse | FigmaErrResponse;

export interface Dictionary {
  [key: string]: string | number | Dictionary | undefined | null | boolean;
}

// Base types and enums
export type Role = 'owner';
export type EditorType = 'figma';
export type BooleanOperation = 'UNION';
export type ScrollBehavior = 'SCROLLS';
export type BlendMode = 'PASS_THROUGH';
export type LayoutAlign = 'INHERIT';
export type LayoutPositioning = 'AUTO';
export type LayoutSizing = 'FIXED';
export type GridChildAlign = 'AUTO';
export type StrokeAlign = 'INSIDE';
export type StrokeJoin = 'MITER';
export type StrokeCap = 'NONE';
export type MaskType = 'ALPHA';
export type TransitionEasing = 'EASE_IN';
export type TriggerType = 'ON_CLICK';
export type ActionType = 'BACK';
export type EffectType = 'DROP_SHADOW';
export type PaintType = 'SOLID';
export type ExportFormat = 'JPG';
export type ConstraintType = 'SCALE';
export type WindingRule = 'NONZERO';
export type StyleType = 'FILL';
export type VerticalConstraint = 'TOP';
export type HorizontalConstraint = 'LEFT';
export type VariableType = 'VARIABLE_ALIAS';

// Utility types
export interface VariableAlias {
  type: VariableType;
  id: string;
}

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface Vector2 {
  x: number;
  y: number;
}

export interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Transform {
  relativeTransform: [[number, number, number], [number, number, number]];
}

// Complex nested types
export interface Size {
  x: VariableAlias;
  y: VariableAlias;
}

export interface IndividualStrokeWeights {
  top: VariableAlias;
  bottom: VariableAlias;
  left: VariableAlias;
  right: VariableAlias;
}

export interface RectangleCornerRadii {
  RECTANGLE_TOP_LEFT_CORNER_RADIUS: VariableAlias;
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS: VariableAlias;
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: VariableAlias;
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: VariableAlias;
}

export interface BoundVariables {
  size?: Size;
  individualStrokeWeights?: IndividualStrokeWeights;
  characters?: VariableAlias;
  itemSpacing?: VariableAlias;
  paddingLeft?: VariableAlias;
  paddingRight?: VariableAlias;
  paddingTop?: VariableAlias;
  paddingBottom?: VariableAlias;
  visible?: VariableAlias;
  topLeftRadius?: VariableAlias;
  topRightRadius?: VariableAlias;
  bottomLeftRadius?: VariableAlias;
  bottomRightRadius?: VariableAlias;
  minWidth?: VariableAlias;
  maxWidth?: VariableAlias;
  minHeight?: VariableAlias;
  maxHeight?: VariableAlias;
  counterAxisSpacing?: VariableAlias;
  opacity?: VariableAlias;
  fontFamily?: VariableAlias[];
  fontSize?: VariableAlias[];
  fontStyle?: VariableAlias[];
  fontWeight?: VariableAlias[];
  letterSpacing?: VariableAlias[];
  lineHeight?: VariableAlias[];
  paragraphSpacing?: VariableAlias[];
  paragraphIndent?: VariableAlias[];
  fills?: VariableAlias[];
  strokes?: VariableAlias[];
  componentProperties?: Record<string, VariableAlias>;
  textRangeFills?: VariableAlias[];
  effects?: VariableAlias[];
  layoutGrids?: VariableAlias[];
  rectangleCornerRadii?: RectangleCornerRadii;
}

export interface Constraints {
  vertical: VerticalConstraint;
  horizontal: HorizontalConstraint;
}

export interface Paint {
  type: PaintType;
  color: Color;
  boundVariables?: {
    color?: VariableAlias;
  };
  visible: boolean;
  opacity: number;
  blendMode: BlendMode;
}

export interface Geometry {
  path: string;
  windingRule: WindingRule;
  overrideID: number;
}

export interface ExportConstraint {
  type: ConstraintType;
  value: number;
}

export interface ExportSetting {
  suffix: string;
  format: ExportFormat;
  constraint: ExportConstraint;
}

export interface EffectBoundVariables {
  radius?: VariableAlias;
  spread?: VariableAlias;
  color?: VariableAlias;
  offsetX?: VariableAlias;
  offsetY?: VariableAlias;
}

export interface Effect {
  type: EffectType;
  showShadowBehindNode: boolean;
  color: Color;
  blendMode: BlendMode;
  offset: Vector2;
  radius: number;
  spread: number;
  visible: boolean;
  boundVariables?: EffectBoundVariables;
}

export interface FillOverrideEntry {
  fills: Paint[];
  inheritFillStyleId: string;
}

export interface Trigger {
  type: TriggerType;
}

export interface Action {
  type: ActionType;
}

export interface Interaction {
  trigger: Trigger;
  actions: Action[];
}

export interface DocumentationLink {
  uri: string;
}

export interface Component {
  key: string;
  name: string;
  description: string;
  componentSetId: string;
  documentationLinks: DocumentationLink[];
  remote: boolean;
}

export interface FigmaComponentSet {
  key: string;
  name: string;
  description: string;
  documentationLinks: DocumentationLink[];
  remote: boolean;
}

export interface FigmaStyle {
  key: string;
  name: string;
  description: string;
  remote: boolean;
  styleType: StyleType;
}

export interface FigmaDocumentNode {
  type: string;
  booleanOperation: BooleanOperation;
  id: string;
  name: string;
  visible: boolean;
  locked: boolean;
  isFixed: boolean;
  scrollBehavior: ScrollBehavior;
  rotation: number;
  componentPropertyReferences: Record<string, string>;
  pluginData: null;
  sharedPluginData: null;
  boundVariables: BoundVariables;
  explicitVariableModes: Record<string, string>;
  blendMode: BlendMode;
  opacity: number;
  children: FigmaDocumentNode[];
  absoluteBoundingBox: Rectangle;
  absoluteRenderBounds: Rectangle;
  preserveRatio: boolean;
  constraints: Constraints;
  relativeTransform: [[number, number, number], [number, number, number]];
  size: Vector2;
  layoutAlign: LayoutAlign;
  layoutGrow: number;
  layoutPositioning: LayoutPositioning;
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  layoutSizingHorizontal: LayoutSizing;
  layoutSizingVertical: LayoutSizing;
  gridRowCount: number;
  gridColumnCount: number;
  gridRowGap: number;
  gridColumnGap: number;
  gridColumnsSizing: string;
  gridRowsSizing: string;
  gridChildHorizontalAlign: GridChildAlign;
  gridChildVerticalAlign: GridChildAlign;
  gridRowSpan: number;
  gridColumnSpan: number;
  gridRowAnchorIndex: number;
  gridColumnAnchorIndex: number;
  fills: Paint[];
  styles: Record<string, string>;
  strokes: Paint[];
  strokeWeight: number;
  strokeAlign: StrokeAlign;
  strokeJoin: StrokeJoin;
  strokeDashes: number[];
  fillOverrideTable: Record<string, FillOverrideEntry>;
  fillGeometry: Geometry[];
  strokeGeometry: Geometry[];
  strokeCap: StrokeCap;
  strokeMiterAngle: number;
  exportSettings: ExportSetting[];
  effects: Effect[];
  isMask: boolean;
  maskType: MaskType;
  isMaskOutline: boolean;
  transitionNodeID: string;
  transitionDuration: number;
  transitionEasing: TransitionEasing;
  interactions: Interaction[];
}

export interface FigmaNodeData {
  document: FigmaDocumentNode;
  components: Record<string, Component>;
  componentSets: Record<string, FigmaComponentSet>;
  schemaVersion: number;
  styles: Record<string, FigmaStyle>;
}

// Main response interface
export interface FigmaFileResponse {
  name: string;
  role: Role;
  lastModified: string; // ISO date string
  editorType: EditorType;
  thumbnailUrl: string;
  version: string;
  nodes: Record<string, FigmaNodeData>;
}

export interface FigmaError {
  status: number;
  err: string;
  message: string;
}

export interface FigmaImagesResponse {
  err: null;
  images: Record<string, string>;
}

export type ComponentWithId = Component & { id: string; componentName: string };

export interface RGBAColor {
  r: number;
  g: number;
  b: number;
  a?: number;
}
