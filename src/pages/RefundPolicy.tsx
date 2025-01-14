import React from 'react';
import { DynamicMetaTags } from '@/components/seo/DynamicMetaTags';
import Navigation from '@/components/navigation/Navigation';
import { ContentWrapper } from '@/components/layout/ContentWrapper';

const RefundPolicy = () => {
  return (
    <>
      <DynamicMetaTags
        path="/refund-policy"
        defaultTitle="Refund Policy - IPTV Service"
        defaultDescription="Our refund policy outlines the terms and conditions for requesting refunds for our IPTV service subscriptions."
      />
      <Navigation onScrollToSection={() => {}} />
      <ContentWrapper as="main" className="container mx-auto px-4 py-8 prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        
        <p className="text-lg mb-6">Last updated: March 2025</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Refund Eligibility</h2>
          <p>
            We offer a 24-hour money-back guarantee on all our IPTV service subscriptions. 
            If you are not satisfied with our service, you can request a refund within 24 hours of your purchase.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Refund Process</h2>
          <p>To request a refund:</p>
          <ul>
            <li>Contact our customer support team within 24 hours of purchase</li>
            <li>Provide your order number and reason for the refund</li>
            <li>Allow up to 5-7 business days for the refund to be processed</li>
            <li>Refunds will be issued to the original payment method</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Non-Refundable Items</h2>
          <p>The following are not eligible for refunds:</p>
          <ul>
            <li>Purchases made more than 24 hours ago</li>
            <li>Services that have been extensively used</li>
            <li>Accounts that have violated our terms of service</li>
            <li>Special promotional or discounted subscriptions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cancellation Policy</h2>
          <p>
            You may cancel your subscription at any time. However, we do not provide partial refunds for 
            unused portions of subscription periods. Your service will continue until the end of the current 
            billing period.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about our refund policy, please contact us at:
            <br />
            Email: support@iptvservice.site
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
          <p>
            We reserve the right to modify this refund policy at any time. Changes will be effective 
            immediately upon posting to our website. Your continued use of our service after any changes 
            indicates your acceptance of the new refund policy.
          </p>
        </section>
      </ContentWrapper>
    </>
  );
};

export default RefundPolicy;