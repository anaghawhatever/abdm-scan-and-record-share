interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ badge, title, subtitle, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {badge && <span className="gov-badge mb-3 inline-block">{badge}</span>}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`section-divider mt-4 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeader;
