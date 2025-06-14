import React from 'react';
import { CheckCircle, AlertTriangle, Shield, Eye, Palette, Brain, Share2, Copy, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from "sonner";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface AnalysisResult {
  overallScore: number;
  authenticity: 'authentic' | 'suspicious' | 'manipulated';
  confidence: number;
  details: {
    metadata: {
      score: number;
      findings: string[];
      status: 'pass' | 'warning' | 'fail';
    };
    noisePattern: {
      score: number;
      findings: string[];
      status: 'pass' | 'warning' | 'fail';
    };
    colorDistribution: {
      score: number;
      findings: string[];
      status: 'pass' | 'warning' | 'fail';
    };
    aiGeneration: {
      score: number;
      findings: string[];
      status: 'pass' | 'warning' | 'fail';
    };
  };
}

interface UploadedFile {
  file: File;
  id: string;
  preview: string;
  status: 'pending' | 'analyzing' | 'complete' | 'error';
  progress: number;
  result?: AnalysisResult;
}

interface ResultsSectionProps {
  files: UploadedFile[];
}

const analysisCategories = [
  {
    key: 'metadata' as keyof AnalysisResult['details'],
    icon: Eye,
    title: 'Metadata Analysis',
    description: 'EXIF data and camera information',
    color: 'from-blue-400 to-blue-600'
  },
  {
    key: 'noisePattern' as keyof AnalysisResult['details'],
    icon: Shield,
    title: 'Noise Pattern Detection',
    description: 'Sensor patterns and compression artifacts',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    key: 'colorDistribution' as keyof AnalysisResult['details'],
    icon: Palette,
    title: 'Color Distribution',
    description: 'Color histograms and gradients',
    color: 'from-green-400 to-green-600'
  },
  {
    key: 'aiGeneration' as keyof AnalysisResult['details'],
    icon: Brain,
    title: 'AI Generation Detection',
    description: 'Artificial generation patterns',
    color: 'from-purple-400 to-purple-600'
  }
];

export const ResultsSection: React.FC<ResultsSectionProps> = ({ files }) => {
  const completedFiles = files.filter(f => f.status === 'complete' && f.result);

  if (completedFiles.length === 0) return null;

  const getShareUrl = (result: AnalysisResult) => {
    const jsonResult = JSON.stringify(result);
    return `${window.location.origin}/share?data=${btoa(jsonResult)}`;
  }

  const handleCopyLink = (result: AnalysisResult) => {
    try {
      const shareUrl = getShareUrl(result);
      navigator.clipboard.writeText(shareUrl);
      toast.success("Share link copied to clipboard!");
    } catch (error) {
      console.error("Failed to create share link:", error);
      toast.error("Could not create share link.");
    }
  };
  
  const handleSocialShare = (platform: 'twitter' | 'facebook' | 'linkedin', result: AnalysisResult) => {
    try {
      const shareUrl = getShareUrl(result);
      const text = "Check out my image authenticity report!";
      const title = "Image Authenticity Report";

      let url = '';
      switch (platform) {
        case 'twitter':
          url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
          break;
        case 'facebook':
          url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
          break;
        case 'linkedin':
          url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`;
          break;
      }
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
        console.error(`Failed to share on ${platform}:`, error);
        toast.error(`Could not create share link for ${platform}.`);
    }
  };

  const getStatusColor = (authenticity: string) => {
    switch (authenticity) {
      case 'authentic': return 'text-green-400';
      case 'suspicious': return 'text-yellow-400';
      case 'manipulated': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (authenticity: string) => {
    switch (authenticity) {
      case 'authentic': return CheckCircle;
      case 'suspicious': return AlertTriangle;
      case 'manipulated': return AlertTriangle;
      default: return AlertTriangle;
    }
  };

  const getDetailStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'fail': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          Analysis Results
        </h3>
        <p className="text-gray-300">
          Detailed authenticity analysis for your uploaded images
        </p>
      </div>

      {completedFiles.map((file) => {
        const result = file.result!;
        const StatusIcon = getStatusIcon(result.authenticity);

        return (
          <div key={file.id} className="bg-gray-800/40 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
            {/* File Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={file.preview} 
                    alt={file.file.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{file.file.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {(file.file.size / 1024 / 1024).toFixed(1)} MB
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon" className="border-gray-600 hover:bg-gray-700/50">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700 text-white">
                      <DropdownMenuItem onClick={() => handleCopyLink(result)} className="focus:bg-gray-700">
                        <Copy className="mr-2 h-4 w-4" />
                        <span>Copy Link</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-gray-600" />
                       <DropdownMenuItem onClick={() => handleSocialShare('twitter', result)} className="focus:bg-gray-700">
                        <Twitter className="mr-2 h-4 w-4" />
                        <span>Share on Twitter</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSocialShare('facebook', result)} className="focus:bg-gray-700">
                        <Facebook className="mr-2 h-4 w-4" />
                        <span>Share on Facebook</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleSocialShare('linkedin', result)} className="focus:bg-gray-700">
                        <Linkedin className="mr-2 h-4 w-4" />
                        <span>Share on LinkedIn</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Overall Score */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle 
                        cx="48" cy="48" r="40" 
                        stroke="currentColor" 
                        strokeWidth="8" 
                        fill="none" 
                        className="text-gray-700"
                      />
                      <circle 
                        cx="48" cy="48" r="40" 
                        stroke="currentColor" 
                        strokeWidth="8" 
                        fill="none" 
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - result.overallScore / 100)}`}
                        className={getStatusColor(result.authenticity)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {result.overallScore}%
                      </span>
                    </div>
                  </div>
                  <h5 className="text-white font-semibold mb-1">Overall Score</h5>
                  <p className="text-gray-400 text-sm">Authenticity Rating</p>
                </div>

                <div className="text-center">
                  <StatusIcon className={`w-12 h-12 mx-auto mb-4 ${getStatusColor(result.authenticity)}`} />
                  <h5 className="text-white font-semibold mb-1 capitalize">{result.authenticity}</h5>
                  <p className="text-gray-400 text-sm">Status</p>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {result.confidence}%
                  </div>
                  <h5 className="text-white font-semibold mb-1">Confidence</h5>
                  <p className="text-gray-400 text-sm">Analysis Certainty</p>
                </div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="p-6">
              <h5 className="text-xl font-semibold text-white mb-6">Detailed Analysis</h5>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {analysisCategories.map((category) => {
                  const Icon = category.icon;
                  const detail = result.details[category.key];
                  
                  return (
                    <div key={category.key} className="bg-gray-700/40 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h6 className="text-white font-medium">{category.title}</h6>
                            <p className="text-gray-400 text-xs">{category.description}</p>
                          </div>
                        </div>
                        <div className={`font-bold ${getDetailStatusColor(detail.status)}`}>
                          {detail.score}%
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {detail.findings.map((finding, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              detail.status === 'pass' ? 'bg-green-400' :
                              detail.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                            }`} />
                            <span className="text-gray-300 text-sm">{finding}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
