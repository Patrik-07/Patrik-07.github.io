import { Header } from "./header";
import { Hero } from "./hero";

function App() {
  return (
    <main className="bg-teal-100 font-poppins">
      <section className="min-h-screen min-w-screen max-w-screen-lg mx-auto px-10 bg-white drop-shadow-xl">
        <Header />
        <Hero />
        <div className="relative mx-auto py-8 w-[360px] h-[360px]">
          <img src="src\assets\me_circle.png" />
        </div>
      </section>
    </main>
  );
}

export default App;
