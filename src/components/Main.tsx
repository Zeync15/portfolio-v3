import ContactLinks from "./ContactLinks";

const Prompt = () => <span className="text-term-green">$</span>;

const Main = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-8 pt-[120px] pb-20"
    >
      <div className="w-full max-w-[1180px] mx-auto">
        <div className="border border-term-border rounded-2xl overflow-hidden bg-term-panel">
          {/* window bar */}
          <div className="h-12 flex items-center gap-[9px] px-5 border-b border-term-border">
            <span className="w-[11px] h-[11px] rounded-full bg-term-line" />
            <span className="w-[11px] h-[11px] rounded-full bg-term-line" />
            <span className="w-[11px] h-[11px] rounded-full bg-term-line" />
            <span className="ml-3 text-[12.5px] text-term-dim">
              zeyen@portfolio: ~/home
            </span>
          </div>

          {/* window body */}
          <div className="flex flex-col gap-1 px-8 py-14 sm:px-16 sm:py-[58px]">
            <div className="inline-flex items-center gap-[9px] border border-[#1c3a2a] bg-term-green/[0.05] rounded-full px-[15px] py-[7px] text-[12.5px] text-term-green mb-[26px] w-fit">
              <span className="w-2 h-2 rounded-full bg-term-green" />
              Open to the right opportunity
            </div>

            <div className="text-sm text-term-dim">
              <Prompt /> whoami
            </div>
            <h1 className="font-display text-5xl sm:text-[68px] font-bold leading-[1.02] tracking-[-0.02em] text-term-fg my-1">
              Chai Ze Yen
            </h1>

            <div className="text-sm text-term-dim mt-4">
              <Prompt /> cat role.txt
            </div>
            <div className="font-display text-2xl sm:text-[28px] font-medium text-term-green my-1 flex items-center">
              Frontend Web Developer
              <span className="cursor-blink inline-block w-[13px] h-[26px] bg-term-green ml-2 translate-y-1" />
            </div>

            <div className="text-sm text-term-dim mt-[18px]">
              <Prompt /> cat tagline.txt
            </div>
            <p className="font-display text-lg sm:text-[21px] font-medium text-term-fg-soft max-w-[660px] leading-[1.5] mt-1.5">
              Building fast, accessible web interfaces for banking, fintech, and
              digital entertainment products.
            </p>
            <p className="text-[13px] text-term-dim mt-3.5">
              {"// "}React · Next.js · TypeScript — 5 yrs across automotive,
              banking, consulting &amp; entertainment
            </p>

            <div className="mt-10">
              <ContactLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
