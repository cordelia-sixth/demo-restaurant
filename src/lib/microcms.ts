import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSListResponse,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";

/** ヘッダー画像の型 */
export type HeaderImg = {
  /** 画像URL */
  image: MicroCMSImage;
  /** 記事タイトル */
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required.");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required.");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

/**
 * ヘッダー画像一覧を取得
 * @param queries 検索用クエリ
 */
export const getHeaderimg = async (
  queries?: MicroCMSQueries,
): Promise<MicroCMSListResponse<HeaderImg>> => {
  const listDate = await client
    .getList<HeaderImg>({
      endpoint: "hero",
      queries,
    })
    // TODO: エラーハンドリング
    .catch();

  return listDate;
};

/**
 * ブログ詳細を取得
 */
// export const getDetail = async (
//   contentId: string,
//   queries?: MicroCMSQueries,
// ) => {
//   return await client.getListDetail<Blog>({
//     endpoint: "blogs",
//     contentId,
//     queries,
//   });
// };

/** 下書き中の記事を取得 */
// export const getBlogDraft = async (
//   contentId: string,
//   queries: MicroCMSQueries & { draftKey: string },
// ) => {
//   return await client.get<Blog>({
//     endpoint,
//     contentId,
//     queries,

//     /**
//      * draftKey（下書き中記事のID）が不変でも記事内容は変わる可能性があるためキャッシュしない
//      * つまり下書き記事は編集しながらプレビューすることになるので、編集してからnextにまたリクエストを送ることになるが
//      * その度にdraftKeyは変わらない。するとnextはレスポンスをキャッシュしてしまうためリロードなどをしないと
//      * 修正が反映されない。だからキャッシュしないように設定する
//      */
//     customRequestInit: { cache: "no-cache" },
//   });
// };

// /** 記事ページのメタデータ生成 */
// export const generateArticleMetadata = async (
//   articleId: string,
//   draftKey?: string | string[],
// ): Promise<Metadata | void> => {
//   let blog: Blog | null = null;

//   // draftKeyが存在すればtrue
//   const isDraft = typeof draftKey === "string";

//   if (isDraft) {
//     // 下書き記事を取得
//     blog = await getBlogDraft(articleId, { draftKey });
//   } else {
//     // 公開中の記事を取得
//     blog = await getDetail(articleId);
//   }

//   if (blog) {
//     // 公開記事と下書き記事でページタイトルを変更
//     const { title } = blog;
//     return { title: isDraft ? `[プレビュー] ${title}` : title };
//   }
// };
