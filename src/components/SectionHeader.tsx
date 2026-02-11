interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ badge, title, subtitle, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-6 ${centered ? "text-center" : ""}`}>
      {badge && <span className="gov-badge mb-2 inline-block">{badge}</span>}
      <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
