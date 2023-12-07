import Announcements from "./components/announcements";
import CategoriesList from "./components/categories_list";
import Hero from "./components/hero";
import NavBar from "./components/nav_bar";
import { NavBarStickyProvider } from "./contexts/nav_bar_sticky_context";

export default function Home() {
  return (
    <>
      <Announcements />
      <NavBarStickyProvider>
        <div className="relative">
          <NavBar />
          <Hero />
        </div>
        <CategoriesList />
      </NavBarStickyProvider>
    </>
  );
}
