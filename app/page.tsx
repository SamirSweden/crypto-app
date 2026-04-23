import Banner from "./components/banners/Banner";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <Banner />
    </main>
  );
}
