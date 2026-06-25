export interface CopyTextProps {
  $content?: string;
  $title?: string;
  disabled?: boolean;
  onCopy?: () => void;
  onCopySuccess?: () => void;
}
