import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';

const BookDemoForm = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      reset();
      if (onSuccess) onSuccess();
      setTimeout(() => setSubmitStatus(null), 4000);
    } catch (e) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <Input
              id="name"
              placeholder="Enter your name"
              {...register('name', { required: 'Name is required' })}
              error={errors.name?.message}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              error={errors.email?.message}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="whatsapp" className="block text-sm font-medium mb-1">WhatsApp Number</label>
            <Input
              id="whatsapp"
              placeholder="Enter your WhatsApp number"
              {...register('whatsapp', {
                required: 'WhatsApp number is required',
                pattern: {
                  value: /^\+?[0-9\s-]{7,15}$/,
                  message: 'Invalid WhatsApp number'
                }
              })}
              error={errors.whatsapp?.message}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
            <Input
              id="company"
              placeholder="Enter your company name"
              {...register('company', { required: 'Company name is required' })}
              error={errors.company?.message}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="designation" className="block text-sm font-medium mb-1">Designation</label>
            <Input
              id="designation"
              placeholder="Enter your designation"
              {...register('designation', { required: 'Designation is required' })}
              error={errors.designation?.message}
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-1">Do you have a GST number?</label>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-2">
                <input type="radio" value="yes" {...register('gst', { required: 'Please select an option' })} /> Yes
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="no" {...register('gst', { required: 'Please select an option' })} /> No
              </label>
            </div>
            {errors.gst && <p className="text-sm text-red-600 mt-1">{errors.gst.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="block text-sm font-medium mb-1">Do you have an existing customer base?</label>
            <select className="w-full px-3 py-2 border rounded" {...register('customerBase', { required: 'Please select an option' })}>
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.customerBase && <p className="text-sm text-red-600 mt-1">{errors.customerBase.message}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="website" className="block text-sm font-medium mb-1">Website</label>
            <Input
              id="website"
              placeholder="Please mention your website"
              {...register('website', { required: 'Website is required' })}
              error={errors.website?.message}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="datetime" className="block text-sm font-medium mb-1">Date & Time</label>
            <Input
              id="datetime"
              type="datetime-local"
              className="text-right"
              {...register('datetime', { required: 'Date and time is required' })}
              error={errors.datetime?.message}
            />
            {/* Note: Native datetime-local pickers are browser controlled. For custom right-aligned popups, a 3rd-party picker is needed. */}
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          By proceeding, you confirm that you have read and agree to{' '}
          <a
            href="https://calendly.com/terms-of-use"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Calendly's Terms of Use
          </a>{' '}and{' '}
          <a
            href="https://calendly.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Privacy Notice
          </a>.
        </div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full mt-6  bottom-0 z-10 shadow-lg"
          loading={isSubmitting}
        >
          {isSubmitting ? 'Booking...' : 'Book Demo'}
        </Button>
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4 text-green-800 text-center">
            Thank you! Your demo has been scheduled.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-4 text-red-800 text-center">
            Something went wrong. Please try again.
          </div>
        )}
      </form>
  
      <Modal open={showDemoModal} onClose={() => setShowDemoModal(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Demo Preview</h2>
          <p>This is a placeholder for your demo content. You can embed a video, slideshow, or any interactive demo here.</p>
          <div className="mt-6  justify-end">
            <Button type="button" variant="primary" onClick={() => setShowDemoModal(false)}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BookDemoForm; 