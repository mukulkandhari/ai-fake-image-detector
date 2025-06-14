
import React from 'react';
import { Brain, Search, Layers, Palette } from 'lucide-react';

interface UploadedFile {
  file: File;
  id: string;
  preview: string;
  status: 'pending' | 'analyzing' | 'complete' | 'error';
  progress: number;
}

interface AnalysisSectionProps {
  files: UploadedFile[];
}

const analysisSteps = [
  {
    icon: Search,
    title: 'Metadata Analysis',
    description: 'Extracting EXIF data and camera information',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Layers,
    title: 'Noise Pattern Detection',
    description: 'Analyzing sensor patterns and compression artifacts',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    icon: Palette,
    title: 'Color Distribution',
    description: 'Examining color histograms and gradients',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Brain,
    title: 'AI Generation Detection',
    description: 'Detecting artificial generation patterns',
    color: 'from-purple-400 to-purple-600'
  }
];

export const AnalysisSection: React.FC<AnalysisSectionProps> = ({ files }) => {
  const activeFiles = files.filter(f => f.status === 'analyzing' || f.status === 'complete');

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          Deep Analysis in Progress
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our advanced AI algorithms are examining your images across multiple dimensions 
          to detect any signs of manipulation or artificial generation.
        </p>
      </div>

      {/* Analysis Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analysisSteps.map((step, index) => {
          const Icon = step.icon;
          
          return (
            <div key={index} className="relative group">
              {/* Glass morphism card */}
              <div className="bg-gray-800/40 backdrop-blur-xl rounded-xl border border-white/10 p-6 transition-all duration-300 hover:transform hover:scale-105">
                {/* Animated icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-white font-semibold mb-2">
                  {step.title}
                </h4>
                
                <p className="text-gray-400 text-sm mb-4">
                  {step.description}
                </p>

                {/* Progress indicator */}
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-xs text-blue-400">Processing...</span>
                </div>
              </div>

              {/* Connection line */}
              {index < analysisSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-600 to-transparent" />
              )}
            </div>
          );
        })}
      </div>

      {/* Real-time stats */}
      <div className="bg-gray-800/40 backdrop-blur-xl rounded-xl border border-white/10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {activeFiles.length}
            </div>
            <div className="text-gray-400">Images Processing</div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">
              {files.filter(f => f.status === 'complete').length}
            </div>
            <div className="text-gray-400">Analysis Complete</div>
          </div>
          
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {Math.round(files.reduce((acc, f) => acc + f.progress, 0) / files.length) || 0}%
            </div>
            <div className="text-gray-400">Overall Progress</div>
          </div>
        </div>
      </div>
    </div>
  );
};
