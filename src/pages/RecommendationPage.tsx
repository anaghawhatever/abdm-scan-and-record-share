import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Lightbulb, ArrowRight, QrCode, Share2, Smartphone } from "lucide-react";

const RecommendationPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-10 md:py-14">
        <div className="container text-primary-foreground">
          <p className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wide">A Recommendation</p>
          <h1 className="text-2xl md:text-3xl font-heading font-extrabold max-w-2xl leading-tight">
            What Do We Name This Use Case?
          </h1>
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <Lightbulb className="w-8 h-8 text-accent shrink-0 mt-1" />
              <div>
                <h2 className="font-heading font-bold text-lg mb-2">The Naming Challenge</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The current name <strong>"Scan & Record Share"</strong> is functionally accurate but is very close to the existing ABDM use case <strong>"Scan & Share"</strong>, which is the QR-code-based OPD registration service. This similarity could cause confusion among stakeholders, integrators, and citizens alike.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-lg border border-border p-6 mb-8">
              <h3 className="font-heading font-bold text-base mb-4">Proposed: "Scan & Push"</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                We recommend renaming this use case to <strong>"Scan & Push"</strong>. Here's why:
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3 items-start">
                  <QrCode className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span><strong>On-brand with QR-based use cases</strong> — Follows the naming pattern of Scan & Share and Scan & Pay, making it intuitive within the ABDM ecosystem.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Share2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span><strong>Accurately describes the action</strong> — The patient is "pushing" their health records to a different solution/provider in the ABHA ecosystem, unlike "Share" which is already taken.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <Smartphone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span><strong>Distinct and memorable</strong> — Eliminates confusion with "Scan & Share" and gives this initiative its own clear identity.</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-5">
              <h4 className="font-heading font-semibold text-sm mb-3">Naming Comparison</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded bg-muted text-sm">
                  <span className="font-semibold text-primary w-32 shrink-0">Scan & Share</span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">QR-based OPD registration (existing use case)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded bg-muted text-sm">
                  <span className="font-semibold text-primary w-32 shrink-0">Scan & Pay</span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">QR-based payment (existing use case)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded bg-accent/10 border border-accent/20 text-sm">
                  <span className="font-semibold text-accent w-32 shrink-0">Scan & Push</span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">QR-based patient-initiated health record sharing (this initiative)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecommendationPage;
