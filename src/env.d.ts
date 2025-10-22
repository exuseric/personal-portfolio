interface ImportMetaEnv {
  readonly EMAIL_API_KEY: string;
  readonly EMAIL_BASE_URL: string;
  readonly DEFAULT_EMAIL: string;
  readonly DEFAULT_NAME: string;
  readonly ASTRO_HYGRAPH_ENDPOINT: string;
  readonly ASTRO_HYGRAPH_HOMEPAGE_ID: string;
  readonly ASTRO_HYGRAPH_FAQ_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
