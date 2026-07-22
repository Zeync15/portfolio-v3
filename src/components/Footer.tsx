import ContactLinks from "./ContactLinks";

const Footer = () => {
  return (
    <footer className="px-8 pt-[70px] pb-[90px] border-t border-term-border-soft text-center">
      <div className="text-sm text-term-muted">
        <span className="text-term-green">$</span> echo &quot;let&apos;s
        connect&quot;
      </div>
      <div className="mt-[22px] flex justify-center">
        <ContactLinks />
      </div>
      <div className="text-[11.5px] text-term-faint mt-[34px]">
        © 2026 Chai Ze Yen — built &amp; deployed with care
      </div>
    </footer>
  );
};

export default Footer;
