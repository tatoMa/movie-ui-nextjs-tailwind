import { MainSection } from "../components/MainSection";
import { Nav } from "../components/Nav";

export default function Home({ result }) {
  fetch();

  return (
    <div className="relative">
      {result}
      <Nav />
      <MainSection />
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("hiiii");
  return {
    props: {
      result: "ooooo",
    }, // will be passed to the page component as props
  };
}
