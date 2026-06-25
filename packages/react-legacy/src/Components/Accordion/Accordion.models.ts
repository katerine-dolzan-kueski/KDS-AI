export interface AccordionContext {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface AccordionActionProps {
  $isOpen: boolean;
}
