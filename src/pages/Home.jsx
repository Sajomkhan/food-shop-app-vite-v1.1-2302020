import Category from "../components/Category";
import TopFoods from "../components/TopFoods";
import Food from "../components/Food";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />
      <div className="w-11/12 mx-auto">
        <TopFoods />
        <Food />
        <Category />
      </div>
    </>
  );
}

export default Home;
