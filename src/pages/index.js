import { MainSection } from "../components/MainSection";
import { Nav } from "../components/Nav";

export default function Home({ data }) {
  console.log(data);
  return (
    <div className="relative">
      <Nav />
      <MainSection />
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("console log from backend");
  return {
    props: {
      data: "data from backend",
    }, // will be passed to the page component as props
  };
}
