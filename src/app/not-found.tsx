import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <p>お探しのページは見つかりませんでした。</p>
      <p>URLが間違っているか、削除された可能性があります。</p>
      <Link href="/">ページを移動します。</Link>
    </div>
  );
};

export default NotFound;
