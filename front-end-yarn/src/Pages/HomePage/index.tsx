import Header from "../../Components/Header";

const HomePage = () => {
  return (
    <main className="flex w-screen h-full flex-col">
      <Header />

      <section className="w-full h-[1200px] bg-lightScheme-primary dark:bg-darkScheme-primary"></section>
    </main>
  );
};

export default HomePage;
