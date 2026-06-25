export const copyTextToClipboard = async (text: string) => {
  if (!navigator.clipboard) {
    const fallbackCopyTextToClipboard = (_text: string) => {
      const textArea = document.createElement('textarea');
      textArea.value = _text;

      textArea.style.top = '-10px';
      textArea.style.left = '-10px';
      textArea.style.position = 'fixed';

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      let copied;
      try {
        copied = document.execCommand('copy');
      } catch {
        copied = false;
      }
      document.body.removeChild(textArea);

      return copied;
    };

    return fallbackCopyTextToClipboard(text);
  }

  let copied;
  try {
    await navigator.clipboard.writeText(text);
    copied = true;
  } catch (error) {
    copied = false;
  }

  return copied;
};
