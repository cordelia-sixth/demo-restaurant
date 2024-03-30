/**
 * Header, Main, Footerをラップしてスタイルを調整するコンポーネント
 */
export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-dvh w-full flex-col text-base tracking-wider sm:text-lg">
      {children}
    </div>
  );
};
