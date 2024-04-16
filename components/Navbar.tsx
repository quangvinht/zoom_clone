import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignIn, SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="icons/logo.svg"
          alt={"Logo"}
          width="32"
          height="32"
          className="max-sm:size-10"
        />
        <h1 className="text-white text-3xl font-extrabold max-sm:hidden">
          Zoom
        </h1>
      </Link>
      <div className="flex-between gap-5 ">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
