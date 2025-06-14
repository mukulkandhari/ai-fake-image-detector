
import React from 'react';
import { X, Play, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface UploadedFile {
  file: File;
  id: string;
  preview: string;
  status: 'pending' | 'analyzing' | 'complete' | 'error';
  progress: number;
}

interface ImagePreviewProps {
  files: UploadedFile[];
  onStartAnalysis: () => void;
  isAnalyzing: boolean;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  files, 
  onStartAnalysis, 
  isAnalyzing 
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-white">
          Uploaded Images ({files.length})
        </h3>
        
        {!isAnalyzing && files.some(f => f.status === 'pending') && (
          <Button 
            onClick={onStartAnalysis}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2"
          >
            <Play className="w-4 h-4 mr-2" />
            Start Analysis
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {files.map((file) => (
          <div key={file.id} className="group relative">
            {/* Glass morphism card */}
            <div className="relative bg-gray-800/40 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={file.preview}
                  alt={file.file.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Status overlay */}
                {file.status !== 'pending' && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    {file.status === 'analyzing' && (
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-2" />
                        <span className="text-white text-sm">Analyzing...</span>
                      </div>
                    )}
                    {file.status === 'complete' && (
                      <CheckCircle className="w-12 h-12 text-green-400" />
                    )}
                  </div>
                )}
              </div>

              {/* File info */}
              <div className="p-4">
                <h4 className="text-white font-medium truncate mb-2">
                  {file.file.name}
                </h4>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <span>{(file.file.size / 1024 / 1024).toFixed(1)} MB</span>
                  <span className="capitalize">{file.file.type.split('/')[1]}</span>
                </div>

                {/* Progress bar */}
                {file.status === 'analyzing' && (
                  <div className="space-y-2">
                    <Progress value={file.progress} className="h-2" />
                    <span className="text-xs text-gray-400">
                      {Math.round(file.progress)}% complete
                    </span>
                  </div>
                )}

                {/* Status indicator */}
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    file.status === 'pending' ? 'bg-gray-400' :
                    file.status === 'analyzing' ? 'bg-blue-400 animate-pulse' :
                    file.status === 'complete' ? 'bg-green-400' : 'bg-red-400'
                  }`} />
                  <span className="text-xs text-gray-400 capitalize">
                    {file.status === 'pending' ? 'Ready for analysis' :
                     file.status === 'analyzing' ? 'Analyzing image' :
                     file.status === 'complete' ? 'Analysis complete' : 'Error occurred'}
                  </span>
                </div>
              </div>

              {/* Remove button */}
              <button className="absolute top-2 right-2 p-1 bg-gray-900/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <X className="w-4 h-4 text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
