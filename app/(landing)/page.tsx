import Announcements from "./components/announcements";
import Hero from "./components/hero";
import NavBar from "./components/nav_bar";

export default function Home() {
  return (
    <>
      {/* // Anouncements */}
      <Announcements />
      <div className="relative">
        <NavBar />
        <Hero />
      </div>

      {/* // Nav bar anf hero contatined in a container */}
      {/* // Nav bar */}
      {/* // Hero */}
    </>
  );
}
