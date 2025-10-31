import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sumit093', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sumit-haral-687855272/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sumitharal093@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-300 flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>by Sumit</span>
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
