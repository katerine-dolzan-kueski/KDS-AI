import { useCallback, useRef } from 'react';

/**
 * A flag to prevent multiple instantaneous executions of a function
 *
 * Example usage:
 * ```
 * const canExecute = useThrottling(500); // false for 500 milliseconds
 *
 * // Later
 *
 * const functionA = () => {
 *   if (!canExecute()) return;
 *   // Do something
 * }
 * ```
 * @param ms The time to "cooldown" until the next attempt is allowed
 * @returns True or False
 */
export const useThrottling = (ms = 100) => {
  const throttle = useRef<ReturnType<typeof setTimeout>>();
  return useCallback(() => {
    if (throttle.current) return false;

    throttle.current = setTimeout(() => { throttle.current = undefined; }, ms);
    return true;
  }, []);
};
