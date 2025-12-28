import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              Maxino
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Professional AC services you can trust. Installation, repair, and maintenance by certified experts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/booking" className="hover:text-primary transition-colors">Book Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-5 w-5 text-primary" />
                <span>support@maxino.com</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Tech City, India</span>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Maxino AC Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
