import { MainSection } from "../components/MainSection";
import { Nav } from "../components/Nav";

export default function Home({ result }) {
  return (
    <div className="relative">
      movie page
      <Nav />
      <MainSection />
    </div>
  );
}
