'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Plus, Minus, HelpCircle, Clock, Truck, CreditCard, RefreshCw, Shield, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import SEOSchemas from '@/components/SEOSchemas';
import InternalLinks from '@/components/InternalLinks';

const faqData = [
  {
    category: 'Product Information',
    icon: HelpCircle,
    questions: [
      {
        question: 'What exactly is included in the Leverage Journal™ system?',
        answer: 'The Leverage Journal™ includes a premium 220-page physical journal with structured planning pages, a companion mobile app with real-time sync, AI-powered insights and recommendations, goal-setting frameworks, progress tracking tools, and access to our exclusive community. Everything you need for your 90-day transformation.'
      },
      {
        question: 'How is this different from other planners and journals?',
        answer: 'Unlike traditional planners, Leverage Journal™ combines psychology-backed planning methods with AI technology. Our system includes both physical and digital components that sync in real-time, provides personalized insights based on your progress, and follows a proven 90-day framework with a 94% success rate among users.'
      },
      {
        question: 'What makes the 90-day system so effective?',
        answer: 'The 90-day timeframe is scientifically proven to be optimal for habit formation and goal achievement. It\'s long enough to create lasting change but short enough to maintain focus and motivation. Our system breaks down your goals into daily, weekly, and monthly milestones with built-in accountability measures.'
      },
      {
        question: 'Can I use this for business goals or is it only for personal development?',
        answer: 'The Leverage Journal™ is designed for both personal and professional goals. Many entrepreneurs and business leaders use it for strategic planning, team goal-setting, project management, and business development. The frameworks adapt to any type of goal or objective.'
      }
    ]
  },
  {
    category: 'Mobile App & Technology',
    icon: Smartphone,
    questions: [
      {
        question: 'How does the mobile app sync with the physical journal?',
        answer: 'The mobile app allows you to input your daily progress, goals, and reflections digitally. While the physical journal is for deep planning and reflection, the app provides quick access, reminders, progress tracking, and AI insights. You can use either or both - they complement each other perfectly.'
      },
      {
        question: 'Is the mobile app available for both iOS and Android?',
        answer: 'Yes, the Leverage Journal™ app is available for both iOS (iPhone/iPad) and Android devices. The app is optimized for all screen sizes and provides the same features across all platforms. You can download it from the App Store or Google Play Store.'
      },
      {
        question: 'What kind of AI insights does the app provide?',
        answer: 'The AI analyzes your progress patterns, identifies potential obstacles, suggests optimizations to your routine, provides motivational insights based on your goals, and offers personalized recommendations for improving your success rate. The insights become more accurate as you use the system.'
      },
      {
        question: 'Can I use the system without the mobile app?',
        answer: 'Absolutely! The physical journal is a complete system on its own. The mobile app enhances the experience with digital tracking and AI insights, but you can achieve excellent results using just the journal. Many users prefer the tactile experience of writing by hand.'
      }
    ]
  },
  {
    category: 'Ordering & Shipping',
    icon: Truck,
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'We offer free worldwide shipping. Standard delivery takes 2-3 weeks for most locations. Express shipping (3-7 business days) is available for an additional fee. You\'ll receive tracking information once your order ships, and we provide updates throughout the delivery process.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to over 150 countries worldwide with free standard shipping. International orders may be subject to local customs duties or taxes, which are the responsibility of the customer. We provide all necessary documentation for customs clearance.'
      },
      {
        question: 'What if my journal arrives damaged?',
        answer: 'We take great care in packaging, but if your journal arrives damaged, contact us within 7 days with photos of the damage. We\'ll immediately send a replacement at no cost to you. Customer satisfaction is our top priority.'
      },
      {
        question: 'Can I change my shipping address after ordering?',
        answer: 'If your order hasn\'t shipped yet, we can update your shipping address. Contact our support team as soon as possible with your order number and new address. Once shipped, address changes aren\'t possible, but we can help coordinate with the shipping carrier.'
      }
    ]
  },
  {
    category: 'Pricing & Payment',
    icon: CreditCard,
    questions: [
      {
        question: 'Why is the price currently £19.99 instead of £39.99?',
        answer: 'We\'re offering a limited-time 50% discount for early adopters of our system. This special pricing helps us build our community and gather feedback. The price will return to £39.99 once we reach our target number of users, so we recommend ordering soon to secure this discount.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through Stripe with 256-bit SSL encryption. We never store your payment information.'
      },
      {
        question: 'Is this a one-time payment or subscription?',
        answer: 'This is a one-time payment of £19.99 (currently 50% off). There are no recurring charges, hidden fees, or subscription costs. You own the journal and have lifetime access to the mobile app and all future updates.'
      },
      {
        question: 'Do you offer payment plans or installments?',
        answer: 'Currently, we only accept full payment at the time of purchase. However, if you use PayPal, they may offer Pay in 4 or similar installment options at checkout. Check with your credit card provider as they may also offer installment plans for purchases.'
      }
    ]
  },
  {
    category: 'Returns & Guarantee',
    icon: Shield,
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your Leverage Journal™, return it within 30 days of delivery for a full refund. The journal should be in good condition, and you\'ll need to cover return shipping costs.'
      },
      {
        question: 'How do I request a refund?',
        answer: 'To request a refund, email our support team at support@leveragejournal.com with your order number and reason for return. We\'ll provide return instructions and a prepaid return label. Refunds are processed within 5-7 business days after we receive the returned item.'
      },
      {
        question: 'What if I don\'t see results after 90 days?',
        answer: 'While our system has a 94% success rate, we understand that results can vary. If you\'ve consistently used the system for 90 days and haven\'t seen the progress you expected, contact us. We\'ll work with you to optimize your approach or provide a full refund even beyond the 30-day window.'
      },
      {
        question: 'Can I exchange my journal for a different version?',
        answer: 'Currently, we only offer one version of the Leverage Journal™. However, if you have specific accessibility needs or requirements, contact our support team. We\'re always working on new versions and may be able to accommodate special requests.'
      }
    ]
  },
  {
    category: 'Getting Started',
    icon: RefreshCw,
    questions: [
      {
        question: 'I\'ve never used a goal-setting system before. Is this suitable for beginners?',
        answer: 'Absolutely! The Leverage Journal™ is designed for users at all levels. We provide step-by-step guidance, examples, and templates to help beginners get started. The system gradually introduces more advanced concepts as you progress through your 90-day journey.'
      },
      {
        question: 'How much time do I need to spend with the journal each day?',
        answer: 'We recommend 10-15 minutes in the morning for planning and 5-10 minutes in the evening for reflection. This totals about 20 minutes per day. However, you can adapt the system to your schedule - some users prefer longer weekly sessions instead of daily check-ins.'
      },
      {
        question: 'What if I miss a few days? Can I still be successful?',
        answer: 'Consistency is important, but perfection isn\'t required. The system is designed to be flexible and forgiving. If you miss a few days, simply pick up where you left off. The app and journal include catch-up strategies and ways to get back on track quickly.'
      },
      {
        question: 'Can I start at any time of the year?',
        answer: 'Yes! You don\'t need to wait for January 1st or the beginning of a month. The 90-day system works regardless of when you start. Many users find that starting immediately, rather than waiting for the "perfect" time, leads to better results and momentum.'
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredData = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(category => category.category === selectedCategory);

  // Prepare FAQ data for schema
  const allFAQs = faqData.flatMap(category => category.questions);

  return (
    <>
      {/* SEO Schema for FAQ */}
      <SEOSchemas page="faq" faqData={allFAQs} />
      
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-yellow-600/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <ArrowLeft className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-medium">Back to Home</span>
              </Link>
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-6 h-6 text-yellow-400" />
                <h1 className="text-xl font-bold text-yellow-400">Frequently Asked Questions</h1>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked <span className="text-yellow-400">Questions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Everything you need to know about the Leverage Journal™ 90-day achievement system. 
                Can't find what you're looking for? <Link href="/contact" className="text-yellow-400 hover:text-yellow-300 underline">Contact our support team</Link>.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-yellow-500 text-black'
                      : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                  }`}
                >
                  All Questions
                </button>
                {faqData.map((category) => (
                  <button
                    key={category.category}
                    onClick={() => setSelectedCategory(category.category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.category
                        ? 'bg-yellow-500 text-black'
                        : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-8">
              {filteredData.map((category, categoryIndex) => (
                <div key={category.category}>
                  <div className="flex items-center space-x-3 mb-6">
                    <category.icon className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const itemId = `${categoryIndex}-${faqIndex}`;
                      const isOpen = openItems.includes(itemId);
                      
                      return (
                        <Card key={itemId} className="bg-neutral-900/50 border border-yellow-600/20 overflow-hidden">
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full p-6 text-left hover:bg-neutral-800/30 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white pr-4">
                                {faq.question}
                              </h3>
                              {isOpen ? (
                                <Minus className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                              ) : (
                                <Plus className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                              )}
                            </div>
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-6">
                              <div className="border-t border-gray-700/50 pt-4">
                                <p className="text-gray-300 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <Card className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 border border-yellow-500/30 p-8 mt-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
                <p className="text-gray-300 mb-6">
                  Our support team is here to help you succeed with your 90-day transformation journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold">
                      Contact Support
                    </Button>
                  </Link>
                  <Link href="mailto:support@leveragejournal.com">
                    <Button variant="outline" className="border-yellow-600/30 text-yellow-400 hover:bg-yellow-500/10">
                      Email Us Directly
                    </Button>
                  </Link>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                  <p><strong>Support Hours:</strong> Monday - Friday, 9 AM - 5 PM GMT</p>
                </div>
              </div>
            </Card>

            {/* Internal Links */}
            <InternalLinks 
              currentPage="/faq"
              category="support"
              title="Related Resources"
              description="Explore more helpful information about the Leverage Journal™ system"
              maxItems={3}
            />

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Link href="/">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold">
                  Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
