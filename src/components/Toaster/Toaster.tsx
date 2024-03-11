import { useCallback, useEffect } from 'react';

import { Container, Row } from '../Grid';
import { Text } from '../Typography';
import usePausableTimer from './usePausableTimer';

import './styles.scss';

export type ToasterProps = {
  autoDismissAfter?: number;
  description?: string;
  id: number;
  remove?(): any;
  title?: string;
  type?: 'error' | 'info' | 'success' | 'warning';
}

export const Toast = (({ autoDismissAfter = 10000, description = '', id, remove = () => { }, title = '', type = 'success' }: ToasterProps) => {
  const icon = {
    info: 'ri-information-fill',
    warning: 'ri-error-warning-fill',
    success: 'ri-checkbox-circle-fill',
    error: 'ri-close-circle-fill',
  };

  const removeSelf = useCallback(() => {
    document.getElementById(id).style.setProperty('animation', 'toast-unmount 1000ms');
    setTimeout(() => {
      remove(id);
    }, 1000);
  }, [id, remove]);

  const { pause, resume } = usePausableTimer(removeSelf, autoDismissAfter);

  useEffect(() => {
    const progressBar = document.getElementById(`progress-${id}`);
    if (progressBar) {
      progressBar.style.setProperty('animation-duration', `${autoDismissAfter}ms`);
    }
  }, [id, autoDismissAfter]);

  return (
    <div
      id={`${id}`}
      role="alert"
      className={`toast toast-${type}`}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="toast-colored-box">
        <Icon color="#ffffff" name={icon[type]} />
        {
          (autoDismissAfter !== 0)
            ? (<div id={`progress-${id}`} className="toast-progress-bar" />)
            : null
        }
      </div>
      <button
        type="button"
        onClick={() => remove(id)}
        className="toast-btn-close"
      >
        <Icon size="lg" name="ri-close-line" />
      </button>
      <Container fluid className="toast-content">
        <Row>
          {title && <Text bold className="mb-1w">{title}</Text>}
        </Row>
        <Row>
          {description && (<Text className="mb-2w" size="sm">{description}</Text>)}
        </Row>
      </Container>
    </div>
  );
}
);
