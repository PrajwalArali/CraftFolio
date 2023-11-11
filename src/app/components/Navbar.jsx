"use client";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function Navbar() {
  return (
    <nav className="border-b-2">
      <div className="container flex gap-5 justify-between px-4 py-2 items-center hover: bg-none outline-none">
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex gap-4 items-center cursor-pointer">
                <img
                  src="https://avatars.githubusercontent.com/u/111000515?v=4"
                  alt="logo"
                  className="h-12 w-12 rounded-full select-none"
                />
                <div className="flex flex-col gap-[0.15rem]">
                  <span className="text-md font-bold">Kartikeya Saini</span>
                  <p className="text-[0.7rem] text-muted-foreground">
                    B.Tech, ISE UVCE (Batch of 2025)
                  </p>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="ml-2 mt-1">
              <DropdownMenuItem>
                <Link
                  href="https://hi-kartik2004.github.io/Portfolio/assets/pdf/Kartikeya_Resume_June_2023.pdf"
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  {" "}
                  <FiDownload />
                  Resume
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://github.com/hi-kartik2004"
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <BsGithub /> Github
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://www.linkedin.com/in/kartikeya-saini-65504b240/"
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <BsLinkedin /> Linkedin
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;