
import React from 'react';
import PageLayout from '../components/PageLayout';

const PrivacyPolicy = () => {
  return (
    <PageLayout title="Privacy Policy">
      <div className="prose prose-invert max-w-none text-gray-300">
        <p className="text-sm text-gray-400 mb-8">Last updated: December 14, 2024</p>
        
        <p>
          At ImageGuard, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI image authenticity detection service.
        </p>

        <h2>Information We Collect</h2>
        
        <h3>Information You Provide</h3>
        <ul>
          <li>Images you upload for analysis</li>
          <li>Contact information when you reach out to us</li>
          <li>Feedback and communications you send to us</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <ul>
          <li>Usage data and analytics</li>
          <li>Device information and browser type</li>
          <li>IP address and location data</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2>How We Use Your Information</h2>
        
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve our image analysis services</li>
          <li>Process and analyze uploaded images</li>
          <li>Communicate with you about our services</li>
          <li>Ensure the security and integrity of our platform</li>
          <li>Comply with legal obligations</li>
          <li>Develop and improve our AI detection algorithms</li>
        </ul>

        <h2>Image Processing and Storage</h2>
        
        <p>
          <strong>Client-Side Processing:</strong> Our image analysis is performed entirely in your browser. Images are processed locally on your device and are not uploaded to our servers unless you explicitly choose to save or share results.
        </p>
        
        <p>
          <strong>Temporary Storage:</strong> Analysis results may be temporarily stored in your browser's local storage for your convenience. This data remains on your device and can be cleared at any time.
        </p>

        <h2>Data Sharing and Disclosure</h2>
        
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
        
        <ul>
          <li>With your explicit consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and safety</li>
          <li>With trusted service providers who assist in operating our website</li>
        </ul>

        <h2>Data Security</h2>
        
        <p>
          We implement appropriate security measures to protect your information, including:
        </p>
        <ul>
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments and updates</li>
          <li>Access controls and authentication measures</li>
          <li>Secure coding practices and vulnerability testing</li>
        </ul>

        <h2>Your Rights and Choices</h2>
        
        <p>You have the right to:</p>
        <ul>
          <li>Access and review your personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of certain communications</li>
          <li>Control cookie preferences</li>
        </ul>

        <h2>International Data Transfers</h2>
        
        <p>
          Your information may be processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
        </p>

        <h2>Children's Privacy</h2>
        
        <p>
          Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
        </p>

        <h2>Changes to This Policy</h2>
        
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <p>Email: privacy@imageguard.ai</p>
          <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
