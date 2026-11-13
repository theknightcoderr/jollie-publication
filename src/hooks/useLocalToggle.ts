import { useState, useCallback } from 'react';

/**
 * In-memory toggle for Phase 1 interactive previews (e.g., Like, Follow).
 * Per §2.1 & §2.3, state is ephemeral and does not persist to a backend.
 */
export function useLocalToggle(initialActive: boolean = false, initialCount: number = 0) {
  const [active, setActive] = useState<boolean>(initialActive);
  const [count, setCount] = useState<number>(initialCount);

  const toggle = useCallback(() => {
    setActive((prev) => {
      const next = !prev;
      setCount((c) => (next ? c + 1 : Math.max(0, c - 1)));
      return next;
    });
  }, []);

  return { active, count, toggle };
}