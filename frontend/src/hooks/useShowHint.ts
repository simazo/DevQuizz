import { useState, useEffect } from 'react';

export function useShowHint<T>(initialValue: T, questionId: number) {
  const [showHint, setShowHint] = useState<T>(initialValue);

  useEffect(() => {
    setShowHint(initialValue);
  }, [questionId]);

  return [showHint, setShowHint] as const;
}