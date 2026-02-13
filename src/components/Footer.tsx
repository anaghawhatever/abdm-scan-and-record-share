import { Link } from "react-router-dom";
import nhaLogo from "@/assets/nha-logo.jpg";
import abdmLogo from "@/assets/abdm-logo.svg";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-primary text-primary-foreground">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img src={nhaLogo} alt="NHA" className="h-8 w-auto brightness-0 invert" />
                <img src={abdmLogo} alt="ABDM" className="h-8 w-auto brightness-0 invert" />
              </div>
              <p className="text-xs opacity-75 leading-relaxed">
                Empowering patients to share health records digitally with healthcare providers through a simple QR code scan.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-xs mb-3 uppercase tracking-wider opacity-80">Quick Links</h4>
              <ul className="space-y-1.5 text-xs">
                <li><Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Home</Link></li>
                <li><Link to="/citizens" className="opacity-70 hover:opacity-100 transition-opacity">For Citizens</Link></li>
                <li><Link to="/integrators" className="opacity-70 hover:opacity-100 transition-opacity">For Solution Companies</Link></li>
                <li><Link to="/policy" className="opacity-70 hover:opacity-100 transition-opacity">For States & UTs</Link></li>
                <li><Link to="/resources" className="opacity-70 hover:opacity-100 transition-opacity">Resources</Link></li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="font-heading font-semibold text-xs mb-3 uppercase tracking-wider opacity-80">Important Links</h4>
              <ul className="space-y-1.5 text-xs">
                <li><a href="https://nha.gov.in" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">National Health Authority</a></li>
                <li><a href="https://abdm.gov.in" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">ABDM Website</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">ABDM Sandbox</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Health Data Management Policy</a></li>
                <li><a href="https://grievance.abdm.gov.in/grievance/v3/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">Grievance Portal</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-xs mb-3 uppercase tracking-wider opacity-80">Contact</h4>
              <ul className="space-y-1.5 text-xs opacity-75">
                <li>National Health Authority</li>
                <li>9th Floor, Tower-l, Jeevan Bharati Building</li>
                <li>Connaught Place, New Delhi - 110001</li>
                <li className="pt-1"><a href="mailto:abdm@nha.gov.in" className="hover:opacity-100">abdm@nha.gov.in</a></li>
                <li>Toll-free: 14477</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer — matching ABDM website style */}
      <div className="bg-foreground text-background">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* QR Codes */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-background rounded flex items-center justify-center mb-1">
                  <span className="text-foreground text-[9px] font-medium text-center leading-tight px-1">[QR Code Placeholder]</span>
                </div>
                <span className="text-[9px] opacity-60">Download ABHA App</span>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-background rounded flex items-center justify-center mb-1">
                  <span className="text-foreground text-[9px] font-medium text-center leading-tight px-1">[QR Code Placeholder]</span>
                </div>
                <span className="text-[9px] opacity-60">Create ABHA</span>
              </div>
            </div>

            {/* App download badges */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs font-medium opacity-80">Download ABHA App</p>
              <div className="flex gap-2">
                <a href="#" className="px-3 py-1.5 border border-background/30 rounded text-[10px] font-medium hover:bg-background/10 transition-colors">
                  Google Play
                </a>
                <a href="#" className="px-3 py-1.5 border border-background/30 rounded text-[10px] font-medium hover:bg-background/10 transition-colors">
                  App Store
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-[10px] opacity-60">
                © {new Date().getFullYear()} National Health Authority
              </p>
              <p className="text-[10px] opacity-60">
                Ministry of Health & Family Welfare, Government of India
              </p>
              <div className="flex gap-3 mt-1 justify-center md:justify-end">
                <a href="#" className="text-[10px] opacity-50 hover:opacity-100">Terms of Use</a>
                <a href="#" className="text-[10px] opacity-50 hover:opacity-100">Privacy Policy</a>
                <a href="#" className="text-[10px] opacity-50 hover:opacity-100">Accessibility</a>
                <a href="#" className="text-[10px] opacity-50 hover:opacity-100">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
