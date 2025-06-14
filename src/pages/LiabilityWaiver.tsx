
import React from 'react';
import PageLayout from '../components/PageLayout';

const LiabilityWaiver = () => {
  return (
    <PageLayout title="Liability Waiver">
      <div className="prose prose-invert max-w-none text-gray-300">
        <p className="text-sm text-gray-400 mb-8">Last updated: December 14, 2024</p>
        
        <h2>Waiver and Release of Liability</h2>
        <p>
          By using ImageGuard's AI image authenticity detection service, you acknowledge and agree to this Liability Waiver. Please read this document carefully as it affects your legal rights.
        </p>

        <h2>Assumption of Risk</h2>
        
        <h3>Technology Limitations</h3>
        <p>
          You acknowledge and understand that:
        </p>
        <ul>
          <li>AI image detection technology is not infallible and may produce incorrect results</li>
          <li>False positives and false negatives may occur in analysis results</li>
          <li>New manipulation techniques may not be detected by current algorithms</li>
          <li>Image quality, format, and compression may affect analysis accuracy</li>
          <li>The technology is continuously evolving and has inherent limitations</li>
        </ul>

        <h3>Service Reliability</h3>
        <p>
          You acknowledge that:
        </p>
        <ul>
          <li>The service may be temporarily unavailable due to maintenance or technical issues</li>
          <li>Internet connectivity problems may affect service accessibility</li>
          <li>Browser compatibility issues may impact functionality</li>
          <li>Third-party dependencies may affect service performance</li>
        </ul>

        <h2>Release of Claims</h2>
        
        <h3>General Release</h3>
        <p>
          You hereby release, waive, discharge, and covenant not to sue ImageGuard, its officers, directors, employees, agents, affiliates, successors, and assigns from any and all liability, claims, demands, actions, and causes of action whatsoever arising out of or related to:
        </p>
        <ul>
          <li>Any loss, damage, or injury that may be sustained by you</li>
          <li>The accuracy or inaccuracy of analysis results</li>
          <li>Decisions made based on analysis results</li>
          <li>Any technical failures or service interruptions</li>
          <li>Any data loss or corruption</li>
        </ul>

        <h3>Specific Exclusions</h3>
        <p>
          This waiver specifically includes but is not limited to claims related to:
        </p>
        <ul>
          <li>Incorrect identification of authentic images as manipulated</li>
          <li>Failure to detect actual image manipulation</li>
          <li>Financial losses resulting from reliance on analysis results</li>
          <li>Reputational damage from incorrect analysis</li>
          <li>Legal consequences from using analysis results in proceedings</li>
          <li>Privacy breaches or data security incidents</li>
        </ul>

        <h2>Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless ImageGuard and its affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:
        </p>
        <ul>
          <li>Your use of the service</li>
          <li>Your violation of these terms</li>
          <li>Your violation of any third-party rights</li>
          <li>Any content you submit to the service</li>
        </ul>

        <h2>Limitation of Liability</h2>
        
        <h3>No Consequential Damages</h3>
        <p>
          In no event shall ImageGuard be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
        </p>
        <ul>
          <li>Loss of profits or revenue</li>
          <li>Loss of data or information</li>
          <li>Loss of business opportunities</li>
          <li>Reputational harm</li>
          <li>Emotional distress</li>
        </ul>

        <h3>Maximum Liability</h3>
        <p>
          To the maximum extent permitted by law, ImageGuard's total liability for any claims arising out of or related to your use of the service shall not exceed the amount you paid for the service in the twelve (12) months preceding the claim.
        </p>

        <h2>Professional Use Disclaimer</h2>
        
        <h3>Not Professional Advice</h3>
        <p>
          You acknowledge that:
        </p>
        <ul>
          <li>Our service is not intended to replace professional forensic analysis</li>
          <li>Results should not be used as sole evidence in legal proceedings</li>
          <li>Professional consultation is recommended for critical applications</li>
          <li>We do not provide expert witness services or testimony</li>
        </ul>

        <h3>Independent Verification</h3>
        <p>
          You agree to:
        </p>
        <ul>
          <li>Independently verify analysis results when necessary</li>
          <li>Seek professional consultation for critical decisions</li>
          <li>Not rely solely on our service for important determinations</li>
          <li>Use multiple verification methods when appropriate</li>
        </ul>

        <h2>Jurisdiction and Governing Law</h2>
        <p>
          This waiver shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws principles. Any disputes arising under this waiver shall be subject to the exclusive jurisdiction of the courts in San Francisco County, California.
        </p>

        <h2>Severability</h2>
        <p>
          If any provision of this waiver is held to be unenforceable or invalid, such provision shall be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
        </p>

        <h2>Voluntary Agreement</h2>
        <p>
          You acknowledge that:
        </p>
        <ul>
          <li>You have read and understood this waiver</li>
          <li>You enter into this agreement voluntarily</li>
          <li>You have had the opportunity to seek legal counsel</li>
          <li>This waiver is binding upon your heirs, successors, and assigns</li>
        </ul>

        <h2>Effective Period</h2>
        <p>
          This waiver shall remain in effect for as long as you use the ImageGuard service and for a period of two (2) years thereafter for any claims arising from your use of the service.
        </p>

        <h2>Contact Information</h2>
        <p>
          If you have questions about this Liability Waiver, please contact us at:
        </p>
        
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <p><strong>Legal Department:</strong> legal@imageguard.ai</p>
          <p><strong>Mailing Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        </div>

        <div className="bg-red-900/20 border border-red-700/50 p-4 rounded-lg mt-8">
          <p className="font-semibold text-red-400">Important Notice:</p>
          <p className="text-red-300">
            By continuing to use our service, you acknowledge that you have read, understood, and agree to be bound by this Liability Waiver. If you do not agree to these terms, please discontinue use of the service immediately.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default LiabilityWaiver;
