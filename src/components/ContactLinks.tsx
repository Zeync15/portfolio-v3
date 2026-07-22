const links = [
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/chai-ze-yen/",
    external: true,
  },
  { label: "github", href: "https://github.com/Zeync15", external: true },
  { label: "email", href: "mailto:zeyenchai@gmail.com", external: false },
  { label: "whatsapp", href: "https://wa.me/601112881135", external: true },
];

const base =
  "border border-term-line text-term-muted text-xs px-[18px] py-[11px] rounded-lg transition-colors hover:border-term-green hover:text-term-green";

const ContactLinks = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={base}
        >
          [ {link.label} ]
        </a>
      ))}
      <a
        href="/resume.pdf"
        download="Ze Yen Resume.pdf"
        className="border border-term-green bg-term-green/[0.06] text-term-green text-xs px-[18px] py-[11px] rounded-lg transition-colors hover:bg-term-green/[0.12]"
      >
        [ resume.pdf ↓ ]
      </a>
    </div>
  );
};

export default ContactLinks;
