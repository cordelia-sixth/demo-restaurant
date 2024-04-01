import Link from "next/link";
import { CiInstagram } from "react-icons/ci";

/**
 * フッターコンポーネント
 */
export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 bg-slate-600 py-5 text-white/70">
      <div className="flex items-center gap-2">
        <h1 className="p-2 py-3">SUGOI Restran</h1>
        <Link href="#">
          <CiInstagram size={30} />
        </Link>
      </div>

      <table cellPadding={6}>
        <tbody>
          <tr>
            <th className="text-left align-top">Address</th>
            <td colSpan={2}>
              〒123-4567
              <br />
              東京都中央区中央町1-2-3
              <br />
              中央駅より徒歩3分
            </td>
          </tr>
          <tr>
            <th className="text-right">Tel</th>
            <td>03-1234-5678</td>
          </tr>
          <tr>
            <th className="text-right">Mail</th>
            <td>info@sugoirestrant.com</td>
          </tr>
        </tbody>
      </table>

      <div className="flex flex-col items-center gap-3">
        <p>情報セキュリティ方針</p>
        <p>個人情報方針</p>
        <p>プライバシーポリシー</p>
      </div>

      <small>&copy; SUGOI Restran</small>
    </footer>
  );
};
