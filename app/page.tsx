'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Star, CheckCircle, ArrowRight, Target, BarChart3, Smartphone, Users, Clock, Shield, Zap, Trophy, Brain, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import SEOSchemas from '@/components/SEOSchemas';
import InternalLinks from '@/components/InternalLinks';
import OptimizedImage from '@/components/OptimizedImage';
import LazySection from '@/components/LazySection';

export default function HomePage() {
  const productData = {
    name: 'Leverage Journal™ - Ultimate 90-Day Achievement System',
    price: '19.99',
    currency: 'GBP',
    availability: 'InStock',
    rating: 4.9,
    reviewCount: 10000
  };

  return (
    <>
      {/* SEO Schema for Homepage */}
      <SEOSchemas page="home" productData={productData} />
      
      <div className="min-h-screen bg-black text-white">
        {/* Pre-Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white text-center py-3 text-sm font-medium shadow-lg">
          <div className="flex items-center justify-center space-x-8 animate-pulse">
            <span className="flex items-center space-x-3">
              <span className="font-black text-yellow-200">⚡ LIMITED EDITION</span>
              <span className="text-red-200">•</span>
              <span className="font-semibold">Offer ends in: 23:59:59</span>
            </span>
            <span className="hidden md:inline text-red-200">•</span>
            <span className="hidden md:inline font-semibold">Only 127/500 left</span>
            <span className="hidden md:inline text-red-200">•</span>
            <span className="hidden md:inline font-semibold text-green-200">🚚 FREE Worldwide Shipping</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-12 left-0 right-0 z-40 bg-black/90 backdrop-blur-2xl border-b border-yellow-500/20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4 group">
                <div className="relative">
                  <OptimizedImage
                    src="/images/logo.svg"
                    alt="Leverage Journal™ Logo"
                    width={36}
                    height={36}
                    priority={true}
                    className="rounded-xl shadow-lg group-hover:shadow-yellow-500/30 transition-all duration-300"
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                <div>
                  <div className="text-xl font-black text-yellow-400 tracking-tight">Leverage Journal™</div>
                  <div className="text-xs text-gray-400 tracking-[0.2em] font-medium">PLAN • DO • ACHIEVE</div>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center space-x-8">
                <Link href="/features" className="text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/how-it-works" className="text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                  How It Works
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/reviews" className="text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                  Reviews
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/faq" className="text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                  FAQ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
                
                <div className="flex items-center space-x-2 bg-yellow-500/10 px-3 py-1.5 rounded-full border border-yellow-500/20">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-bold text-yellow-400">4.9/5</span>
                </div>
                
                <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 px-4 py-2 rounded-full border border-yellow-500/20">
                  <span className="text-2xl font-black text-yellow-400">£19.99</span>
                  <span className="text-gray-500 line-through text-lg">£39.99</span>
                  <span className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-xs font-black shadow-lg">50% OFF</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Link href="/signin" className="text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300 font-semibold relative group">
                    Sign In
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link href="/signup" className="text-sm text-gray-300 hover:text-yellow-400 transition-all duration-300 font-semibold relative group">
                    Sign Up
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link href="/dashboard">
                    <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-black text-sm px-8 py-3 rounded-full shadow-xl hover:shadow-yellow-500/30 transform hover:scale-110 transition-all duration-300 border-2 border-yellow-400/20 hover:border-yellow-400/40">
                      Pre-Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-40 pb-20 min-h-screen flex items-center overflow-hidden">
          {/* Advanced Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-600/15 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column - Content */}
              <div className="space-y-10 animate-fade-in">
                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    <span className="block text-white">Transform Your Goals Into</span>
                    <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      Systematic Success
                    </span>
                  </h1>
                  
                  <p className="text-base text-gray-300 leading-relaxed max-w-xl">
                    The ultimate 90-day achievement system that combines psychology-backed planning with AI-powered insights.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-500/30 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-xs">Premium Journal</div>
                      <div className="text-gray-400 text-xs">220 pages</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-500/30 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-xs">Mobile App</div>
                      <div className="text-gray-400 text-xs">Real-time sync</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-500/30 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-xs">Psychology-Backed</div>
                      <div className="text-gray-400 text-xs">Proven methods</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-500/30 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-xs">AI-Powered</div>
                      <div className="text-gray-400 text-xs">Smart insights</div>
                    </div>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2 bg-yellow-500/10 px-3 py-2 rounded-full border border-yellow-500/20">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-semibold">94% Success Rate</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/10 px-3 py-2 rounded-full border border-blue-500/20">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400 font-semibold">10,000+ Users</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-500/10 px-3 py-2 rounded-full border border-green-500/20">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">30-Day Guarantee</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Link href="/dashboard">
                    <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
                      Start Your 90-Day Journey
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column - Hero Image */}
              <div className="relative hidden lg:block animate-float">
                <div className="relative w-full h-[600px]">
                  {/* Main Visual Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-yellow-500/30 shadow-2xl overflow-hidden hover:scale-105 transition-all duration-700">
                    
                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/30 via-yellow-600/30 to-yellow-500/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
                    
                    {/* Content */}
                    <div className="relative h-full p-10 flex flex-col justify-between">
                      
                      {/* Header */}
                      <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-yellow-500/50 hover:scale-110 transition-transform duration-300">
                          <Target className="w-10 h-10 text-black" />
                        </div>
                        
                        <div className="space-y-3">
                          <h2 className="text-3xl font-black bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                            LEVERAGE JOURNAL™
                          </h2>
                          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
                          <p className="text-gray-400 font-bold tracking-[0.3em] text-sm">90-DAY TRANSFORMATION</p>
                        </div>
                      </div>

                      {/* Progress Section */}
                      <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-white font-bold">Your Progress</span>
                            <span className="text-yellow-400 font-black">Day 23/90</span>
                          </div>
                          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-yellow-500/10 backdrop-blur-sm rounded-xl p-4 text-center border border-yellow-500/20 hover:bg-yellow-500/20 transition-all duration-300">
                            <div className="text-2xl font-black text-yellow-400">94%</div>
                            <div className="text-xs text-gray-400 font-bold">Success</div>
                          </div>
                          <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-4 text-center border border-green-500/20 hover:bg-green-500/20 transition-all duration-300">
                            <div className="text-2xl font-black text-green-400">8/12</div>
                            <div className="text-xs text-gray-400 font-bold">Goals</div>
                          </div>
                          <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300">
                            <div className="text-2xl font-black text-blue-400">23</div>
                            <div className="text-xs text-gray-400 font-bold">Streak</div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Badge */}
                      <div className="text-center">
                        <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/40 rounded-full px-6 py-3 backdrop-blur-sm hover:bg-yellow-500/30 transition-all duration-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          <span className="text-yellow-200 font-black text-sm">PREMIUM EDITION</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <LazySection className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Why <span className="text-yellow-400">It Works</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                Psychology meets technology for guaranteed results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Psychology-Backed Framework',
                  description: 'Built on proven behavioral science and goal-setting research for maximum effectiveness.',
                  alt: 'Psychology-backed goal setting framework icon'
                },
                {
                  icon: Zap,
                  title: 'AI-Powered Insights',
                  description: 'Get personalized recommendations and progress analysis powered by artificial intelligence.',
                  alt: 'AI-powered insights and analytics icon'
                },
                {
                  icon: Target,
                  title: '90-Day Success System',
                  description: 'Scientifically optimal timeframe for habit formation and sustainable goal achievement.',
                  alt: '90-day achievement system target icon'
                },
                {
                  icon: Smartphone,
                  title: 'Physical + Digital Sync',
                  description: 'Premium journal paired with mobile app for seamless progress tracking anywhere.',
                  alt: 'Physical journal and mobile app synchronization icon'
                },
                {
                  icon: BarChart3,
                  title: 'Real-Time Progress Tracking',
                  description: 'Visual dashboards and analytics to keep you motivated and on track.',
                  alt: 'Real-time progress tracking and analytics icon'
                },
                {
                  icon: Trophy,
                  title: '94% Success Rate',
                  description: 'Join thousands of achievers who have transformed their goals into systematic success.',
                  alt: 'High success rate achievement trophy icon'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-lg border border-white/10 hover:border-yellow-500/30 transition-colors p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* Testimonials Section */}
        <LazySection className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Success <span className="text-yellow-400">Stories</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                Real results from real people who transformed their lives.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah M.',
                  role: 'Entrepreneur',
                  content: "It's like having a coach, therapist, and strategist in one. The 90-day structure completely changed how I approach my goals.",
                  rating: 5,
                  image: '/images/testimonial-sarah.jpg'
                },
                {
                  name: 'James P.',
                  role: 'Business Executive',
                  content: 'My productivity doubled in 30 days. The app sync keeps me accountable even when I\'m traveling.',
                  rating: 5,
                  image: '/images/testimonial-james.jpg'
                },
                {
                  name: 'Maya T.',
                  role: 'Creative Director',
                  content: 'I finally follow through on my commitments. This system actually works where others failed.',
                  rating: 5,
                  image: '/images/testimonial-maya.jpg'
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/5 rounded-lg border border-white/10 hover:border-yellow-500/30 transition-colors p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-xs leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <OptimizedImage
                      src={testimonial.image.replace('.jpg', '.svg')}
                      alt={`${testimonial.name} testimonial`}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium text-white text-xs">{testimonial.name}</div>
                      <div className="text-gray-400 text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LazySection>

        {/* CTA Section */}
        <LazySection className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Ready to <span className="text-yellow-400">Transform Your Goals?</span>
            </h2>
            <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 10,000+ achievers who have turned their dreams into systematic success.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-2xl font-bold text-yellow-400">£19.99</div>
                <div className="space-y-1">
                  <div className="text-lg text-gray-500 line-through">£39.99</div>
                  <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">50% OFF</div>
                </div>
              </div>
              
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold text-sm px-8 py-3 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
                  Start Your 90-Day Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              
              <div className="flex items-center justify-center space-x-4 text-xs">
                <div className="flex items-center space-x-1 text-green-400">
                  <Shield className="w-3 h-3" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-1 text-blue-400">
                  <Users className="w-3 h-3" />
                  <span>10,000+ Users</span>
                </div>
              </div>
            </div>
          </div>
        </LazySection>

        {/* Internal Links */}
        <LazySection>
          <InternalLinks 
            currentPage="/"
            category="product"
            title="Learn More About Leverage Journal™"
            description="Discover everything you need to know about our 90-day achievement system"
            maxItems={6}
          />
        </LazySection>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-yellow-500/20 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="relative">
                    <OptimizedImage
                      src="/images/logo.svg"
                      alt="Leverage Journal™ Logo"
                      width={40}
                      height={40}
                      className="rounded-xl shadow-lg group-hover:shadow-yellow-500/30 transition-all duration-300"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-yellow-400 tracking-tight">Leverage Journal™</div>
                    <div className="text-xs text-gray-400 tracking-[0.2em] font-medium">PLAN • DO • ACHIEVE</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Transform your goals into systematic success with the <strong className="text-yellow-400">ultimate 90-day achievement system</strong>.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
                <div className="space-y-3">
                  <Link href="/how-it-works" className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                    How It Works
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link href="/features" className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                    Features
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link href="/dashboard" className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                    Dashboard
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6 text-lg">Support</h4>
                <div className="space-y-3">
                  <Link href="/faq" className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                    FAQ
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link href="/contact" className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                    Contact
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <a href="mailto:support@leveragejournal.com" className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                    support@leveragejournal.com
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
                <div className="space-y-3">
                  <Link href="/privacy" className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                    Privacy Policy
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link href="/terms" className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                    Terms of Service
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link href="/cookies" className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 font-medium relative group">
                    Cookie Policy
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="border-t border-yellow-500/20 mt-16 pt-8 text-center">
              <p className="text-gray-300 font-medium">
                &copy; 2024 <strong className="text-yellow-400">Leverage Journal&trade;</strong>. All rights reserved. Transform your goals into systematic success.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
