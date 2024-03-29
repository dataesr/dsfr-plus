import { useCallback, useEffect } from 'react';

import { Container, Row } from '../Grid';
import { ToastTypeWithId } from './types';
import { Text } from '../Typography';
import usePausableTimer from './usePausableTimer';

import './styles.scss';

export const Toast = (({ autoDismissAfter = 3000, description = '', id, remove = () => { }, title = '', type = 'success' }: ToastTypeWithId) => {
  const icon = {
    error: 'fr-icon-close-circle-fill',
    info: 'fr-icon-information-fill',
    success: 'fr-icon-checkbox-circle-fill',
    warning: 'fr-icon-error-warning-fill',
  };

  const removeSelf = useCallback(() => {
    document.getElementById(id)?.style.setProperty('animation', 'toast-unmount 1000ms');
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
        <span className={icon[type]} />
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
        <span className="fr-icon-close-line" />
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
});
