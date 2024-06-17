import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    // Open the modal
  }

  return (
    <>
      <Head>
        <title>Login Modal</title>
        <meta name="description" content="Scriptive Interview: Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <div>
          <p>
            You have been logged out.
          </p>
          <button onClick={handleModalOpen}>Login</button>
        </div>

        <LoginModal isOpen={isOpen} />
      </main>
    </>
  );
}
