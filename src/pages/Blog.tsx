
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const blogPosts = [
  {
    slug: 'understanding-deepfakes-detection',
    title: 'Understanding Deepfakes: How AI Detection Technology Works',
    excerpt: 'Explore the fascinating world of deepfake detection and learn how artificial intelligence can identify manipulated images with unprecedented accuracy.',
    date: '2024-12-10',
    readTime: '8 min read',
    category: 'AI Detection'
  },
  {
    slug: 'metadata-analysis-forensics',
    title: 'The Hidden Truth: How Metadata Analysis Reveals Image Manipulation',
    excerpt: 'Discover how EXIF data and digital forensics can uncover the secrets hidden within image files, revealing signs of manipulation.',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Digital Forensics'
  },
  {
    slug: 'social-media-fake-images',
    title: 'Combating Fake Images on Social Media: A Growing Challenge',
    excerpt: 'Learn about the rise of manipulated images on social platforms and how advanced detection tools are fighting back.',
    date: '2024-12-05',
    readTime: '7 min read',
    category: 'Social Media'
  },
  {
    slug: 'noise-pattern-analysis',
    title: 'Noise Pattern Analysis: The Science Behind Authentic Image Detection',
    excerpt: 'Dive deep into the technical aspects of how sensor noise patterns help distinguish between authentic and artificially generated images.',
    date: '2024-12-03',
    readTime: '9 min read',
    category: 'Technical Analysis'
  },
  {
    slug: 'journalism-image-verification',
    title: 'Protecting Journalism: Image Verification in the Digital Age',
    excerpt: 'Explore how news organizations and journalists use AI-powered tools to verify image authenticity and maintain credibility.',
    date: '2024-12-01',
    readTime: '5 min read',
    category: 'Journalism'
  },
  {
    slug: 'future-image-authentication',
    title: 'The Future of Image Authentication: Blockchain and Beyond',
    excerpt: 'Look ahead at emerging technologies that promise to revolutionize how we verify and authenticate digital images.',
    date: '2024-11-28',
    readTime: '6 min read',
    category: 'Future Tech'
  }
];

const Blog = () => {
  return (
    <PageLayout title="AI Image Detection Blog">
      <div className="space-y-8">
        <div className="text-center">
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Stay informed about the latest developments in AI image detection, digital forensics, and authentication technologies. Learn how to protect yourself from fake images and understand the technology behind image verification.
          </p>
        </div>
        
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/30 hover:border-blue-400/30 transition-all duration-300 group">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">{post.date}</span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                <Link to={`/blog/${post.slug}`} className="block">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link 
                to={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group"
              >
                Read Full Article
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            Want to stay updated? Follow us for the latest insights on image authenticity and AI detection technology.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
