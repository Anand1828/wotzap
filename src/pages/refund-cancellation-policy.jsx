import React from 'react';
import Layout from '../components/Layout';

const RefundCancellationPolicy = () => (
  <Layout showFloatingMenu={false}>
    <div className="py-16 bg-gradient-to-b from-background to-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Refund & Cancellation Policy</h1>
          <p className="text-lg text-text-secondary">Please read our refund and cancellation terms carefully</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600">Contact: <a href="mailto:support@wotzapmsg.com" className="text-primary underline">support@wotzapmsg.com</a> | <a href="tel:9316360039" className="text-primary underline">9316360039</a></p>
          </div>
          <div className="prose prose-lg max-w-none text-text-secondary space-y-6">
            <p>
              We charge and collect in advance for the use of our SaaS services.
            </p>
            <p>
              <strong>All services rendered are non-refundable.</strong> All monthly, quarterly, yearly, and multi-year subscriptions renew automatically on their due renewal date according to the date of purchase until officially cancelled in writing. Customers may cancel anytime by emailing a notice to our support team.
            </p>
            <p className="font-semibold text-red-600">
              Important: No refunds or credits for partial months or years of service will be refunded to a customer upon cancellation.
            </p>
            <p>
              In case the amount remains outstanding for more than fifteen (15) days from the date of activation of services (for first-time users) & more than one (1) day for auto-renewal cases, the company reserves the right to cancel the subscription.
            </p>
            <p>
              For any questions or to request cancellation, please contact us at <a href="mailto:support@wotzapmsg.com" className="text-primary underline">support@wotzapmsg.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default RefundCancellationPolicy; 