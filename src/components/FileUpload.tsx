
import React, { useCallback, useState } from 'react';
import { Upload, Image, AlertCircle } from 'lucide-react';

interface FileUploadProps {
  onFilesUploaded: (files: File[]) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFilesUploaded }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      setError('Please upload JPG, PNG, or WEBP images only.');
      return false;
    }

    if (file.size > maxSize) {
      setError('File size must be less than 10MB.');
      return false;
    }

    return true;
  };

  const handleFiles = useCallback((files: FileList) => {
    setError(null);
    const fileArray = Array.from(files);
    const validFiles = fileArray.filter(validateFile);
    
    if (validFiles.length > 0) {
      onFilesUploaded(validFiles);
    }
  }, [onFilesUploaded]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  }, [handleFiles]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`
          relative group cursor-pointer transition-all duration-300 ease-out
          ${isDragging 
            ? 'transform scale-105' 
            : 'hover:transform hover:scale-102'
          }
        `}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {/* Glass morphism background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-white/10" />
        
        {/* Animated border */}
        <div className={`
          absolute inset-0 rounded-2xl transition-all duration-300
          ${isDragging 
            ? 'bg-gradient-to-r from-blue-400 to-cyan-400 p-0.5' 
            : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-0.5 group-hover:from-blue-400/40 group-hover:to-cyan-400/40'
          }
        `}>
          <div className="w-full h-full bg-gray-900/80 rounded-2xl" />
        </div>

        {/* Content */}
        <div className="relative p-12 text-center">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className={`
            mb-6 transition-all duration-300
            ${isDragging ? 'scale-110 text-blue-400' : 'text-gray-400 group-hover:text-blue-400'}
          `}>
            <Upload className="w-16 h-16 mx-auto mb-4" />
            <Image className="w-12 h-12 mx-auto opacity-60" />
          </div>
          
          <h3 className="text-2xl font-semibold text-white mb-4">
            {isDragging ? 'Drop your images here' : 'Upload Images for Analysis'}
          </h3>
          
          <p className="text-gray-300 mb-6">
            Drag and drop your images or click to browse
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="px-3 py-1 bg-gray-800/50 rounded-full">JPG</span>
            <span className="px-3 py-1 bg-gray-800/50 rounded-full">PNG</span>
            <span className="px-3 py-1 bg-gray-800/50 rounded-full">WEBP</span>
            <span className="px-3 py-1 bg-gray-800/50 rounded-full">Max 10MB</span>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 text-red-400" />
          <span className="text-red-300">{error}</span>
        </div>
      )}
    </div>
  );
};
