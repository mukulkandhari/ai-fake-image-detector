
import React from 'react';
import PageLayout from '../components/PageLayout';

const Disclaimer = () => {
  return (
    <PageLayout title="Disclaimer">
      <div className="prose prose-invert max-w-none">
        <p className="text-sm text-gray-400 mb-8">Last updated: December 14, 2024</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">General Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              The information and services provided by FakePicDetector are for general informational and analytical purposes only. While we strive to provide accurate and reliable image analysis, the results should not be considered as definitive proof of image authenticity or manipulation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Technology Limitations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Analysis Accuracy</h3>
                <p className="text-gray-300 mb-3">
                  Our AI-powered image detection technology, while advanced, has inherent limitations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>False positives and false negatives may occur</li>
                  <li>New manipulation techniques may not be detected</li>
                  <li>Image quality and format may affect analysis accuracy</li>
                  <li>Sophisticated manipulation methods may evade detection</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Evolving Technology</h3>
                <p className="text-gray-300">
                  Image manipulation and generation technologies are rapidly evolving. Our detection capabilities are continuously updated but may not identify the latest manipulation techniques immediately upon their emergence.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Not Professional Advice</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Legal Proceedings</h3>
                <p className="text-gray-300">
                  Our service is not intended for use in legal proceedings, court cases, or formal investigations without additional professional forensic analysis. Results from our service should not be used as sole evidence in legal matters.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Professional Consultation</h3>
                <p className="text-gray-300">
                  For critical applications requiring high confidence in image authenticity, we recommend consulting with certified digital forensics experts who can provide comprehensive analysis using multiple methodologies.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">No Guarantee of Results</h2>
            <p className="text-gray-300 mb-4">We make no representations or warranties regarding:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>The accuracy of analysis results</li>
              <li>The completeness of detection capabilities</li>
              <li>The suitability for any particular purpose</li>
              <li>The absence of errors in analysis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">User Responsibility</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Independent Verification</h3>
                <p className="text-gray-300">
                  Users are responsible for independently verifying analysis results and should not rely solely on our service for critical decision-making.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Appropriate Use</h3>
                <p className="text-gray-300">
                  Users must ensure they have appropriate rights to analyze uploaded images and must use the service in compliance with applicable laws and regulations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Content</h2>
            <p className="text-gray-300">
              Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Educational Purpose</h2>
            <p className="text-gray-300">
              Information provided through our blog, documentation, and service is intended for educational purposes and to raise awareness about image manipulation detection. It should not be considered as comprehensive training in digital forensics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
            <p className="text-gray-300">
              We do not guarantee continuous, uninterrupted access to our service. Technical issues, maintenance, or other factors may temporarily affect service availability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Processing Disclaimer</h2>
            <p className="text-gray-300">
              While we process images locally in your browser for privacy, we cannot guarantee the security of data transmission over the internet or the absolute security of any system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-300">
              FakePicDetector, its employees, partners, and affiliates shall not be liable for any decisions made based on analysis results or any consequences arising from the use of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Updates and Changes</h2>
            <p className="text-gray-300">
              This disclaimer may be updated periodically to reflect changes in our service, legal requirements, or industry standards. Users are encouraged to review this disclaimer regularly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about this disclaimer or our service limitations, please contact us at:
            </p>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <p className="text-white mb-2"><strong>Email:</strong> support@fakepicdetector.online</p>
              <p className="text-white"><strong>Subject:</strong> Disclaimer Inquiry</p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default Disclaimer;
