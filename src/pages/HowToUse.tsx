
import React from 'react';
import PageLayout from '../components/PageLayout';

const HowToUse = () => {
  return (
    <PageLayout title="How to Use ImageGuard">
      <div className="prose prose-invert max-w-none text-gray-300">
        <p className="text-lg text-gray-300 mb-8">
          Learn how to use ImageGuard's AI-powered image authenticity detection tools to analyze and verify digital images.
        </p>

        <h2>Getting Started</h2>
        <p>
          ImageGuard makes it easy to detect AI-generated content, image manipulation, and verify authenticity. Our advanced algorithms analyze multiple aspects of your images to provide comprehensive results.
        </p>

        <h2>Step-by-Step Guide</h2>
        
        <h3>1. Upload Your Image</h3>
        <p>There are several ways to add an image for analysis:</p>
        <ul>
          <li><strong>Drag & Drop:</strong> Simply drag your image file from your computer and drop it onto the upload area</li>
          <li><strong>Click to Browse:</strong> Click the upload area to open your file browser and select an image</li>
          <li><strong>Paste from Clipboard:</strong> Copy an image and paste it directly into the upload area</li>
        </ul>
        
        <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg my-6">
          <p className="font-semibold text-blue-400">Supported Formats:</p>
          <p className="text-blue-300">JPEG, PNG, WebP, GIF, BMP, TIFF (up to 10MB)</p>
        </div>

        <h3>2. Image Preview</h3>
        <p>
          Once uploaded, you'll see a preview of your image along with basic information:
        </p>
        <ul>
          <li>File name and size</li>
          <li>Image dimensions</li>
          <li>File format</li>
          <li>Upload timestamp</li>
        </ul>

        <h3>3. Start Analysis</h3>
        <p>
          Click the "Analyze Image" button to begin the comprehensive analysis process. Our AI will examine:
        </p>
        <ul>
          <li><strong>Metadata Analysis:</strong> EXIF data, camera settings, and modification history</li>
          <li><strong>Noise Pattern Analysis:</strong> Digital sensor noise patterns unique to cameras</li>
          <li><strong>Color Distribution:</strong> Unusual color patterns that may indicate manipulation</li>
          <li><strong>AI Generation Detection:</strong> Signs of AI-generated content using advanced neural networks</li>
          <li><strong>Compression Artifacts:</strong> Evidence of multiple saves or editing</li>
        </ul>

        <h3>4. Review Results</h3>
        <p>
          After analysis, you'll receive detailed results including:
        </p>
        <ul>
          <li><strong>Overall Authenticity Score:</strong> A percentage indicating how likely the image is authentic</li>
          <li><strong>Confidence Level:</strong> How certain our AI is about the analysis</li>
          <li><strong>Category Breakdown:</strong> Individual scores for each analysis type</li>
          <li><strong>Detailed Findings:</strong> Specific indicators found during analysis</li>
        </ul>

        <h2>Understanding Your Results</h2>
        
        <h3>Authenticity Scores</h3>
        <div className="space-y-4 my-6">
          <div className="bg-green-900/20 border border-green-700/50 p-4 rounded-lg">
            <p className="font-semibold text-green-400">High Authenticity (80-100%)</p>
            <p className="text-green-300">Strong indicators suggest the image is likely authentic</p>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg">
            <p className="font-semibold text-yellow-400">Moderate Authenticity (50-79%)</p>
            <p className="text-yellow-300">Mixed signals - may require additional verification</p>
          </div>
          <div className="bg-red-900/20 border border-red-700/50 p-4 rounded-lg">
            <p className="font-semibold text-red-400">Low Authenticity (0-49%)</p>
            <p className="text-red-300">Strong indicators of manipulation or AI generation</p>
          </div>
        </div>

        <h3>Confidence Levels</h3>
        <ul>
          <li><strong>Very High:</strong> Analysis is highly reliable based on clear indicators</li>
          <li><strong>High:</strong> Good confidence in results with solid evidence</li>
          <li><strong>Medium:</strong> Reasonable confidence but may benefit from additional analysis</li>
          <li><strong>Low:</strong> Limited confidence due to image quality or unclear indicators</li>
        </ul>

        <h2>Best Practices</h2>
        
        <h3>For Optimal Results</h3>
        <ul>
          <li>Use high-quality, uncompressed images when possible</li>
          <li>Avoid heavily processed or filtered images</li>
          <li>Consider the source and context of the image</li>
          <li>Use multiple verification methods for critical decisions</li>
        </ul>

        <h3>What to Keep in Mind</h3>
        <ul>
          <li>No AI detection is 100% accurate - results should be considered as guidance</li>
          <li>Sophisticated manipulation techniques may evade detection</li>
          <li>Image quality and format can affect analysis accuracy</li>
          <li>Results should be combined with other verification methods for important decisions</li>
        </ul>

        <h2>Privacy & Security</h2>
        <p>
          Your privacy is our priority:
        </p>
        <ul>
          <li>All image analysis is performed locally in your browser</li>
          <li>Images are never uploaded to our servers</li>
          <li>No personal data is collected during analysis</li>
          <li>Analysis results are stored temporarily in your browser only</li>
        </ul>

        <h2>Troubleshooting</h2>
        
        <h3>Common Issues</h3>
        <div className="space-y-4 my-6">
          <div>
            <p className="font-semibold text-white">Image won't upload:</p>
            <ul className="mt-2">
              <li>Check file size is under 10MB</li>
              <li>Ensure file format is supported</li>
              <li>Try refreshing the page</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Analysis taking too long:</p>
            <ul className="mt-2">
              <li>Large images may take longer to process</li>
              <li>Ensure stable internet connection</li>
              <li>Close other browser tabs to free up memory</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Unexpected results:</p>
            <ul className="mt-2">
              <li>Consider image quality and compression</li>
              <li>Try analyzing the original, unedited image</li>
              <li>Cross-reference with other verification tools</li>
            </ul>
          </div>
        </div>

        <h2>Need Help?</h2>
        <p>
          If you need additional support or have questions about using ImageGuard:
        </p>
        
        <div className="bg-gray-900/50 p-4 rounded-lg">
          <p><strong>Support Email:</strong> support@imageguard.ai</p>
          <p><strong>Response Time:</strong> Within 24 hours</p>
          <p><strong>Documentation:</strong> Visit our blog for detailed guides and tutorials</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default HowToUse;
