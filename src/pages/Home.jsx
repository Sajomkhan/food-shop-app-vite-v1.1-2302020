import Category from "../components/Category";
import TopFoods from "../components/TopFoods";
import Food from "../components/Food";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="w-11/12 lg:max-w-[1400px] mx-auto">
      <Hero />
      <TopFoods />
      <Food />
      <Category />
    </div>
  );
}

export default Home;
