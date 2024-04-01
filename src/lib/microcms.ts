import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSListResponse,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";

/** ヒーロー画像の型 */
export type HeroImage = {
  /** 画像データ */
  image: MicroCMSImage;
  /** 画像のaltテキスト */
  alt: string;
} & MicroCMSDate;

/** コンセプトデータの型 */
export type Concept = {
  /** 画像データ */
  image: MicroCMSImage;
  /** 見出し文 */
  heading: string;
  /** 詳細文 */
  description: string;
  /** 画像のaltテキスト */
  alt: string;
};

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
 * ヒーロー画像一覧を取得
 */
export const getHeroImageList = async (): Promise<
  MicroCMSListResponse<HeroImage>
> => {
  const list = await client
    .getList<HeroImage>({
      endpoint: "hero",
    })
    // TODO: エラーハンドリング
    .catch();

  return list;
};

/**
 * ギャラリー画像一覧を取得
 */
export const getGalleryImage = async (): Promise<
  MicroCMSListResponse<HeroImage>
> => {
  const list = await client
    .getList<HeroImage>({
      endpoint: "gallery",
    })
    // TODO: エラーハンドリング
    .catch();

  return list;
};

/**
 * メニュー画像一覧を取得
 */
export const getMenuImage = async (): Promise<
  MicroCMSListResponse<HeroImage>
> => {
  const list = await client
    .getList<HeroImage>({
      endpoint: "gallery",
      queries: { q: "menu" },
    })
    // TODO: エラーハンドリング
    .catch();

  return list;
};

/**
 * インフォメーション画像を取得
 */
export const getInfoImage = async (): Promise<
  MicroCMSListResponse<HeroImage>
> => {
  const list = await client
    .getList<HeroImage>({
      endpoint: "gallery",
      queries: { q: "infomation" },
    })
    // TODO: エラーハンドリング
    .catch();

  return list;
};

/**
 * コンセプトページのデータを取得
 */
export const getConcept = async (): Promise<MicroCMSListResponse<Concept>> => {
  const concept = await client
    .getList<Concept>({ endpoint: "concept" })
    .catch();
  return concept;
};

/**
 * 画像を取得
 */
export const getImages = async (
  endpoint: string,
  q: string,
): Promise<MicroCMSListResponse<HeroImage>> => {
  const images = await client.getList({ endpoint, queries: { q } }).catch();
  return images;
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
