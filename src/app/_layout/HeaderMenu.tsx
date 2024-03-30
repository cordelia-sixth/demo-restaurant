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
          <h1 className="p-2 py-3">SUGOI Restran</h1>
          <button onClick={handleClose} className="self-end p-2">
            <RxCross1 size={35} />
          </button>
        </div>
        <div className="grid h-full content-center justify-center">
          <ul className="mt-[-140px] flex flex-col gap-20 text-4xl">
            <li>
              <Link href="#">Concept</Link>
            </li>
            <li>
              <Link href="#">Gallery</Link>
            </li>
            <li>
              <Link href="#">Menu</Link>
            </li>
            <li>
              <Link href="#">Infomation</Link>
            </li>
          </ul>
        </div>
      </Dialog>
      <button
        type="button"
        onClick={handleOpen}
        className="fixed right-4 top-4 bg-slate-500/[.7] p-2"
      >
        <CiMenuBurger size={35} />
      </button>
    </>
  );
};
