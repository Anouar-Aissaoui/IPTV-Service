import React from 'react';
import { DynamicMetaTags } from '@/components/seo/DynamicMetaTags';
import Navigation from '@/components/navigation/Navigation';
import { ContentWrapper } from '@/components/layout/ContentWrapper';

const TermsOfService = () => {
  return (
    <>
      <DynamicMetaTags
        path="/terms-of-service"
        defaultTitle="Terms of Service - IPTV Service"
        defaultDescription="Read our Terms of Service to understand the rules, guidelines, and agreements that govern the use of our IPTV service."
      />
      <Navigation onScrollToSection={() => {}} />
      <ContentWrapper as="main" className="container mx-auto px-4 py-8 prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using our IPTV service, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this service.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
          <p>We provide IPTV streaming services that allow users to access various channels and content through our platform. The service is provided "as is" and we reserve the right to modify, suspend, or discontinue any aspect of the service at any time.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>You must be at least 18 years old to use our service</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You agree not to share, resell, or transfer your subscription to any third party</li>
            <li>You must comply with all applicable laws and regulations while using our service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payments</h2>
          <p>Our service requires a paid subscription. Payment terms, refund policies, and subscription details are outlined in our pricing section. We reserve the right to modify our pricing and payment terms at any time.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Content Usage</h2>
          <p>All content provided through our service is protected by copyright and other intellectual property laws. Users are prohibited from:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Recording, copying, or redistributing any content</li>
            <li>Using the service for public viewing or commercial purposes</li>
            <li>Attempting to circumvent any technical measures we use to provide the service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Service Availability</h2>
          <p>While we strive to provide uninterrupted service, we do not guarantee that our service will be available at all times. We are not liable for any interruptions, delays, or downtimes in service.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
          <p>We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact our support team.</p>
        </section>
      </ContentWrapper>
    </>
  );
};

export default TermsOfService;