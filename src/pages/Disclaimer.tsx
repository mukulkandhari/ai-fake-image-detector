
import React from 'react';
import PageLayout from '../components/PageLayout';

const Disclaimer = () => {
  return (
    <PageLayout title="Disclaimer">
      <div className="prose prose-invert max-w-none text-gray-300">
        <p className="text-sm text-gray-400 mb-8">Last updated: December 14, 2024</p>
        
        <h2>General Disclaimer</h2>
        <p>
          The information and services provided by ImageGuard are for general informational and analytical purposes only. While we strive to provide accurate and reliable image analysis, the results should not be considered as definitive proof of image authenticity or manipulation.
        </p>

        <h2>Technology Limitations</h2>
        
        <h3>Analysis Accuracy</h3>
        <p>
          Our AI-powered image detection technology, while advanced, has inherent limitations:
        </p>
        <ul>
          <li>False positives and false negatives may occur</li>
          <li>New manipulation techniques may not be detected</li>
          <li>Image quality and format may affect analysis accuracy</li>
          <li>Sophisticated manipulation methods may evade detection</li>
        </ul>

        <h3>Evolving Technology</h3>
        <p>
          Image manipulation and generation technologies are rapidly evolving. Our detection capabilities are continuously updated but may not identify the latest manipulation techniques immediately upon their emergence.
        </p>

        <h2>Not Professional Advice</h2>
        
        <h3>Legal Proceedings</h3>
        <p>
          Our service is not intended for use in legal proceedings, court cases, or formal investigations without additional professional forensic analysis. Results from our service should not be used as sole evidence in legal matters.
        </p>

        <h3>Professional Consultation</h3>
        <p>
          For critical applications requiring high confidence in image authenticity, we recommend consulting with certified digital forensics experts who can provide comprehensive analysis using multiple methodologies.
        </p>

        <h2>No Guarantee of Results</h2>
        <p>
          We make no representations or warranties regarding:
        </p>
        <ul>
          <li>The accuracy of analysis results</li>
          <li>The completeness of detection capabilities</li>
          <li>The suitability for any particular purpose</li>
          <li>The absence of errors in analysis</li>
        </ul>

        <h2>User Responsibility</h2>
        
        <h3>Independent Verification</h3>
        <p>
          Users are responsible for independently verifying analysis results and should not rely solely on our service for critical decision-making.
        </p>

        <h3>Appropriate Use</h3>
        <p>
          Users must ensure they have appropriate rights to analyze uploaded images and must use the service in compliance with applicable laws and regulations.
        </p>

        <h2>Third-Party Content</h2>
        <p>
          Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites or services.
        </p>

        <h2>Educational Purpose</h2>
        <p>
          Information provided through our blog, documentation, and service is intended for educational purposes and to raise awareness about image manipulation detection. It should not be considered as comprehensive training in digital forensics.
        </p>

        <h2>Service Availability</h2>
        <p>
          We do not guarantee continuous, uninterrupted access to our service. Technical issues, maintenance, or other factors may temporarily affect service availability.
        </p>

        <h2>Data Processing Disclaimer</h2>
        <p>
          While we process images locally in your browser for privacy, we cannot guarantee the security of data transmission over the internet or the absolute security of any system.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          ImageGuard, its employees, partners, and affiliates shall not be liable for any decisions made based on analysis results or any consequences arising from the use of our service.
        </p>

        <h2>Updates and Changes</h2>
        <p>
          This disclaimer may be updated periodically to reflect changes in our service, legal requirements, or industry standards. Users are encouraged to review this disclaimer regularly.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have questions about this disclaimer or our service limitations, please contact us at:
        </p>
        
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <p>Email: support@imageguard.ai</p>
          <p>Subject: Disclaimer Inquiry</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Disclaimer;
