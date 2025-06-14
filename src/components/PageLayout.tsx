
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <h1 className="text-xl font-bold text-white">ImageGuard</h1>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/how-to-use" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                  How To Use
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors px-4 py-2">
                  Blog
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-300 hover:text-white bg-transparent data-[state=open]:bg-gray-800/50">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-2 bg-gray-800 border border-gray-700 z-50">
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/privacy-policy" 
                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/terms-conditions" 
                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                      >
                        Terms & Conditions
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/disclaimer" 
                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                      >
                        Disclaimer
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/data-storage-policy" 
                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                      >
                        Data Storage Policy
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/liability-waiver" 
                        className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
                      >
                        Liability Waiver
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            {title}
          </h1>
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">ImageGuard</h3>
              <p className="text-gray-400 text-sm">Advanced AI image authenticity detection</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy-policy" className="block text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                <Link to="/terms-conditions" className="block text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</Link>
                <Link to="/disclaimer" className="block text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</Link>
                <Link to="/liability-waiver" className="block text-gray-400 hover:text-white text-sm transition-colors">Liability Waiver</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <Link to="/how-to-use" className="block text-gray-400 hover:text-white text-sm transition-colors">How To Use</Link>
                <Link to="/blog" className="block text-gray-400 hover:text-white text-sm transition-colors">Blog</Link>
                <Link to="/data-storage-policy" className="block text-gray-400 hover:text-white text-sm transition-colors">Data Storage</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">support@imageguard.ai</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 ImageGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
