"use client";
import { useRef, useState } from "react";

import Link from "next/link";
import type { Session } from "next-auth";

import { cn } from "~/utils/tw";
import { NAV_ITEMS } from "~/utils";
import { companyTitle } from "~/utils/seoConfig";

import { GrMenu } from "react-icons/gr";
import { IoMdNotificationsOutline, IoMdSearch } from "react-icons/io";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface HeaderProps {
  session?: Session | null;
}

// * 2 * var(--navbar-height) + var(--navbar-shrink)
// ? = 2 * [(4*16) + (2*16)] = 12rem * 16px = 192px
const SCROLL_LIMIT = 192;
const SCROLL_THRESH = 0.5;

const Header: React.FC<HeaderProps> = () => {
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, SCROLL_LIMIT], [0, 1]);

  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(progress, "change", (val) => {
    if (val > SCROLL_THRESH) setHasScrolled(true);
    else setHasScrolled(false);
  });

  return (
    <header
      className={cn(
        "navbar sticky top-0 z-50 w-full backdrop-blur-sm transition-colors duration-200 ease-in-out",
        hasScrolled ? "bg-primary-content/50" : "bg-primary-content/90",
      )}
    >
      {/* Main Title */}
      <div className="navbar-center order-2 md:navbar-start md:order-1 md:shrink">
        <Link href="/" className="btn btn-ghost text-xl">
          {companyTitle}
        </Link>
      </div>

      <div className="md:shrink0 navbar-start order-1 md:navbar-center md:order-2 md:flex-1">
        <ul className="hidden space-x-8 md:flex">
          {NAV_ITEMS.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} className="link-hover link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="dropdown md:!hidden">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
            <GrMenu />
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-300 p-2 shadow"
          >
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx}>
                <Link href={item.href} className="link-hover link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-end order-3">
        {/* Search */}
        <button className="btn btn-circle btn-ghost">
          <IoMdSearch className="size-6" />
        </button>

        {/* Notifications */}
        <Notification />
      </div>
    </header>
  );
};

export default Header;

const Notification: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        id="nav-notification"
        onClick={() => modalRef.current?.showModal()}
        // onClick={() => document.getElementById("nav-notification")?.click()}
        className="btn btn-circle btn-ghost"
      >
        <div className="indicator">
          <IoMdNotificationsOutline className="size-6" />
          <span className="badge indicator-item badge-primary badge-xs" />
        </div>
      </button>

      <dialog ref={modalRef} id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
