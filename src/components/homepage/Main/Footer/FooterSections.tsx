import { FooterSection } from "./FooterSection";

export function FooterSections() {
  return (
    <div className="flex flex-wrap gap-y-6 lg:w-1/2">
      <FooterSection
        title={"Company"}
        links={[
          { name: "About", link: "/" },
          { name: "Features", link: "/" },
          { name: "Works", link: "/" },
          { name: "Career", link: "/" },
        ]}
      />

      <FooterSection
        title="Help"
        links={[
          { name: "Customer Support", link: "/" },
          { name: "Delivery Details", link: "/" },
          { name: "Terms & Conditions", link: "/" },
          { name: "Privacy Policy", link: "/" },
        ]}
      />

      <FooterSection
        title="Faq"
        links={[
          { name: "Account", link: "/" },
          { name: "Manage Deliveries", link: "/" },
          { name: "Orders", link: "/" },
          { name: "Payment", link: "/" },
        ]}
      />

      <FooterSection
        title="Resources"
        links={[
          { name: "Free eBook", link: "/free-ebook" },
          { name: "Development Tutorial", link: "/development-tutorial" },
          { name: "How to - Blog", link: "/blog" },
          { name: "Youtube Playlist", link: "/youtube-playlist" },
        ]}
      />
    </div>
  );
}
