
import React from 'react';
import PageLayout from '../components/PageLayout';

const TermsConditions = () => {
  return (
    <PageLayout title="Terms and Conditions">
      <div className="prose prose-invert max-w-none">
        <p className="text-sm text-gray-400 mb-8">Last updated: December 14, 2024</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using FakePicDetector's AI image authenticity detection service, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-300 mb-4">
              FakePicDetector provides AI-powered image analysis tools designed to detect potential manipulation, authenticity, and AI-generated content in digital images. Our service includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Metadata analysis and EXIF data examination</li>
              <li>Noise pattern analysis</li>
              <li>Compression artifact detection</li>
              <li>AI generation detection algorithms</li>
              <li>Color distribution analysis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">3.1 Lawful Use</h3>
                <p className="text-gray-300 mb-3">You agree to use our service only for lawful purposes and in accordance with these Terms. You shall not:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Upload illegal, harmful, or inappropriate content</li>
                  <li>Violate any applicable local, state, national, or international law</li>
                  <li>Infringe upon intellectual property rights of others</li>
                  <li>Attempt to reverse engineer or compromise our systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">3.2 Content Responsibility</h3>
                <p className="text-gray-300">
                  You are solely responsible for the images you upload and analyze. You represent that you have the right to analyze the images you submit to our service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Service Limitations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">4.1 Analysis Accuracy</h3>
                <p className="text-gray-300">
                  While our AI detection technology is advanced, it is not infallible. Analysis results should be considered as supplementary information rather than definitive proof of authenticity or manipulation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">4.2 Service Availability</h3>
                <p className="text-gray-300">
                  We strive to maintain high uptime but do not guarantee uninterrupted access to our service. We reserve the right to modify, suspend, or discontinue the service with or without notice.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-3">5.1 Our IP Rights</h3>
                <p className="text-gray-300">
                  The service, including all algorithms, software, designs, and content, is owned by FakePicDetector and protected by intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-3">5.2 User Content</h3>
                <p className="text-gray-300">
                  You retain ownership of images you upload. By using our service, you grant us a limited license to process and analyze your images for the purpose of providing our service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Privacy and Data Protection</h2>
            <p className="text-gray-300">
              Your privacy is important to us. Please review our Privacy Policy, which governs the collection and use of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimers</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">7.1 No Warranty</h3>
                <p className="text-gray-300">
                  The service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">7.2 Professional Use</h3>
                <p className="text-gray-300">
                  Our service is not intended to replace professional forensic analysis or expert testimony. For legal proceedings or professional investigations, consult qualified digital forensics experts.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300">
              In no event shall FakePicDetector be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify and hold FakePicDetector harmless from any claims, damages, losses, or expenses arising from your use of the service or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
            <p className="text-gray-300">
              We may terminate or suspend your access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. We will provide notice of changes by posting updated Terms on our website. Continued use of the service constitutes acceptance of modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <p className="text-white mb-2"><strong>Email:</strong> legal@fakepicdetector.online</p>
              <p className="text-white"><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsConditions;
