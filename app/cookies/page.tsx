'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Eye, ToggleLeft, ToggleRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CookiePolicy() {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: true,
    marketing: false,
    personalization: true
  });

  const handleToggle = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    // Save to localStorage and update cookie consent
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert('Cookie preferences saved successfully!');
  };

  return (
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
              <Cookie className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold text-yellow-400">Cookie Policy</span>
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
              Cookie <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use cookies to enhance your experience and provide personalized content. Manage your preferences below.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: November 7, 2025
            </div>
          </div>

          {/* Cookie Preferences */}
          <Card className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 border border-yellow-500/30 p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="w-6 h-6 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
            </div>
            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Necessary Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    Essential for the website to function properly. These cannot be disabled.
                  </p>
                </div>
                <div className="ml-4">
                  <ToggleRight className="w-8 h-8 text-green-400" />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    Help us understand how visitors interact with our website to improve performance.
                  </p>
                </div>
                <div className="ml-4">
                  <button onClick={() => handleToggle('analytics')}>
                    {preferences.analytics ? 
                      <ToggleRight className="w-8 h-8 text-green-400" /> : 
                      <ToggleLeft className="w-8 h-8 text-gray-400" />
                    }
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    Used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                </div>
                <div className="ml-4">
                  <button onClick={() => handleToggle('marketing')}>
                    {preferences.marketing ? 
                      <ToggleRight className="w-8 h-8 text-green-400" /> : 
                      <ToggleLeft className="w-8 h-8 text-gray-400" />
                    }
                  </button>
                </div>
              </div>

              {/* Personalization Cookies */}
              <div className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Personalization Cookies</h3>
                  <p className="text-gray-300 text-sm">
                    Remember your preferences and provide customized content and features.
                  </p>
                </div>
                <div className="ml-4">
                  <button onClick={() => handleToggle('personalization')}>
                    {preferences.personalization ? 
                      <ToggleRight className="w-8 h-8 text-green-400" /> : 
                      <ToggleLeft className="w-8 h-8 text-gray-400" />
                    }
                  </button>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button 
                  onClick={savePreferences}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          </Card>

          {/* Cookie Information */}
          <div className="space-y-8">
            {/* What Are Cookies */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Cookie className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                </p>
                <p>
                  We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period or until you delete them).
                </p>
              </div>
            </Card>

            {/* Types of Cookies */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <BarChart3 className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Types of Cookies We Use</h2>
              </div>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-200 mb-2">Strictly Necessary Cookies</h3>
                  <p>These cookies are essential for the website to function and cannot be switched off. They include:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Authentication cookies to keep you logged in</li>
                    <li>Security cookies to protect against fraud</li>
                    <li>Load balancing cookies for website performance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-yellow-200 mb-2">Performance Cookies</h3>
                  <p>These cookies help us understand how visitors interact with our website:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Google Analytics for website usage statistics</li>
                    <li>Hotjar for user behavior analysis</li>
                    <li>Performance monitoring for page load times</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-yellow-200 mb-2">Functional Cookies</h3>
                  <p>These cookies enable enhanced functionality and personalization:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Language and region preferences</li>
                    <li>Theme and display preferences</li>
                    <li>Form data to improve user experience</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-yellow-200 mb-2">Targeting Cookies</h3>
                  <p>These cookies are used to deliver relevant advertisements:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Facebook Pixel for social media advertising</li>
                    <li>Google Ads for search and display advertising</li>
                    <li>Retargeting pixels for personalized ads</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Managing Cookies */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Managing Your Cookies</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>You can control and manage cookies in several ways:</p>
                
                <h3 className="text-lg font-semibold text-yellow-200 mt-6">Browser Settings</h3>
                <p>Most browsers allow you to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>View and delete cookies</li>
                  <li>Block cookies from specific sites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when you close the browser</li>
                </ul>

                <h3 className="text-lg font-semibold text-yellow-200 mt-6">Our Cookie Preference Center</h3>
                <p>Use the preference center above to control which types of cookies we use on our website.</p>

                <h3 className="text-lg font-semibold text-yellow-200 mt-6">Opt-Out Links</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-yellow-400 hover:text-yellow-300" target="_blank" rel="noopener">Google Analytics Opt-out</a></li>
                  <li><a href="https://www.facebook.com/settings?tab=ads" className="text-yellow-400 hover:text-yellow-300" target="_blank" rel="noopener">Facebook Ad Preferences</a></li>
                  <li><a href="https://www.hotjar.com/legal/compliance/opt-out" className="text-yellow-400 hover:text-yellow-300" target="_blank" rel="noopener">Hotjar Opt-out</a></li>
                </ul>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 border border-yellow-500/30 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
              <div className="text-gray-300 space-y-2">
                <p>If you have any questions about our use of cookies, please contact us:</p>
                <div className="mt-4 space-y-1">
                  <p><strong>Email:</strong> privacy@leveragejournal.com</p>
                  <p><strong>Subject:</strong> Cookie Policy Inquiry</p>
                </div>
              </div>
            </Card>
          </div>

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
  );
}
