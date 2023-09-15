import Category from "../components/Category";
import TopFoods from "../components/TopFoods";
import Food from "../components/Food";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <div className="px-2">
        <Hero />
      </div>
      <div className="px-6">
        <TopFoods />
        <Food />
        <Category />
      </div>
    </>
  );
}

export default Home;
