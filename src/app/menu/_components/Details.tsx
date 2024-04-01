export const Details = () => {
  return (
    <div className="flex h-[75vh] py-10">
      <div className="relative flex size-full justify-around gap-2 px-8">
        <details name="details" open>
          <summary className="block cursor-pointer px-1 text-xl opacity-40">
            Lunch
          </summary>
          <div className="absolute inset-x-14 top-20 flex flex-col items-center justify-center gap-8 border border-black py-10 text-lg">
            <p className="">季節のおまかせコース（5品）</p>
            <ul className="flex flex-col gap-4 text-center">
              <li>前菜</li>
              <li>パスタ</li>
              <li>魚介料理</li>
              <li>肉料理</li>
              <li>ドルチェ</li>
            </ul>
            <p>¥9,800</p>
          </div>
        </details>

        <details name="details">
          <summary className="block cursor-pointer px-1 text-xl opacity-40">
            Dinner
          </summary>
          <div className="absolute inset-x-14  top-20 flex flex-col items-center justify-center gap-8 border border-black py-10 text-lg">
            <p className="">季節のおまかせコース（7品）</p>
            <ul className="flex flex-col gap-4 text-center">
              <li>前菜</li>
              <li>パスタ</li>
              <li>リゾット</li>
              <li>魚介料理</li>
              <li>肉料理</li>
              <li>チーズ</li>
              <li>ドルチェ</li>
            </ul>
            <p>¥13,800</p>
          </div>
        </details>

        <details name="details">
          <summary className="block cursor-pointer px-1 text-xl opacity-40">
            Drink
          </summary>
          <div className="absolute inset-x-14 top-20 flex flex-col items-center justify-center gap-8 border border-black p-3 text-lg">
            <table cellPadding={10}>
              <tbody>
                <tr>
                  <th className="text-left">グラスワイン</th>
                  <td>¥1,200~</td>
                </tr>
                <tr>
                  <th className="text-left">ボトルワイン</th>
                  <td>¥1,0000~</td>
                </tr>
                <tr>
                  <th className="text-left">蒸留酒・カクテル</th>
                  <td>¥1,200~</td>
                </tr>
                <tr>
                  <th className="text-left">ソフトドリンク</th>
                  <td>¥1,000~</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </div>
  );
};
