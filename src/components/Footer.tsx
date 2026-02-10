import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-heading font-bold text-lg">A</span>
              </div>
              <div>
                <div className="font-heading font-bold text-sm">ABDM</div>
                <div className="text-xs opacity-80">Scan & Record Share</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering patients to share health records digitally with healthcare providers through a simple QR code scan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider opacity-90">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/citizens" className="opacity-80 hover:opacity-100 transition-opacity">For Citizens</Link></li>
              <li><Link to="/integrators" className="opacity-80 hover:opacity-100 transition-opacity">For Integrators</Link></li>
              <li><Link to="/policy" className="opacity-80 hover:opacity-100 transition-opacity">For Policy Makers</Link></li>
              <li><Link to="/resources" className="opacity-80 hover:opacity-100 transition-opacity">Resources</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider opacity-90">Important Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">National Health Authority</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">ABDM Main Website</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">ABDM Sandbox</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Health Data Management Policy</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Grievance Portal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 uppercase tracking-wider opacity-90">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>National Health Authority</li>
              <li>9th Floor, Tower-l, Jeevan Bharati Building</li>
              <li>Connaught Place, New Delhi - 110001</li>
              <li className="pt-2">
                <a href="mailto:abdm@nha.gov.in" className="hover:opacity-100 transition-opacity">abdm@nha.gov.in</a>
              </li>
              <li>Toll-free: 14477</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs opacity-70">
          <p>© {new Date().getFullYear()} National Health Authority, Government of India. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100">Terms of Use</a>
            <a href="#" className="hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:opacity-100">Accessibility</a>
            <a href="#" className="hover:opacity-100">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
