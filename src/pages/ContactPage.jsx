import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          Contact Us
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
          Have questions about our tutorials or courses? Want to suggest a topic? Get in touch with
          our team, and we'll be happy to help.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/30">
                <p className="text-sm font-medium text-green-800 dark:text-green-400">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-secondary-500"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-secondary-500"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-secondary-500"
                    value={formState.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-secondary-500 focus:outline-none focus:ring-1 focus:ring-secondary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-secondary-500"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="flex w-full items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <a
                    href="mailto:contact@codeianshub.com"
                    className="text-gray-600 hover:text-secondary-600 dark:text-gray-300 dark:hover:text-secondary-400"
                  >
                    contact@codeianshub.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-600 hover:text-secondary-600 dark:text-gray-300 dark:hover:text-secondary-400"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Address</p>
                  <address className="not-italic text-gray-600 dark:text-gray-300">
                    123 Learning Street,<br />
                    Tech Hub, Bangalore,<br />
                    Karnataka 560001
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 