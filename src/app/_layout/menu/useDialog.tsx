import { Dialog as Component } from "@/app/_layout/menu/Dialog";
import { ComponentProps, useCallback, useState } from "react";

type Props = Omit<
  Parameters<typeof Component>[0],
  "isOpen" | "onClose" | "rootElement"
>;

type Result = {
  handleOpen: () => void;
  handleClose: () => void;
  Dialog: React.FC<Props>;
};

/**
 * ダイアログを表示するカスタムフック
 */
export const useDialog = (): Result => {
  // メニューの開閉状態
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ダイアログを開く関数
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  // ダイアログを閉じる関数
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const Dialog: React.FC<Props> = useCallback(
    (props: Props) => {
      return <Component isOpen={isOpen} onClose={handleClose} {...props} />;
    },
    [handleClose, isOpen],
  );

  return { handleOpen, handleClose, Dialog };
};
