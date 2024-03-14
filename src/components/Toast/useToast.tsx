import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { BaseToastType, Toast } from './Toast';

type ToastType = BaseToastType & { id?: string; };

type ToastTypeWithId = BaseToastType & { id: string; };

type ToastContextObject = {
  remove?: (id: string) => void,
  toast?: (toastObject: ToastType) => string,
  toasts?: ToastTypeWithId[],
};

type ToastProps = PropsWithChildren<ToastContextObject>;

function ToastContainer({ children }: ToastProps) {
  return <div id="toast-container">{children}</div>;
};

const ToastContext = createContext<ToastContextObject>({});

// Provider
// ==============================
export const ToastContextProvider = ({
  children
}: ToastProps) => {
  const [toasts, setToasts] = useState<ToastTypeWithId[]>([]);

  const remove = useCallback((id: string) => {
    setToasts((toastList) => toastList.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((toastObject: ToastType) => {
    const id = toastObject?.id ?? `toast-${useId()}`;
    setToasts((toastList) => [...toastList, { ...toastObject, id }]);
    return id;
  }, []);

  const value: ToastContextObject = useMemo(() => ({
    remove,
    toast,
    toasts,
  }), [remove, toast, toasts]);

  const content = (
    <ToastContainer>
      {
        toasts.map((toast) => (
          <Toast
            key={toast.id}
            remove={remove}
            {...toast}
          />
        ))
      }
    </ToastContainer>
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(content, document.body)}
    </ToastContext.Provider>
  );
}

// Hook
// ==============================
export const useToast = () => useContext(ToastContext);
