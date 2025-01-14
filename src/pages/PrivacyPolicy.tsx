import React from 'react';
import { DynamicMetaTags } from '@/components/seo/DynamicMetaTags';
import Navigation from '@/components/navigation/Navigation';
import { ContentWrapper } from '@/components/layout/ContentWrapper';

const PrivacyPolicy = () => {
  return (
    <>
      <DynamicMetaTags
        path="/privacy-policy"
        defaultTitle="Privacy Policy - IPTV Service"
        defaultDescription="Our privacy policy outlines how we collect, use, and protect your personal information when you use our IPTV service."
      />
      <Navigation onScrollToSection={() => {}} />
      <ContentWrapper as="main" className="container mx-auto px-4 py-8 prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="text-lg mb-6">Last updated: March 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to IPTV Service. We are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Billing information</li>
            <li>IP address and device information</li>
            <li>Usage data and preferences</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We use the collected information for various purposes:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To process your payments</li>
            <li>To communicate with you about updates and support</li>
            <li>To improve our service and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Information Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the internet is 100% secure, and we cannot 
            guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
          <p>
            We may use third-party services that collect, monitor, and analyze data to help us 
            improve our service. These third-party service providers have their own privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: support@iptvservice.site
          </p>
        </section>
      </ContentWrapper>
    </>
  );
};

export default PrivacyPolicy;