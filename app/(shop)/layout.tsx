import Announcements from "@/components/announcements";
import Footer from "@/components/footer";
import InfoPanel from "@/components/info_panel";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Announcements />
      {children}
      <InfoPanel />
      <Footer />
    </div>
  );
}
