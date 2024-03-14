import {
  createContext,
  ReactNode,
  useState,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';

import { Toast } from './Toast';

interface Props {
  children?: ReactNode
  // any props that come into the component
}

function ToastContainer({ children }: Props) {
  return <div id="toast-container">{children}</div>;
}

const ToastContext = createContext({});

// Provider
// ==============================
let toastCount = 0;

interface DataType {
  id: number;
}

export function ToastContextProvider({ children }: Props) {
  const [toasts, setToasts] = useState<Array<DataType>>([]);

  const remove = useCallback((id: number) => {
    setToasts((toastList) => toastList.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback((toastObject: Object) => {
    toastCount += 1;
    setToasts((toastList) => [...toastList, { ...toastObject, id: toastCount }]);
    return toastCount;
  }, []);

  const value = useMemo(() => ({
    toast, remove, toasts,
  }), [toast, remove, toasts]);

  const content = (
    <ToastContainer>
      {
        toasts.map((toastOptions) => (
          <Toast
            key={toastOptions.id}
            remove={remove}
            {...toastOptions}
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
