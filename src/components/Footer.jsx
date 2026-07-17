export default function Footer() {
  return (
    <footer className="bg-[#010E1B] w-full text-white flex flex-col pb-4 border-t border-[#55B4F3]/20">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
        {/* Logo / Title */}
        <img src="src/assets/logo.png" alt="MLSA UET Taxila" className="w-20 h-20  " />

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
          <FooterLink href="#">LinkedIn</FooterLink>
        </div>
      </div>
      {/* Divider */}
      <div>
        <div className="w-full h-px bg-[#55B4F3]/20 mb-6"></div>

        {/* Copyright */}
        <p className="text-[#E1EFFD]/60 text-sm text-center">
          © {new Date().getFullYear()} MLSA UET Taxila. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-[#E1EFFD]/80 hover:text-[#55B4F3] transition duration-200 font-medium"
    >
      {children}
    </a>
  );
}
