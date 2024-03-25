/**
 * Header, Main, Footerをラップしてスタイルを調整するコンポーネント
 */
export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-screen-xl flex-col gap-5 text-base tracking-wide sm:text-lg">
      {children}
    </div>
  );
};
