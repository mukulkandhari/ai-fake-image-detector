
import React from 'react';
import { Shield, Zap, Eye, Download, Users, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Advanced Detection',
    description: 'Multi-layered analysis using metadata, noise patterns, and AI generation detection',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Real-time processing with Web Workers for non-blocking analysis',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Eye,
    title: 'Visual Analysis',
    description: 'Interactive heatmaps and error level analysis for detailed inspection',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Download,
    title: 'Detailed Reports',
    description: 'Export comprehensive analysis reports in PDF or JSON format',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: Users,
    title: 'Batch Processing',
    description: 'Analyze multiple images simultaneously with progress tracking',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    icon: Globe,
    title: 'Privacy First',
    description: 'All processing happens locally in your browser - no data sent to servers',
    color: 'from-red-400 to-pink-500'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leverage state-of-the-art algorithms and machine learning techniques to detect 
            image manipulation with unprecedented accuracy and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glass morphism card */}
                <div className="h-full bg-gray-800/40 backdrop-blur-xl rounded-xl border border-white/10 p-8 transition-all duration-300 hover:transform hover:scale-105 hover:border-white/20">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`} />
              </div>
            );
          })}
        </div>

        {/* Tech stack showcase */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Powered by Advanced Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Machine Learning', 'Computer Vision', 'Signal Processing', 'Metadata Analysis', 'Web Workers', 'Canvas API'].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800/60 backdrop-blur-sm rounded-full text-gray-300 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
