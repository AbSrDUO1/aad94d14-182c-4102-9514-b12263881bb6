use client

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "highlight" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          logoSrc="/images/logo.svg"
          logoAlt="Tiptap Logo"
          brandName="Tiptap"
          navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" },{ name: "How To Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to Tiptap"
          description="Create and organize your thoughts like never before."
          tagLabel="Futuristic Writing Tool"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About Tiptap"
          descriptions={[
            "Tiptap is a versatile writing tool designed for the modern age.",
            "Utilize advanced features while keeping your creativity uninterrupted."
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
          steps={[
            { title: "Step 1", description: "Sign up for an account", image: "", position: "left", isCenter: false},
            { title: "Step 2", description: "Choose your plan", image: "", position: "center", isCenter: true},
            { title: "Step 3", description: "Start using Tiptap", image: "", position: "right", isCenter: false}
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tiptap Tokenomics"
          description="Our token structure ensures transparency and growth."
          kpiItems={[
            { value: "1M", description: "Total Supply", longDescription: "The total number of tokens available.", icon: "Star"},
            { value: "500K", description: "Tokens in Circulation", longDescription: "The number of tokens currently in use.", icon: "Users"},
            { value: "200K", description: "Locked Tokens", longDescription: "Tokens that are locked for stability.", icon: "Lock"}
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Tiptap Logo"
          logoText="Tiptap"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] },
            { items: [{ label: "Contact Us", onClick: () => {} }, { label: "Support", onClick: () => {} }] },
            { items: [{ label: "FAQ", onClick: () => {} }, { label: "Blog", onClick: () => {} }] }
          ]}
          className="footer"
        />
      </div>
    </SiteThemeProvider>
  );
}