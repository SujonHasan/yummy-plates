import HeroSection from "@/components/details/HeroSection";
import Main from "@/components/main/Main";
import connectMongo from "@/services/mongo";

export const metadata = {
  title: "Yummy Plates | Home",
  description:
    "Welcome to Your Website. Learn more about our products and services.",
};

export default async function Home() {
  await connectMongo();
  return (
    <main>
      <HeroSection />
      <Main />
    </main>
  );
}
