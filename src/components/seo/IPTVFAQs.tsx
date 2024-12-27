import React from 'react';

export const IPTVFAQs = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-white">FAQs</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-semibold mb-2 text-white">
            What devices are compatible with your IPTV service?
          </h4>
          <p className="text-gray-300">
            Our IPTV service is compatible with a wide range of devices, including Smart TVs, 
            Android and iOS devices, desktops, laptops, and streaming devices like Firestick and Roku.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2 text-white">Do you offer customer support?</h4>
          <p className="text-gray-300">
            Yes, we offer 24/7 customer support to help with any issues or questions you may have.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2 text-white">Is there a trial period available?</h4>
          <p className="text-gray-300">
            Yes, we offer a free trial so you can test our IPTV service before purchasing a subscription.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2 text-white">
            Can I become a reseller of your IPTV services?
          </h4>
          <p className="text-gray-300">
            Absolutely! Join our IPTV reseller program and start earning profits by selling 
            subscriptions to others. You'll have access to dedicated panels to manage all 
            subscriptions efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};