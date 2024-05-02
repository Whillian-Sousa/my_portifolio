import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Work />
      </div>
    </>
  );
};

export default App;
