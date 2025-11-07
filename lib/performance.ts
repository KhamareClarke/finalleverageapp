// Performance optimization utilities for Leverage Journal™

// Web Vitals tracking
export function trackWebVitals() {
  if (typeof window !== 'undefined') {
    // Simple performance tracking without web-vitals dependency issues
    console.log('Performance tracking initialized');
    
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      sendToAnalytics({
        name: 'page_load_time',
        value: loadTime,
        id: 'page-load'
      });
    });
  }
}

function sendToAnalytics(metric: any) {
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // Send to custom analytics endpoint
  if (typeof window !== 'undefined') {
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric),
    }).catch(console.error);
  }
}

// Image optimization helpers
export function generateImageSizes(breakpoints: number[] = [640, 768, 1024, 1280, 1536]) {
  return breakpoints
    .map(bp => `(max-width: ${bp}px) ${bp}px`)
    .join(', ') + ', 100vw';
}

export function generateBlurDataURL(width: number, height: number, color: string = '#1f2937') {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}" />
    </svg>
  `;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

// Lazy loading utilities
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };

  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver(callback, defaultOptions);
  }
  return null;
}

// Resource preloading
export function preloadResource(href: string, as: string, type?: string) {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  }
}

export function preloadCriticalResources() {
  if (typeof window !== 'undefined') {
    // Preload critical fonts
    preloadResource('/fonts/inter-var.woff2', 'font', 'font/woff2');
    
    // Preload hero images
    preloadResource('/images/hero-bg.webp', 'image');
    preloadResource('/images/journal-mockup.webp', 'image');
    
    // Preload critical CSS
    preloadResource('/css/critical.css', 'style');
  }
}

// Performance monitoring
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startTiming(label: string): void {
    if (typeof performance !== 'undefined') {
      this.metrics.set(`${label}_start`, performance.now());
    }
  }

  endTiming(label: string): number {
    if (typeof performance !== 'undefined') {
      const startTime = this.metrics.get(`${label}_start`);
      if (startTime) {
        const duration = performance.now() - startTime;
        this.metrics.set(label, duration);
        
        // Send to analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: label,
            value: Math.round(duration),
          });
        }
        
        return duration;
      }
    }
    return 0;
  }

  getMetric(label: string): number | undefined {
    return this.metrics.get(label);
  }

  getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }
}

// Bundle size optimization
export function dynamicImport<T>(
  importFn: () => Promise<T>,
  fallback?: T
): Promise<T> {
  return importFn().catch((error) => {
    console.warn('Dynamic import failed:', error);
    if (fallback) return fallback;
    throw error;
  });
}

// Critical CSS inlining
export function inlineCriticalCSS() {
  if (typeof document !== 'undefined') {
    const criticalCSS = `
      /* Critical above-the-fold styles */
      .hero-section { min-height: 100vh; }
      .nav-fixed { position: fixed; top: 0; width: 100%; z-index: 50; }
      .loading-spinner { 
        animation: spin 1s linear infinite;
        width: 2rem;
        height: 2rem;
        border: 2px solid #374151;
        border-top: 2px solid #fbbf24;
        border-radius: 50%;
      }
      @keyframes spin { to { transform: rotate(360deg); } }
      
      /* Font display optimization */
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: url('/fonts/inter-var.woff2') format('woff2');
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }
}

// Service Worker registration
export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content available, notify user
                  if (confirm('New version available! Reload to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

// Resource hints
export function addResourceHints() {
  if (typeof document !== 'undefined') {
    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'dns-prefetch', href: '//connect.facebook.net' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' as const },
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if ('crossorigin' in hint && hint.crossorigin) {
        link.crossOrigin = hint.crossorigin;
      }
      document.head.appendChild(link);
    });
  }
}

// Image format detection
export function supportsWebP(): Promise<boolean> {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
}

export function supportsAVIF(): Promise<boolean> {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = avif.onerror = () => {
      resolve(avif.height === 2);
    };
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
}

// Optimize images based on browser support
export async function getOptimizedImageSrc(baseSrc: string): Promise<string> {
  const [supportsAVIFFormat, supportsWebPFormat] = await Promise.all([
    supportsAVIF(),
    supportsWebP()
  ]);

  if (supportsAVIFFormat) {
    return baseSrc.replace(/\.(jpg|jpeg|png)$/, '.avif');
  } else if (supportsWebPFormat) {
    return baseSrc.replace(/\.(jpg|jpeg|png)$/, '.webp');
  }
  
  return baseSrc;
}

// Initialize all performance optimizations
export function initializePerformanceOptimizations() {
  if (typeof window !== 'undefined') {
    // Track web vitals
    trackWebVitals();
    
    // Preload critical resources
    preloadCriticalResources();
    
    // Add resource hints
    addResourceHints();
    
    // Inline critical CSS
    inlineCriticalCSS();
    
    // Register service worker
    registerServiceWorker();
    
    // Start performance monitoring
    const monitor = PerformanceMonitor.getInstance();
    monitor.startTiming('page_load');
    
    window.addEventListener('load', () => {
      monitor.endTiming('page_load');
    });
  }
}

// Export performance monitor instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Type declarations
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
