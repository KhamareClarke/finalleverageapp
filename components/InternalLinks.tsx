'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight, BookOpen, HelpCircle, MessageSquare, Settings, BarChart3, Target } from 'lucide-react';

interface InternalLink {
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  category: 'product' | 'support' | 'legal' | 'features';
}

const internalLinks: InternalLink[] = [
  // Product Pages
  {
    href: '/how-it-works',
    title: 'How It Works',
    description: 'Discover our proven 3-step system for achieving your goals in 90 days',
    icon: Target,
    category: 'product'
  },
  {
    href: '/features',
    title: 'Features & Benefits',
    description: 'Explore all the tools and features included in your Leverage Journal™',
    icon: BarChart3,
    category: 'features'
  },
  {
    href: '/dashboard',
    title: 'Dashboard Preview',
    description: 'See how the digital companion app enhances your goal-setting journey',
    icon: Settings,
    category: 'features'
  },
  
  // Support Pages
  {
    href: '/faq',
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about the Leverage Journal™ system',
    icon: HelpCircle,
    category: 'support'
  },
  {
    href: '/contact',
    title: 'Contact Support',
    description: 'Get personalized help from our customer success team',
    icon: MessageSquare,
    category: 'support'
  },
  
  // Legal Pages
  {
    href: '/privacy',
    title: 'Privacy Policy',
    description: 'Learn how we protect and handle your personal information',
    icon: BookOpen,
    category: 'legal'
  },
  {
    href: '/terms',
    title: 'Terms of Service',
    description: 'Read our terms and conditions for using the Leverage Journal™',
    icon: BookOpen,
    category: 'legal'
  },
  {
    href: '/cookies',
    title: 'Cookie Policy',
    description: 'Manage your cookie preferences and learn about our tracking',
    icon: Settings,
    category: 'legal'
  }
];

interface InternalLinksProps {
  currentPage?: string;
  category?: 'product' | 'support' | 'legal' | 'features' | 'all';
  title?: string;
  description?: string;
  maxItems?: number;
  showIcons?: boolean;
  layout?: 'grid' | 'list';
  className?: string;
}

export default function InternalLinks({
  currentPage,
  category = 'all',
  title = 'Explore More',
  description = 'Discover more about the Leverage Journal™ system',
  maxItems = 6,
  showIcons = true,
  layout = 'grid',
  className = ''
}: InternalLinksProps) {
  // Filter links based on category and exclude current page
  const filteredLinks = internalLinks
    .filter(link => {
      if (currentPage && link.href === currentPage) return false;
      if (category === 'all') return true;
      return link.category === category;
    })
    .slice(0, maxItems);

  if (filteredLinks.length === 0) return null;

  const gridCols = layout === 'grid' 
    ? filteredLinks.length === 1 ? 'grid-cols-1' 
      : filteredLinks.length === 2 ? 'md:grid-cols-2' 
      : 'md:grid-cols-2 lg:grid-cols-3'
    : 'grid-cols-1';

  return (
    <section className={`py-12 ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
      </div>
      
      <div className={`grid ${gridCols} gap-6`}>
        {filteredLinks.map((link) => (
          <Link key={link.href} href={link.href} className="group">
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-6 h-full hover:border-yellow-400/40 hover:bg-neutral-800/50 transition-all duration-300 group-hover:scale-105">
              <div className="flex items-start space-x-4">
                {showIcons && (
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <link.icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center text-yellow-400 text-sm font-medium group-hover:text-yellow-300 transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Contextual link suggestions based on current page
export function getContextualLinks(currentPage: string): InternalLink[] {
  const contextMap: Record<string, string[]> = {
    '/': ['/how-it-works', '/features', '/faq'],
    '/how-it-works': ['/features', '/dashboard', '/faq'],
    '/features': ['/how-it-works', '/dashboard', '/contact'],
    '/faq': ['/contact', '/how-it-works', '/features'],
    '/contact': ['/faq', '/privacy', '/terms'],
    '/privacy': ['/terms', '/cookies', '/contact'],
    '/terms': ['/privacy', '/cookies', '/contact'],
    '/cookies': ['/privacy', '/terms', '/faq'],
    '/dashboard': ['/features', '/how-it-works', '/contact']
  };

  const suggestedHrefs = contextMap[currentPage] || ['/how-it-works', '/features', '/faq'];
  
  return internalLinks.filter(link => suggestedHrefs.includes(link.href));
}

// SEO-optimized breadcrumb component
export function Breadcrumbs({ currentPage, customBreadcrumbs }: { 
  currentPage: string; 
  customBreadcrumbs?: Array<{ href: string; label: string }> 
}) {
  const defaultBreadcrumbs = [
    { href: '/', label: 'Home' },
    { href: currentPage, label: currentPage.split('/').pop()?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Page' }
  ];

  const breadcrumbs = customBreadcrumbs || defaultBreadcrumbs;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-gray-400">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && <ArrowRight className="w-4 h-4 mx-2" />}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-yellow-400 font-medium">{crumb.label}</span>
            ) : (
              <Link 
                href={crumb.href} 
                className="hover:text-yellow-400 transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
