
import React, { useState, useCallback } from 'react';
import { FileUpload } from '../components/FileUpload';
import { ImagePreview } from '../components/ImagePreview';
import { AnalysisSection } from '../components/AnalysisSection';
import { FeaturesSection } from '../components/FeaturesSection';

interface UploadedFile {
  file: File;
  id: string;
  preview: string;
  status: 'pending' | 'analyzing' | 'complete' | 'error';
  progress: number;
}

const Index = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFilesUploaded = useCallback((files: File[]) => {
    const newFiles: UploadedFile[] = files.map(file => ({
      file,
      id: crypto.randomUUID(),
      preview: URL.createObjectURL(file),
      status: 'pending',
      progress: 0
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
  }, []);

  const startAnalysis = useCallback(() => {
    setIsAnalyzing(true);
    setUploadedFiles(prev => 
      prev.map(file => ({ ...file, status: 'analyzing' as const }))
    );

    // Simulate analysis progress
    uploadedFiles.forEach((file, index) => {
      setTimeout(() => {
        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.random() * 15;
          if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setUploadedFiles(prev => 
              prev.map(f => 
                f.id === file.id 
                  ? { ...f, status: 'complete', progress: 100 }
                  : f
              )
            );
            // Check if all files are complete
            setTimeout(() => {
              setUploadedFiles(prev => {
                const allComplete = prev.every(f => f.status === 'complete');
                if (allComplete) {
                  setIsAnalyzing(false);
                }
                return prev;
              });
            }, 500);
          } else {
            setUploadedFiles(prev => 
              prev.map(f => 
                f.id === file.id 
                  ? { ...f, progress }
                  : f
              )
            );
          }
        }, 200);
      }, index * 500);
    });
  }, [uploadedFiles]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <h1 className="text-xl font-bold text-white">ImageGuard</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            AI Image Authenticity Detector
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Advanced AI-powered analysis to detect manipulated images, deepfakes, and AI-generated content with precision and speed.
          </p>
          
          <FileUpload onFilesUploaded={handleFilesUploaded} />
        </div>
      </section>

      {/* Image Preview Section */}
      {uploadedFiles.length > 0 && (
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <ImagePreview 
              files={uploadedFiles} 
              onStartAnalysis={startAnalysis}
              isAnalyzing={isAnalyzing}
            />
          </div>
        </section>
      )}

      {/* Analysis Section */}
      {isAnalyzing && (
        <section className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <AnalysisSection files={uploadedFiles} />
          </div>
        </section>
      )}

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 ImageGuard. Advanced AI image analysis technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
