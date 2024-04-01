import Link from "next/link";
import { CiInstagram } from "react-icons/ci";

/**
 * フッターコンポーネント
 */
export const Footer = () => {
  return (
    <footer className="flex items-end justify-around gap-3 bg-slate-600 py-5 text-white/70">
      <small>&copy; SUGOI Restaurant</small>
      <div className="flex items-center gap-2">
        <Link href="#">
          <CiInstagram size={30} />
        </Link>
      </div>
    </footer>
  );
};
