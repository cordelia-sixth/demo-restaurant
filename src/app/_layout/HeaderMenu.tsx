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
      <Dialog>
        <div className="flex justify-between p-4">
          <h1 className="p-1 text-2xl font-bold">SUGOI Restran</h1>
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
      <button
        type="button"
        onClick={handleOpen}
        className="fixed right-4 top-3 p-2"
      >
        <CiMenuBurger size={30} />
      </button>
    </>
  );
};
