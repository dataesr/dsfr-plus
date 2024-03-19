type BaseToastType = {
  autoDismissAfter?: number;
  description?: string;
  remove?(id: string): any;
  title?: string;
  type?: 'error' | 'info' | 'success' | 'warning';
};

export type ToastType = BaseToastType & { id?: string; };

export type ToastTypeWithId = BaseToastType & { id: string; };
