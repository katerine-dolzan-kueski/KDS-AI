import type { UseToastProps } from './Toast.types';
import toast from 'react-hot-toast';

export const useToast = () => {
  return {
    /** Custom toast with full control */
    showToast: (options?: UseToastProps) => {
      return toast('', options);
    },
    /** Dismiss a specific toast by id */
    dismissToast: (id: string, toasterId?: string) => toast.dismiss(id, toasterId),

    /** Dismiss all toasts */
    dismissAllToasts: () => toast.dismiss(),

    /** Remove a specific toast by id toast or toasterId instance */
    removeToast: (id: string, toasterId?: string) => toast.remove(id, toasterId),

    /** Remove all toasts */
    removeAllToasts: () => toast.remove(),
  };
};
