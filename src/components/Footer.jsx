export default function Footer() {
  return (
    <footer className="bg-[#010E1B] flex flex-col text-white pb-4 border-t border-[#55B4F3]/20">
      <div className="w-max-7xl p-3 flex justify-between sm:flex-row flex-col gap-2 items-center ">
        {/* Logo / Title */}
        <img src="src/assets/logo.png" alt="MLSA UET Taxila" className="w-24 h-24  " />

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
