import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

import { ArrowRight, GithubIcon } from "lucide-react";

function NavBar() {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span className="text-blue-600">reuseonline.</span>
          </Link>

          {/* todo: mobile nav */}

          <div className="  space-x-4 sm:flex">
            <>
              <Link
                href="https://princes-organization-3.gitbook.io/reuseonline-docs/"
                target="_blank"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                docs
              </Link>

              <Link
                href="http://github.com/Akarikev/is-online-status"
                target="_blank"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                <GithubIcon className="w-4 h-4 text-blue-600"/>
              </Link>

             
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default NavBar;