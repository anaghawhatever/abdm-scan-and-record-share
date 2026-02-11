import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-heading font-bold text-xs">NHA</span>
              </div>
              <div>
                <div className="font-heading font-bold text-xs">ABDM</div>
                <div className="text-[10px] opacity-70">Scan & Record Share</div>
              </div>
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
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">National Health Authority</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">ABDM Website</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">ABDM Sandbox</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Health Data Management Policy</a></li>
              <li><a href="#" className="opacity-70 hover:opacity-100 transition-opacity">Grievance Portal</a></li>
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

        <div className="border-t border-primary-foreground/20 mt-8 pt-4 flex flex-col md:flex-row justify-between gap-3 text-[10px] opacity-60">
          <p>© {new Date().getFullYear()} National Health Authority, Government of India. All rights reserved.</p>
          <div className="flex gap-3">
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
