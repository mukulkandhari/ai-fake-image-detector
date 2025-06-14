
import React from 'react';
import PageLayout from '../components/PageLayout';

const HowToUse = () => {
  return (
    <PageLayout title="How to Use FakePicDetector">
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Learn how to use FakePicDetector's AI-powered image authenticity detection tools to analyze and verify digital images.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
            <p className="text-gray-300 leading-relaxed">
              FakePicDetector makes it easy to detect AI-generated content, image manipulation, and verify authenticity. Our advanced algorithms analyze multiple aspects of your images to provide comprehensive results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Guide</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">1. Upload Your Image</h3>
                <p className="text-gray-300 mb-3">There are several ways to add an image for analysis:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-white">Drag & Drop:</strong> Simply drag your image file from your computer and drop it onto the upload area</li>
                  <li><strong className="text-white">Click to Browse:</strong> Click the upload area to open your file browser and select an image</li>
                  <li><strong className="text-white">Paste from Clipboard:</strong> Copy an image and paste it directly into the upload area</li>
                </ul>
                
                <div className="bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg my-4">
                  <p className="font-semibold text-blue-400 mb-2">Supported Formats:</p>
                  <p className="text-blue-300">JPEG, PNG, WebP, GIF, BMP, TIFF (up to 10MB)</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">2. Image Preview</h3>
                <p className="text-gray-300 mb-3">Once uploaded, you'll see a preview of your image along with basic information:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>File name and size</li>
                  <li>Image dimensions</li>
                  <li>File format</li>
                  <li>Upload timestamp</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">3. Start Analysis</h3>
                <p className="text-gray-300 mb-3">Click the "Analyze Image" button to begin the comprehensive analysis process. Our AI will examine:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-white">Metadata Analysis:</strong> EXIF data, camera settings, and modification history</li>
                  <li><strong className="text-white">Noise Pattern Analysis:</strong> Digital sensor noise patterns unique to cameras</li>
                  <li><strong className="text-white">Color Distribution:</strong> Unusual color patterns that may indicate manipulation</li>
                  <li><strong className="text-white">AI Generation Detection:</strong> Signs of AI-generated content using advanced neural networks</li>
                  <li><strong className="text-white">Compression Artifacts:</strong> Evidence of multiple saves or editing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">4. Review Results</h3>
                <p className="text-gray-300 mb-3">After analysis, you'll receive detailed results including:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-white">Overall Authenticity Score:</strong> A percentage indicating how likely the image is authentic</li>
                  <li><strong className="text-white">Confidence Level:</strong> How certain our AI is about the analysis</li>
                  <li><strong className="text-white">Category Breakdown:</strong> Individual scores for each analysis type</li>
                  <li><strong className="text-white">Detailed Findings:</strong> Specific indicators found during analysis</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Understanding Your Results</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Authenticity Scores</h3>
                <div className="space-y-4">
                  <div className="bg-green-900/20 border border-green-700/50 p-4 rounded-lg">
                    <p className="font-semibold text-green-400 mb-2">High Authenticity (80-100%)</p>
                    <p className="text-green-300">Strong indicators suggest the image is likely authentic</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-700/50 p-4 rounded-lg">
                    <p className="font-semibold text-yellow-400 mb-2">Moderate Authenticity (50-79%)</p>
                    <p className="text-yellow-300">Mixed signals - may require additional verification</p>
                  </div>
                  <div className="bg-red-900/20 border border-red-700/50 p-4 rounded-lg">
                    <p className="font-semibold text-red-400 mb-2">Low Authenticity (0-49%)</p>
                    <p className="text-red-300">Strong indicators of manipulation or AI generation</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Confidence Levels</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong className="text-white">Very High:</strong> Analysis is highly reliable based on clear indicators</li>
                  <li><strong className="text-white">High:</strong> Good confidence in results with solid evidence</li>
                  <li><strong className="text-white">Medium:</strong> Reasonable confidence but may benefit from additional analysis</li>
                  <li><strong className="text-white">Low:</strong> Limited confidence due to image quality or unclear indicators</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Best Practices</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-3">For Optimal Results</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Use high-quality, uncompressed images when possible</li>
                  <li>Avoid heavily processed or filtered images</li>
                  <li>Consider the source and context of the image</li>
                  <li>Use multiple verification methods for critical decisions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">What to Keep in Mind</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>No AI detection is 100% accurate - results should be considered as guidance</li>
                  <li>Sophisticated manipulation techniques may evade detection</li>
                  <li>Image quality and format can affect analysis accuracy</li>
                  <li>Results should be combined with other verification methods for important decisions</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Privacy & Security</h2>
            <p className="text-gray-300 mb-4">Your privacy is our priority:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>All image analysis is performed locally in your browser</li>
              <li>Images are never uploaded to our servers</li>
              <li>No personal data is collected during analysis</li>
              <li>Analysis results are stored temporarily in your browser only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Troubleshooting</h2>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Common Issues</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700">
                  <p className="font-semibold text-white mb-2">Image won't upload:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 text-sm">
                    <li>Check file size is under 10MB</li>
                    <li>Ensure file format is supported</li>
                    <li>Try refreshing the page</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700">
                  <p className="font-semibold text-white mb-2">Analysis taking too long:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 text-sm">
                    <li>Large images may take longer to process</li>
                    <li>Ensure stable internet connection</li>
                    <li>Close other browser tabs to free up memory</li>
                  </ul>
                </div>
                
                <div className="bg-gray-900/30 p-4 rounded-lg border border-gray-700">
                  <p className="font-semibold text-white mb-2">Unexpected results:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 text-sm">
                    <li>Consider image quality and compression</li>
                    <li>Try analyzing the original, unedited image</li>
                    <li>Cross-reference with other verification tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-4">
              If you need additional support or have questions about using FakePicDetector:
            </p>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <p className="text-white mb-2"><strong>Support Email:</strong> support@fakepicdetector.online</p>
              <p className="text-white mb-2"><strong>Response Time:</strong> Within 24 hours</p>
              <p className="text-white"><strong>Documentation:</strong> Visit our blog for detailed guides and tutorials</p>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default HowToUse;
