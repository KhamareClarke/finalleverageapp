'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Users, Mail, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              <Shield className="w-6 h-6 text-yellow-400" />
              <span className="text-xl font-bold text-yellow-400">Privacy Policy</span>
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
              Privacy <span className="text-yellow-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: November 7, 2025
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {/* Information We Collect */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <h3 className="text-lg font-semibold text-yellow-200">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and email address when you create an account</li>
                  <li>Payment information for purchases (processed securely by Stripe)</li>
                  <li>Profile information you choose to provide</li>
                  <li>Communication preferences and settings</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-yellow-200 mt-6">Usage Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Goals, journal entries, and progress data you input</li>
                  <li>App usage patterns and feature interactions</li>
                  <li>Device information and browser type</li>
                  <li>IP address and location data (anonymized)</li>
                </ul>
              </div>
            </Card>

            {/* How We Use Information */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Service Delivery:</strong> To provide and improve the Leverage Journal experience</li>
                  <li><strong>Personalization:</strong> To customize your dashboard and recommendations</li>
                  <li><strong>Communication:</strong> To send important updates and optional newsletters</li>
                  <li><strong>Analytics:</strong> To understand usage patterns and improve our product</li>
                  <li><strong>Security:</strong> To protect your account and prevent fraud</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </div>
            </Card>

            {/* Data Protection */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Data Protection & Security</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                  <li><strong>Access Controls:</strong> Strict access controls and authentication</li>
                  <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                  <li><strong>Data Minimization:</strong> We only collect data necessary for our services</li>
                  <li><strong>Secure Storage:</strong> Data stored on secure, compliant cloud infrastructure</li>
                </ul>
              </div>
            </Card>

            {/* Your Rights (GDPR) */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Your Rights (GDPR Compliance)</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>Under GDPR and other privacy laws, you have the following rights:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                  <li><strong>Restriction:</strong> Limit how we process your data</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at{' '}
                  <a href="mailto:privacy@leveragejournal.com" className="text-yellow-400 hover:text-yellow-300">
                    privacy@leveragejournal.com
                  </a>
                </p>
              </div>
            </Card>

            {/* Cookies */}
            <Card className="bg-neutral-900/50 border border-yellow-600/20 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Cookies & Tracking</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Keep you logged in and remember your preferences</li>
                  <li>Analyze website performance and user behavior</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
                <p className="mt-4">
                  You can manage cookie preferences through your browser settings or our{' '}
                  <Link href="/cookies" className="text-yellow-400 hover:text-yellow-300">
                    Cookie Policy
                  </Link>
                </p>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 border border-yellow-500/30 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <div className="text-gray-300 space-y-2">
                <p>If you have questions about this Privacy Policy, please contact us:</p>
                <div className="mt-4 space-y-1">
                  <p><strong>Email:</strong> privacy@leveragejournal.com</p>
                  <p><strong>Address:</strong> Leverage Journal Ltd, London, UK</p>
                  <p><strong>Data Protection Officer:</strong> dpo@leveragejournal.com</p>
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
