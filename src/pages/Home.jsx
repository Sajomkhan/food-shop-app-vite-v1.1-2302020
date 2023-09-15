import Category from "../components/Category";
import TopFoods from "../components/TopFoods";
import Food from "../components/Food";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />
      <div className="p-2">
        <TopFoods />
        <Food />
        <Category />
      </div>
    </>
  );
}

export default Home;
