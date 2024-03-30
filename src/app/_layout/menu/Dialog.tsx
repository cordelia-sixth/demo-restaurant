import { RemoveScroll } from "react-remove-scroll";
import { useCallback, useEffect, useRef } from "react";

/** メニューが受け取るprops */
type Props = {
  /** 開閉状態 */
  isOpen?: boolean;
  /** メニューに表示する要素 */
  children: React.ReactNode;
  /** メニューを閉じる関数 */
  onClose?: VoidFunction;
};

/**
 * メニューを表示するコンポーネント
 */
export const Dialog: React.FC<Props> = ({
  isOpen = false,
  children,
  onClose,
}: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // このコンポーネントがレンダリングされたら実行
  useEffect((): void => {
    // メニューを取得
    const dialogElement = dialogRef.current;

    // メニューがなければ何もしない（当然）
    if (!dialogElement) {
      return;
    }

    // メニューが開状態になったら
    if (isOpen) {
      // 要素も開状態の時（すでに開いている時）は何もしない
      if (dialogElement.hasAttribute("open")) {
        return;
      } else {
        // メニューを開く
        dialogElement.showModal();
      }

      // メニューの閉状態になったら
    } else {
      // 要素も閉状態の時（すでに閉じている時）は何もしない
      if (!dialogElement.hasAttribute("open")) {
        return;
      } else {
        // メニューを閉じる
        dialogElement.close();
      }
    }
  }, [isOpen]);

  // ダイアログがクリックされた時の関数
  const handleClickDialog = useCallback(() => {
    onClose?.();
  }, [onClose]);

  // ダイアログ内のコンテンツをクリックした時の関数
  const handleClickContent = useCallback(
    (event: React.MouseEvent<HTMLDivElement>): void => {
      event.stopPropagation();
    },
    [],
  );

  return (
    <RemoveScroll removeScrollBar enabled={isOpen}>
      <dialog ref={dialogRef} onClick={handleClickDialog} className="p-0">
        <div
          onClick={handleClickContent}
          className="fixed inset-0 bg-orange-50"
        >
          {children}
        </div>
      </dialog>
    </RemoveScroll>
  );
};
