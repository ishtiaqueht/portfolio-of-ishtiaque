
import { ArrowUp } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
      </div>
      <p>© 2025 Ishtiaque. All rights reserved.</p>
      
    </section>
    </div>
  );
};

export default Footer;
