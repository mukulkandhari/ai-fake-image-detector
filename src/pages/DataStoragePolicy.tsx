
import React from 'react';
import PageLayout from '../components/PageLayout';

const DataStoragePolicy = () => {
  return (
    <PageLayout title="Data Storage Policy">
      <div className="prose prose-invert max-w-none text-gray-300">
        <p className="text-sm text-gray-400 mb-8">Last updated: December 14, 2024</p>
        
        <h2>Overview</h2>
        <p>
          This Data Storage Policy outlines how ImageGuard handles, processes, and stores data when you use our AI image authenticity detection service. We are committed to protecting your privacy while providing effective image analysis services.
        </p>

        <h2>Client-Side Processing</h2>
        
        <h3>Local Image Processing</h3>
        <p>
          ImageGuard is designed with privacy-first principles:
        </p>
        <ul>
          <li>All image analysis is performed locally in your web browser</li>
          <li>Images are not uploaded to our servers during the analysis process</li>
          <li>Processing occurs entirely on your device using JavaScript and WebAssembly</li>
          <li>Your images never leave your device unless you explicitly choose to share results</li>
        </ul>

        <h3>Browser Storage</h3>
        <p>
          Our service may use your browser's local storage capabilities:
        </p>
        <ul>
          <li><strong>LocalStorage:</strong> Temporary storage of analysis results for session continuity</li>
          <li><strong>SessionStorage:</strong> Short-term storage cleared when you close your browser</li>
          <li><strong>Cache:</strong> Temporary storage of application files for faster loading</li>
        </ul>

        <h2>Data We Collect</h2>
        
        <h3>Analytics Data</h3>
        <p>We collect minimal analytics data to improve our service:</p>
        <ul>
          <li>Usage patterns and feature interactions (anonymized)</li>
          <li>Performance metrics and error reporting</li>
          <li>Browser type and device information (non-identifying)</li>
          <li>Geographic region (country-level only)</li>
        </ul>

        <h3>Technical Logs</h3>
        <p>Our servers maintain standard technical logs including:</p>
        <ul>
          <li>IP addresses (automatically anonymized after 30 days)</li>
          <li>Request timestamps and response codes</li>
          <li>User agent strings</li>
          <li>Referrer information</li>
        </ul>

        <h2>Data Retention</h2>
        
        <h3>Client-Side Data</h3>
        <ul>
          <li><strong>Analysis Results:</strong> Stored locally until you clear browser data</li>
          <li><strong>Session Data:</strong> Automatically cleared when browser session ends</li>
          <li><strong>Cache Data:</strong> Managed automatically by browser cache policies</li>
        </ul>

        <h3>Server-Side Data</h3>
        <ul>
          <li><strong>Analytics Data:</strong> Retained for 24 months maximum</li>
          <li><strong>Technical Logs:</strong> Retained for 90 days maximum</li>
          <li><strong>Error Reports:</strong> Retained for 12 months maximum</li>
        </ul>

        <h2>Data Security</h2>
        
        <h3>Encryption</h3>
        <p>We implement multiple layers of security:</p>
        <ul>
          <li>All data transmission uses TLS 1.3 encryption</li>
          <li>Server-side data is encrypted at rest using AES-256</li>
          <li>Database connections use encrypted protocols</li>
        </ul>

        <h3>Access Controls</h3>
        <ul>
          <li>Strict access controls limit data access to authorized personnel only</li>
          <li>Multi-factor authentication required for system access</li>
          <li>Regular security audits and penetration testing</li>
          <li>Audit logs for all data access activities</li>
        </ul>

        <h2>Data Processing Locations</h2>
        <p>
          <strong>Primary Processing:</strong> Your device (client-side processing)<br/>
          <strong>Analytics Processing:</strong> United States and European Union<br/>
          <strong>Backup Storage:</strong> Encrypted backups in multiple geographic regions
        </p>

        <h2>Third-Party Services</h2>
        
        <h3>Analytics Providers</h3>
        <p>We use privacy-focused analytics services:</p>
        <ul>
          <li>Data is anonymized before transmission</li>
          <li>No personal identifiers are shared</li>
          <li>Opt-out mechanisms available</li>
        </ul>

        <h3>Content Delivery Network (CDN)</h3>
        <p>We use CDN services to improve performance:</p>
        <ul>
          <li>Only static application files are served through CDN</li>
          <li>No user data or images are processed through CDN</li>
          <li>CDN logs are subject to the same retention policies</li>
        </ul>

        <h2>Data Subject Rights</h2>
        
        <h3>Your Rights</h3>
        <p>Under applicable data protection laws, you have the right to:</p>
        <ul>
          <li>Access any personal data we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your data</li>
          <li>Object to processing for specific purposes</li>
          <li>Request data portability</li>
        </ul>

        <h3>Exercising Your Rights</h3>
        <p>To exercise these rights or make inquiries about your data:</p>
        <ul>
          <li>Email us at privacy@imageguard.ai</li>
          <li>Include specific details about your request</li>
          <li>We will respond within 30 days</li>
        </ul>

        <h2>Data Breach Response</h2>
        <p>
          In the unlikely event of a data breach:
        </p>
        <ul>
          <li>Affected users will be notified within 72 hours</li>
          <li>Relevant authorities will be notified as required by law</li>
          <li>Immediate steps will be taken to contain and remedy the breach</li>
          <li>A comprehensive incident report will be provided</li>
        </ul>

        <h2>International Data Transfers</h2>
        <p>
          When data is transferred internationally, we ensure appropriate safeguards:
        </p>
        <ul>
          <li>Standard Contractual Clauses for EU data transfers</li>
          <li>Adequacy decisions where applicable</li>
          <li>Additional security measures for sensitive data</li>
        </ul>

        <h2>Children's Data</h2>
        <p>
          We do not knowingly collect or store data from children under 13 years of age. If you become aware that a child has provided us with personal information, please contact us immediately.
        </p>

        <h2>Policy Updates</h2>
        <p>
          We may update this policy to reflect changes in our practices or legal requirements. Material changes will be communicated through:
        </p>
        <ul>
          <li>Website notification banners</li>
          <li>Email notifications (if we have your contact information)</li>
          <li>Updated "Last modified" date on this policy</li>
        </ul>

        <h2>Contact Information</h2>
        <p>
          For questions about this Data Storage Policy or our data practices:
        </p>
        
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <p><strong>Data Protection Officer:</strong> dpo@imageguard.ai</p>
          <p><strong>General Inquiries:</strong> privacy@imageguard.ai</p>
          <p><strong>Mailing Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default DataStoragePolicy;
