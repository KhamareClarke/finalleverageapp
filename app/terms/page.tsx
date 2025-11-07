'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, FileText, Scale, AlertTriangle, CreditCard, RefreshCw, Mail } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
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
              <Scale className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold text-yellow-400">Terms of Service</span>
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
              Terms of <span className="text-yellow-400">Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using the Leverage Journal service.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: November 7, 2025
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  By accessing and using the Leverage Journal™ service ("Service"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                </p>
                <p>
                  These Terms apply to all users of the Service, including visitors, registered users, and premium subscribers.
                </p>
              </div>
            </Card>

            {/* Service Description */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <RefreshCw className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Service Description</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Leverage Journal™ is a 90-day achievement system that combines:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Physical journal with structured planning pages</li>
                  <li>Mobile application with progress tracking</li>
                  <li>AI-powered insights and recommendations</li>
                  <li>Goal-setting frameworks and templates</li>
                  <li>Community features and support</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of the Service at any time with reasonable notice.
                </p>
              </div>
            </Card>

            {/* User Accounts */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">User Accounts & Responsibilities</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-lg font-semibold text-yellow-200">Account Creation</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>One account per person; no sharing accounts</li>
                  <li>You must be at least 16 years old to create an account</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-yellow-200 mt-6">Acceptable Use</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the Service for personal goal achievement only</li>
                  <li>Do not share, sell, or distribute your account access</li>
                  <li>Respect other users and community guidelines</li>
                  <li>Do not attempt to reverse engineer or hack the Service</li>
                </ul>
              </div>
            </Card>

            {/* Payment Terms */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <CreditCard className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Payment & Billing</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-lg font-semibold text-yellow-200">Pricing</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Current pricing: £19.99 (50% off regular price of £39.99)</li>
                  <li>Prices include VAT where applicable</li>
                  <li>Prices may change with 30 days notice</li>
                  <li>Special offers are time-limited and subject to availability</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-yellow-200 mt-6">Payment Processing</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payments processed securely through Stripe</li>
                  <li>We do not store your payment information</li>
                  <li>All sales are final unless otherwise stated</li>
                  <li>Refunds available within 30 days (see Refund Policy)</li>
                </ul>
              </div>
            </Card>

            {/* Intellectual Property */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Intellectual Property</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-lg font-semibold text-yellow-200">Our Content</h3>
                <p>
                  All content, features, and functionality of the Service, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, and software, are owned by Leverage Journal™ and protected by copyright, trademark, and other intellectual property laws.
                </p>
                
                <h3 className="text-lg font-semibold text-yellow-200 mt-6">Your Content</h3>
                <p>
                  You retain ownership of any content you create using our Service (goals, journal entries, etc.). By using our Service, you grant us a limited license to store, process, and display your content solely for providing the Service to you.
                </p>
              </div>
            </Card>

            {/* Limitation of Liability */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  The Service is provided "as is" without warranties of any kind. We do not guarantee that the Service will meet your specific requirements or that it will be uninterrupted, timely, secure, or error-free.
                </p>
                <p>
                  In no event shall Leverage Journal™ be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <p>
                  Our total liability to you for all claims arising from or relating to the Service shall not exceed the amount you paid us in the 12 months preceding the claim.
                </p>
              </div>
            </Card>

            {/* Termination */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Termination</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  You may terminate your account at any time by contacting us or using the account deletion feature in your dashboard.
                </p>
                <p>
                  We may terminate or suspend your account immediately, without prior notice, if you breach these Terms or engage in conduct that we determine to be harmful to other users or the Service.
                </p>
                <p>
                  Upon termination, your right to use the Service will cease immediately, but these Terms will remain in effect regarding any prior use.
                </p>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 border border-yellow-500/30 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <div className="text-gray-300 space-y-2">
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <div className="mt-4 space-y-1">
                  <p><strong>Email:</strong> legal@leveragejournal.com</p>
                  <p><strong>Address:</strong> Leverage Journal Ltd, London, UK</p>
                  <p><strong>Business Registration:</strong> Companies House #12345678</p>
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
