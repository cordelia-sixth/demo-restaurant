/**
 * Header, Main, Footerをラップしてスタイルを調整するコンポーネント
 */
const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Container</h1>
      {children}
    </div>
  );
};

export default Container;
