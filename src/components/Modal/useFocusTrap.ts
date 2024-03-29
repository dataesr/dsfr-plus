// hooks/useFocusTrap.ts
import { useEffect } from 'react'

const FOCUSABLE_ELEMENTS = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
const KEYCODE_TAB = 9;

export function useFocusTrap(ref: React.MutableRefObject<HTMLDialogElement | null>, active: boolean, prevElement: HTMLElement | null) {
  // Focus trap function
  function handleFocus(event: KeyboardEvent) {
    const focusableEls = [
      ...ref.current?.querySelectorAll(FOCUSABLE_ELEMENTS)!,
    ].filter((el) => !el.hasAttribute('disabled')) as HTMLElement[];
    // First focusable element
    const firstFocusableEl = focusableEls[0];
    // Last focusable element
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    // Array of all the focusable elements in the array
    const isTabPressed = event.key === 'Tab' || event.keyCode === KEYCODE_TAB;

    // Logic to focus only the current modal focusable items
    if (!isTabPressed) return;

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        event.preventDefault();
      }
    } else if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus();
      event.preventDefault();
    } else if (document.activeElement === prevElement) {
      firstFocusableEl.focus();
      event.preventDefault();
    }
  }

  useEffect(() => {
    if (active) {
      [
        ...ref.current?.querySelectorAll(FOCUSABLE_ELEMENTS)!,
      ].filter((el) => !el.hasAttribute('disabled')) as HTMLElement[]
      document.addEventListener('keydown', handleFocus);
    } else {
      prevElement?.focus();
    }
    return () => document.removeEventListener('keydown', handleFocus);
  }, [active, ref, prevElement]);

  return ref;
}
