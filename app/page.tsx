'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Target, TrendingUp, Zap, Star, ArrowRight, CheckCircle, User, LogOut, Clock, Trophy, Smartphone, Calendar, Shield, Truck, MessageCircle, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ProductMockup from '@/components/ProductMockup';

export default function Home() {
  const { user, loading, signOut } = useAuth();
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showChatWidget, setShowChatWidget] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !user) {
        setShowExitIntent(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [user]);

  // Scroll tracking for animations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Preheader - Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-center space-x-4 text-sm font-medium">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-bold">🔥 LIMITED TIME:</span>
            </div>
            <span>50% OFF Pre-Order - Only £19.99 (Usually £39.99)</span>
            <div className="hidden md:flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="font-bold">Ships in 2-3 weeks</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>✅ 30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Header */}
      <nav className="fixed top-10 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-yellow-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                  Leverage Journal™
                </span>
                <div className="text-xs text-gray-400 tracking-wider">90-DAY TRANSFORMATION</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                How It Works
              </a>
              <a href="#features" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Features
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">
                Reviews
              </a>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 py-1">
                <span className="text-yellow-400 font-bold">£19.99</span>
                <span className="text-gray-400 text-sm ml-1 line-through">£39.99</span>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex items-center space-x-4">
              {!loading && (
                <>
                  {user ? (
                    <Button variant="ghost" size="sm" onClick={signOut} className="text-gray-300 hover:text-red-400">
                      <LogOut className="w-4 h-4 mr-1" />
                      Sign Out
                    </Button>
                  ) : (
                    <>
                      <Link href="/auth/signin">
                        <Button variant="ghost" className="text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all duration-300">
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/auth/signup">
                        <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold px-4 py-2 transition-all duration-300 hover:scale-105">
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )}
                </>
              )}
              <Button className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold shadow-2xl shadow-yellow-600/40 transition-all duration-300 hover:scale-105 hover:shadow-yellow-500/60 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center space-x-2">
                  <span>Pre-Order Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced with Emotional Storytelling */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        {/* Enhanced Background with Parallax */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-yellow-600/15 via-black to-black"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-600/10 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content with Pain Points */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 animate-pulse">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-200 text-sm font-medium">Trusted by 10,000+ achievers</span>
            </div>

            {/* Emotional Headline with Pain Point */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-lg text-red-300 font-medium">
                  Tired of setting goals that never stick? 😔
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                    LEVERAGE
                  </span>
                  <span className="block bg-gradient-to-r from-yellow-300 to-yellow-200 bg-clip-text text-transparent">
                    JOURNAL™
                  </span>
                </h1>
                <div className="space-y-2">
                  <p className="text-2xl text-yellow-100 font-light">Transform Your Life in 90 Days</p>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Value Proposition with Emotional Benefits */}
            <div className="space-y-4">
              <p className="text-xl text-gray-100 max-w-xl leading-relaxed">
                Stop feeling <span className="text-red-300 font-semibold">overwhelmed and scattered</span>. 
                The <span className="text-yellow-300 font-semibold">only system</span> that combines 
                psychology-backed planning with real-time app sync to turn your 
                <span className="text-yellow-300 font-semibold"> dreams into reality</span>.
              </p>
              
              {/* Pain Points Addressed */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-300">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="line-through">Forgotten goals</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Systematic achievement</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="line-through">Lack of accountability</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Daily progress tracking</span>
                </div>
              </div>
            </div>

            {/* Enhanced Stats with Social Proof */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center group">
                <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">94%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
                <div className="text-xs text-green-400 mt-1">↑ Industry Leading</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-sm text-gray-400">Lives Changed</div>
                <div className="text-xs text-green-400 mt-1">↑ Growing Daily</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform duration-300">4.9★</div>
                <div className="text-sm text-gray-400">User Rated</div>
                <div className="text-xs text-green-400 mt-1">↑ Verified Reviews</div>
              </div>
            </div>

            {/* Enhanced CTA with Urgency */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold text-lg px-12 py-6 shadow-2xl hover:scale-105 transition-all duration-300 w-full lg:w-auto"
                >
                  <span className="flex items-center justify-center">
                    🚀 START YOUR TRANSFORMATION - £19.99
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </div>
              
              <div className="text-center lg:text-left space-y-4">
                <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2 animate-bounce">
                  <Clock className="w-4 h-4 text-red-400" />
                  <span className="text-red-200 font-bold">⏰ Only 48 Hours Left: 50% OFF</span>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                  <div className="flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-green-200 font-medium">30-Day Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-3 py-2">
                    <Truck className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-200 font-medium">Free Worldwide Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-3 py-2">
                    <Smartphone className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-200 font-medium">Premium App Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stunning Product Mockup */}
          <div className="relative hidden lg:flex items-center justify-center">
            <ProductMockup />
          </div>
        </div>
      </section>

      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-neutral-900 to-black border border-yellow-600/30 rounded-3xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-black" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Wait! Don't Miss Out</h3>
                <p className="text-gray-300">
                  Join 10,000+ people transforming their lives. Get your Leverage Journal for just £19.99 (50% off).
                </p>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold">
                  Claim My 50% Discount Now
                </Button>
                <p className="text-xs text-gray-400">
                  ⏰ This offer expires in 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {showChatWidget ? (
          <div className="bg-gradient-to-br from-neutral-900 to-black border border-yellow-600/30 rounded-2xl p-4 w-80 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Live Support</h4>
                  <p className="text-green-400 text-xs">Online now</p>
                </div>
              </div>
              <button onClick={() => setShowChatWidget(false)} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-yellow-200 text-sm">
                  Hi! 👋 Questions about the Leverage Journal? I'm here to help!
                </p>
              </div>
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full bg-neutral-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
              />
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowChatWidget(true)}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}
