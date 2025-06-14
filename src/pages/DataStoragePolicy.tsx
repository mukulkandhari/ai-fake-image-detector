
import React from 'react';
import PageLayout from '../components/PageLayout';

const DataStoragePolicy = () => {
  return (
    <PageLayout title="Data Storage Policy">
      <div className="prose prose-invert max-w-none">
        <p className="text-sm text-gray-400 mb-8">Last updated: December 14, 2024</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              This Data Storage Policy outlines how FakePicDetector handles, processes, and stores data when you use our AI image authenticity detection service. We are committed to protecting your privacy while providing effective image analysis services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Client-Side Processing</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-3">Local Image Processing</h3>
                <p className="text-gray-300 mb-3">
                  FakePicDetector is designed with privacy-first principles:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>All image analysis is performed locally in your web browser</li>
                  <li>Images are not uploaded to our servers during the analysis process</li>
                  <li>Processing occurs entirely on your device using JavaScript and WebAssembly</li>
                  <li>Your images never leave your device unless you explicitly choose to share results</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-3">Browser Storage</h3>
                <p className="text-gray-300 mb-3">
                  Our service may use your browser's local storage capabilities:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-white">LocalStorage:</strong> Temporary storage of analysis results for session continuity</li>
                  <li><strong className="text-white">SessionStorage:</strong> Short-term storage cleared when you close your browser</li>
                  <li><strong className="text-white">Cache:</strong> Temporary storage of application files for faster loading</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data We Collect</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Analytics Data</h3>
                <p className="text-gray-300 mb-3">We collect minimal analytics data to improve our service:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Usage patterns and feature interactions (anonymized)</li>
                  <li>Performance metrics and error reporting</li>
                  <li>Browser type and device information (non-identifying)</li>
                  <li>Geographic region (country-level only)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">Technical Logs</h3>
                <p className="text-gray-300 mb-3">Our servers maintain standard technical logs including:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>IP addresses (automatically anonymized after 30 days)</li>
                  <li>Request timestamps and response codes</li>
                  <li>User agent strings</li>
                  <li>Referrer information</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Client-Side Data</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-white">Analysis Results:</strong> Stored locally until you clear browser data</li>
                  <li><strong className="text-white">Session Data:</strong> Automatically cleared when browser session ends</li>
                  <li><strong className="text-white">Cache Data:</strong> Managed automatically by browser cache policies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Server-Side Data</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-white">Analytics Data:</strong> Retained for 24 months maximum</li>
                  <li><strong className="text-white">Technical Logs:</strong> Retained for 90 days maximum</li>
                  <li><strong className="text-white">Error Reports:</strong> Retained for 12 months maximum</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Encryption</h3>
                <p className="text-gray-300 mb-3">We implement multiple layers of security:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>All data transmission uses TLS 1.3 encryption</li>
                  <li>Server-side data is encrypted at rest using AES-256</li>
                  <li>Database connections use encrypted protocols</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-3">Access Controls</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Strict access controls limit data access to authorized personnel only</li>
                  <li>Multi-factor authentication required for system access</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Audit logs for all data access activities</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Processing Locations</h2>
            <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700">
              <p className="text-gray-300"><strong className="text-white">Primary Processing:</strong> Your device (client-side processing)</p>
              <p className="text-gray-300"><strong className="text-white">Analytics Processing:</strong> United States and European Union</p>
              <p className="text-gray-300"><strong className="text-white">Backup Storage:</strong> Encrypted backups in multiple geographic regions</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Analytics Providers</h3>
                <p className="text-gray-300 mb-3">We use privacy-focused analytics services:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Data is anonymized before transmission</li>
                  <li>No personal identifiers are shared</li>
                  <li>Opt-out mechanisms available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Content Delivery Network (CDN)</h3>
                <p className="text-gray-300 mb-3">We use CDN services to improve performance:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Only static application files are served through CDN</li>
                  <li>No user data or images are processed through CDN</li>
                  <li>CDN logs are subject to the same retention policies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Subject Rights</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Your Rights</h3>
                <p className="text-gray-300 mb-3">Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Access any personal data we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing for specific purposes</li>
                  <li>Request data portability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">Exercising Your Rights</h3>
                <p className="text-gray-300 mb-3">To exercise these rights or make inquiries about your data:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Email us at privacy@fakepicdetector.online</li>
                  <li>Include specific details about your request</li>
                  <li>We will respond within 30 days</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Breach Response</h2>
            <p className="text-gray-300 mb-4">
              In the unlikely event of a data breach:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Affected users will be notified within 72 hours</li>
              <li>Relevant authorities will be notified as required by law</li>
              <li>Immediate steps will be taken to contain and remedy the breach</li>
              <li>A comprehensive incident report will be provided</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
            <p className="text-gray-300 mb-4">
              When data is transferred internationally, we ensure appropriate safeguards:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Standard Contractual Clauses for EU data transfers</li>
              <li>Adequacy decisions where applicable</li>
              <li>Additional security measures for sensitive data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Children's Data</h2>
            <p className="text-gray-300">
              We do not knowingly collect or store data from children under 13 years of age. If you become aware that a child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
            <p className="text-gray-300 mb-4">
              We may update this policy to reflect changes in our practices or legal requirements. Material changes will be communicated through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Website notification banners</li>
              <li>Email notifications (if we have your contact information)</li>
              <li>Updated "Last modified" date on this policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-4">
              For questions about this Data Storage Policy or our data practices:
            </p>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <p className="text-white mb-2"><strong>Data Protection Officer:</strong> dpo@fakepicdetector.online</p>
              <p className="text-white mb-2"><strong>General Inquiries:</strong> privacy@fakepicdetector.online</p>
              <p className="text-white"><strong>Mailing Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default DataStoragePolicy;
