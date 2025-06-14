
import React from 'react';
import PageLayout from '../components/PageLayout';

const TermsConditions = () => {
  return (
    <PageLayout title="Terms and Conditions">
      <div className="prose prose-invert max-w-none text-gray-300">
        <p className="text-sm text-gray-400 mb-8">Last updated: December 14, 2024</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using ImageGuard's AI image authenticity detection service, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          ImageGuard provides AI-powered image analysis tools designed to detect potential manipulation, authenticity, and AI-generated content in digital images. Our service includes:
        </p>
        <ul>
          <li>Metadata analysis and EXIF data examination</li>
          <li>Noise pattern analysis</li>
          <li>Compression artifact detection</li>
          <li>AI generation detection algorithms</li>
          <li>Color distribution analysis</li>
        </ul>

        <h2>3. User Responsibilities</h2>
        
        <h3>3.1 Lawful Use</h3>
        <p>You agree to use our service only for lawful purposes and in accordance with these Terms. You shall not:</p>
        <ul>
          <li>Upload illegal, harmful, or inappropriate content</li>
          <li>Violate any applicable local, state, national, or international law</li>
          <li>Infringe upon intellectual property rights of others</li>
          <li>Attempt to reverse engineer or compromise our systems</li>
        </ul>

        <h3>3.2 Content Responsibility</h3>
        <p>
          You are solely responsible for the images you upload and analyze. You represent that you have the right to analyze the images you submit to our service.
        </p>

        <h2>4. Service Limitations</h2>
        
        <h3>4.1 Analysis Accuracy</h3>
        <p>
          While our AI detection technology is advanced, it is not infallible. Analysis results should be considered as supplementary information rather than definitive proof of authenticity or manipulation.
        </p>

        <h3>4.2 Service Availability</h3>
        <p>
          We strive to maintain high uptime but do not guarantee uninterrupted access to our service. We reserve the right to modify, suspend, or discontinue the service with or without notice.
        </p>

        <h2>5. Intellectual Property</h2>
        
        <h3>5.1 Our IP Rights</h3>
        <p>
          The service, including all algorithms, software, designs, and content, is owned by ImageGuard and protected by intellectual property laws.
        </p>

        <h3>5.2 User Content</h3>
        <p>
          You retain ownership of images you upload. By using our service, you grant us a limited license to process and analyze your images for the purpose of providing our service.
        </p>

        <h2>6. Privacy and Data Protection</h2>
        <p>
          Your privacy is important to us. Please review our Privacy Policy, which governs the collection and use of your information.
        </p>

        <h2>7. Disclaimers</h2>
        
        <h3>7.1 No Warranty</h3>
        <p>
          The service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
        </p>

        <h3>7.2 Professional Use</h3>
        <p>
          Our service is not intended to replace professional forensic analysis or expert testimony. For legal proceedings or professional investigations, consult qualified digital forensics experts.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          In no event shall ImageGuard be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or other intangible losses.
        </p>

        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify and hold ImageGuard harmless from any claims, damages, losses, or expenses arising from your use of the service or violation of these terms.
        </p>

        <h2>10. Termination</h2>
        <p>
          We may terminate or suspend your access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
        </p>

        <h2>12. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of changes by posting updated Terms on our website. Continued use of the service constitutes acceptance of modified Terms.
        </p>

        <h2>13. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <p>Email: legal@imageguard.ai</p>
          <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsConditions;
