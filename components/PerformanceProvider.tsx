'use client';

import { useEffect } from 'react';
import { initializePerformanceOptimizations, performanceMonitor } from '@/lib/performance';

export default function PerformanceProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize all performance optimizations
    initializePerformanceOptimizations();
    
    // Start page load timing
    performanceMonitor.startTiming('page_interactive');
    
    // Mark page as interactive when React hydration is complete
    const markInteractive = () => {
      performanceMonitor.endTiming('page_interactive');
      
      // Send performance metrics to analytics
      if (typeof window !== 'undefined' && window.gtag) {
        const metrics = performanceMonitor.getAllMetrics();
        Object.entries(metrics).forEach(([name, value]) => {
          window.gtag!('event', 'performance_metric', {
            metric_name: name,
            metric_value: Math.round(value),
            event_category: 'Performance'
          });
        });
      }
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(markInteractive);
    } else {
      setTimeout(markInteractive, 0);
    }

    // Preload critical resources on interaction
    const preloadOnInteraction = () => {
      // Preload critical components when user shows intent
      // These can be added when dashboard components are created
      console.log('Preloading resources on user interaction');
    };

    // Listen for user interactions to preload resources
    const interactionEvents = ['mousedown', 'touchstart', 'keydown'];
    const handleInteraction = () => {
      preloadOnInteraction();
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };

    interactionEvents.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    // Cleanup
    return () => {
      interactionEvents.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  return <>{children}</>;
}
