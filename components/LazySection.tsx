'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
  delay?: number;
}

export default function LazySection({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  fallback,
  delay = 0,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Add delay if specified
          if (delay > 0) {
            setTimeout(() => {
              setShouldRender(true);
            }, delay);
          } else {
            setShouldRender(true);
          }
          
          // Unobserve after first intersection
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, delay]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {shouldRender ? children : (fallback || <div className="h-96 bg-neutral-900/20 animate-pulse rounded-lg" />)}
    </div>
  );
}
