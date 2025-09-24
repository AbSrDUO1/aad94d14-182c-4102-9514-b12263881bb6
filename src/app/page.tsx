"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'highlight' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="/images/logo.svg"
          logoAlt="MemeSite Logo"
          navItems={[{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }]}
          buttonText="Get started"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to MemeSite"
          subtitle="Your go-to platform for creating memes effortlessly"
          primaryButtonText="Start Now"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="What is MemeSite?"
          descriptions={["MemeSite offers an intuitive interface for creating memes from start to finish.", "Join a community of meme creators and take your sense of humor to the next level."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
          steps={[
            { title: "Visit our site", description: "Navigate to MemeSite to explore our offerings.", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Select your plan", description: "Choose a subscription that best suits your needs.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Join the community", description: "Engage with other users, share your creations, and enjoy the meme-making journey!", image: "/images/placeholder3.avif", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Our Tokenomics"
          description="Understanding how our token works enhances your experience."
          tokenData={[
            { value: "100M", description: "Total Supply" },
            { value: "60%", description: "Circulating Supply" },
            { value: "$1.00", description: "Current Price" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoAlt="MemeSite Logo"
          copyrightText="© 2023 MemeSite. All rights reserved."
          columns={[
            { title: "About", items: [{ label: "Company", onClick: () => {} }, { label: "Careers", onClick: () => {} }] },
            { title: "Resources", items: [{ label: "Blog", onClick: () => {} }, { label: "Contact", onClick: () => {} }] },
            { title: "Support", items: [{ label: "FAQ", onClick: () => {} }, { label: "Help Center", onClick: () => {} }] }
          ]}
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
