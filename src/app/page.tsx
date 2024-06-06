import type { NextPage } from "next";

import Link from "next/link";
import Image from "next/image";

const genPicsumSeed = () => {
  const seed = Math.floor(Math.random() * 10000);
  return `https://picsum.photos/seed/${seed}/1920/1080`;
};

const Home: NextPage = () => {
  // throw new Error("This is a test error");
  const img1 = genPicsumSeed();
  const img2 = genPicsumSeed();

  return (
    <>
      <section
        id="hero"
        className="snap-center flex-col items-center justify-center space-y-4"
      >
        <h1 className="text-wtext text-center text-4xl font-semibold">
          Company Name
        </h1>

        <p className="text-wtext text-center text-lg">Company Description</p>

        <div className="flex flex-1 flex-row items-center justify-center gap-4">
          <Link href="/api/auth/signin/" className="btn btn-primary btn-sm">
            Sign In
          </Link>

          <Link href="/about/" className="btn btn-secondary btn-sm">
            About
          </Link>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <section id="about" className="snap-center">
          <h2 className="text-wtext text-center text-4xl font-semibold">
            About
          </h2>

          {/* Random Fake Image */}
          <div className="flex flex-1 flex-row items-center justify-center gap-4">
            <Image
              src={img1}
              alt="About Image"
              width={1920}
              height={1080}
              className="h-96 w-full rounded-lg object-cover"
            />
          </div>
        </section>

        <section id="about" className="snap-center">
          <h2 className="text-wtext text-center text-4xl font-semibold">
            About
          </h2>

          {/* Random Fake Image */}
          <div className="flex flex-1 flex-row items-center justify-center gap-4">
            <Image
              src={img2}
              alt="About Image"
              width={1920}
              height={1080}
              className="h-96 w-full rounded-lg object-cover"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

// export const dynamic = "force-dynamic";
