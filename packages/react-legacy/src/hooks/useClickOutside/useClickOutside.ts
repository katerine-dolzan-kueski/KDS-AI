import { RefObject, useEffect } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

export const useClickOutside = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents,
) => {
  useEffect(() => {
    const handler = (event: E) => {
      const { current: el } = ref;

      if (el && !el.contains(event.target as Node)) onClickAway(event);
    };

    events.forEach((eventName) => {
      window.addEventListener(eventName, handler as (e: Event) => void);
    });

    return () => {
      events.forEach((eventName) => {
        window.addEventListener(eventName, handler as (e: Event) => void);
      });
    };
  }, [ref]);
};
