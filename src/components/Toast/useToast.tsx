import {
  createContext,
  PropsWithChildren,
  useState,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';

import { Toast, ToastType } from './Toast';

type ToastContextObject = {
  remove?: (id: string) => void,
  toast?: (toastObject: ToastType) => string,
  toasts?: ToastType[],
};

type ToastProps = PropsWithChildren<ToastContextObject>;

function ToastContainer({ children }: ToastProps) {
  return <div id="toast-container">{children}</div>;
};

const ToastContext = createContext<ToastContextObject>({});

// Provider
// ==============================
let toastCount = 0;

export const ToastContextProvider = ({
  children
}: ToastProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const remove = useCallback((id: string) => {
    setToasts((toastList) => toastList.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((toastObject: ToastType) => {
    toastCount += 1;
    const id = toastObject?.id ?? toastCount.toString();
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
