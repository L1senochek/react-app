'use client';

export default function useOriginUrl() {
  const origin =
    typeof window !== 'undefined' && window.location.search
      ? window.location.search
      : '';

  return origin;
}
