import { MutableRefObject, useEffect, useState, useRef } from 'react';

export default function usePausableTimer(callback: () => void, delay: number) {
  const [paused, setPaused] = useState(false);
  const start:MutableRefObject<number> = useRef((new Date()).getTime());
  const remaining:MutableRefObject<number> = useRef(delay);
  const timeoutId:MutableRefObject<number|undefined> = useRef(undefined);

  const clear = () => clearTimeout(timeoutId.current);

  const pause = () => {
    setPaused(true);
    remaining.current -= ((new Date()).getTime() - start.current);
    clear();
  };

  const resume = () => {
    start.current = (new Date()).getTime();
    setPaused(false);
  };

  // Set up the interval.
  useEffect(() => {
    if (!paused && delay) {
      timeoutId.current = setTimeout(callback, remaining.current);
    }
    return clear;
  }, [remaining, paused, delay, callback]);
  return { paused, pause, resume };
}
