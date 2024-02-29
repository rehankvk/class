"use client"


import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";



export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Halaman Home</h1>
      <Button>Get Started</Button>
      <Footer/>
    </>
  );
}
