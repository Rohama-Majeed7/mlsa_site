export default function Footer() {
  return (
    <footer className="bg-[#010E1B] text-white py-10 mt-12 border-t border-[#55B4F3]/20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Logo / Title */}
        <h2 className="text-2xl font-bold tracking-wide mb-2 text-[#55B4F3]">
          MLSA UET Taxila
        </h2>

        {/* Subtitle */}
        <p className="text-[#E1EFFD]/80 text-sm mb-8 max-w-xl mx-auto">
          Empowering the student tech community with Microsoft Learn initiatives,
          events, and opportunities.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-8">
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
          <FooterLink href="#">LinkedIn</FooterLink>
          <FooterLink href="#">GitHub</FooterLink>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#55B4F3]/20 mb-6"></div>

        {/* Copyright */}
        <p className="text-[#E1EFFD]/60 text-sm">
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
