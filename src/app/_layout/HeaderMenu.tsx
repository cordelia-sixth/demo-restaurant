"use client";

import Link from "next/link";
import { useDialog } from "./menu/useDialog";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

/**
 * ヘッダーメニュー
 */
export const HeaderMenu = () => {
  const { handleOpen, handleClose, Dialog } = useDialog();

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="fixed right-3 top-3 z-[1] p-2 sm:hidden"
      >
        <CiMenuBurger size={30} />
      </button>

      {/* TODO: 要修正 */}
      <div className="absolute right-4 top-5 z-[1] max-sm:hidden">
        <ul className="flex items-center justify-around gap-3 text-sm">
          <li className="hover:opacity-70">
            <Link href="/concept" onClick={handleClose}>
              Concept
            </Link>
          </li>
          <li className="hover:opacity-70">
            <Link href="/gallery" onClick={handleClose}>
              Gallery
            </Link>
          </li>
          <li className="hover:opacity-70">
            <Link href="menu" onClick={handleClose}>
              Menu
            </Link>
          </li>
          <li className="hover:opacity-70">
            <Link href="infomation" onClick={handleClose}>
              Infomation
            </Link>
          </li>
          <li className="cursor-pointer bg-slate-700 px-2 py-1 text-sm text-white">
            RESERVATION
          </li>
        </ul>
      </div>

      <Dialog>
        <div className="flex justify-between p-4">
          <h1 className="text-2xl font-bold">SUGOI Restaurant</h1>
          <button onClick={handleClose} className="self-end p-1">
            <RxCross1 size={35} />
          </button>
        </div>
        <div className="flex h-full flex-col justify-center">
          <ul className="mt-[-140px] flex flex-col items-center gap-12 text-2xl">
            <li>
              <Link href="/" onClick={handleClose}>
                Top
              </Link>
            </li>
            <li>
              <Link href="/concept" onClick={handleClose}>
                Concept
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={handleClose}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="menu" onClick={handleClose}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="infomation" onClick={handleClose}>
                Infomation
              </Link>
            </li>
            <li>
              <div
                className="w-fit self-center bg-red-700 px-5 py-3 text-xl text-white"
                onClick={handleClose}
              >
                RESERVATION
              </div>
            </li>
          </ul>
        </div>
      </Dialog>
    </>
  );
};
