'use client';

import { usePathname } from 'next/navigation';

interface SchemaProps {
  page?: 'home' | 'faq' | 'product' | 'blog' | 'contact';
  productData?: {
    name: string;
    price: string;
    currency: string;
    availability: string;
    rating: number;
    reviewCount: number;
  };
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
  articleData?: {
    title: string;
    description: string;
    author: string;
    publishDate: string;
    modifiedDate: string;
    image: string;
  };
}

export default function SEOSchemas({ 
  page = 'home', 
  productData, 
  faqData, 
  articleData 
}: SchemaProps) {
  const pathname = usePathname();

  // Organization Schema (appears on all pages)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://leveragejournal.com/#organization",
    "name": "Leverage Journal™",
    "alternateName": "Leverage Journal",
    "url": "https://leveragejournal.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://leveragejournal.com/images/logo.png",
      "width": 512,
      "height": 512
    },
    "image": "https://leveragejournal.com/images/logo.png",
    "description": "The ultimate 90-day achievement system that combines psychology-backed planning with AI-powered insights to transform goals into systematic success.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Leverage Journal Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England",
      "addressLocality": "London"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44-20-1234-5678",
        "contactType": "customer service",
        "email": "support@leveragejournal.com",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "email": "privacy@leveragejournal.com",
        "contactType": "privacy",
        "availableLanguage": ["English"]
      }
    ],
    "sameAs": [
      "https://twitter.com/leveragejournal",
      "https://instagram.com/leveragejournal",
      "https://linkedin.com/company/leveragejournal",
      "https://facebook.com/leveragejournal"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://leveragejournal.com/#website",
    "url": "https://leveragejournal.com",
    "name": "Leverage Journal™",
    "description": "Transform your goals into systematic success with the ultimate 90-day achievement system.",
    "publisher": {
      "@id": "https://leveragejournal.com/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://leveragejournal.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "inLanguage": "en-GB"
  };

  // Product Schema (for homepage and product pages)
  const productSchema = productData ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://leveragejournal.com/#product",
    "name": productData.name,
    "description": "The ultimate productivity journal that combines psychology-backed planning with AI-powered insights. Includes physical journal + mobile app + proven 90-day system.",
    "brand": {
      "@type": "Brand",
      "name": "Leverage Journal™"
    },
    "manufacturer": {
      "@id": "https://leveragejournal.com/#organization"
    },
    "category": "Productivity & Planning",
    "productID": "LJ-90DAY-001",
    "mpn": "LJ001",
    "sku": "LEVERAGE-JOURNAL-90DAY",
    "image": [
      "https://leveragejournal.com/images/product-main.jpg",
      "https://leveragejournal.com/images/product-journal.jpg",
      "https://leveragejournal.com/images/product-app.jpg"
    ],
    "offers": {
      "@type": "Offer",
      "price": productData.price,
      "priceCurrency": productData.currency,
      "availability": `https://schema.org/${productData.availability}`,
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31",
      "seller": {
        "@id": "https://leveragejournal.com/#organization"
      },
      "url": "https://leveragejournal.com",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "GBP"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 2,
            "maxValue": 3,
            "unitCode": "WK"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": productData.rating.toString(),
      "reviewCount": productData.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "It's like having a coach, therapist, and strategist in one. The 90-day structure completely changed how I approach my goals.",
        "datePublished": "2024-10-15"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "James P."
        },
        "reviewBody": "My productivity doubled in 30 days. The app sync keeps me accountable even when I'm traveling.",
        "datePublished": "2024-10-20"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Maya T."
        },
        "reviewBody": "I finally follow through on my commitments. This system actually works where others failed.",
        "datePublished": "2024-10-25"
      }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Pages",
        "value": "220"
      },
      {
        "@type": "PropertyValue",
        "name": "Duration",
        "value": "90 days"
      },
      {
        "@type": "PropertyValue",
        "name": "App Included",
        "value": "Yes"
      },
      {
        "@type": "PropertyValue",
        "name": "Success Rate",
        "value": "94%"
      }
    ]
  } : null;

  // FAQ Schema
  const faqSchema = faqData ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Article Schema (for blog posts)
  const articleSchema = articleData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleData.title,
    "description": articleData.description,
    "image": articleData.image,
    "author": {
      "@type": "Person",
      "name": articleData.author
    },
    "publisher": {
      "@id": "https://leveragejournal.com/#organization"
    },
    "datePublished": articleData.publishDate,
    "dateModified": articleData.modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://leveragejournal.com${pathname}`
    }
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://leveragejournal.com"
      },
      ...(pathname !== '/' ? [{
        "@type": "ListItem",
        "position": 2,
        "name": pathname.split('/').pop()?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Page',
        "item": `https://leveragejournal.com${pathname}`
      }] : [])
    ]
  };

  // Local Business Schema (if applicable)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://leveragejournal.com/#localbusiness",
    "name": "Leverage Journal™",
    "image": "https://leveragejournal.com/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "England",
      "addressLocality": "London"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "url": "https://leveragejournal.com",
    "telephone": "+44-20-1234-5678",
    "email": "support@leveragejournal.com",
    "priceRange": "£19.99",
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      "https://twitter.com/leveragejournal",
      "https://instagram.com/leveragejournal"
    ]
  };

  // Combine all schemas
  const schemas = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      breadcrumbSchema,
      localBusinessSchema,
      ...(productSchema ? [productSchema] : []),
      ...(faqSchema ? [faqSchema] : []),
      ...(articleSchema ? [articleSchema] : [])
    ].filter(Boolean)
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas, null, 0)
      }}
    />
  );
}
