interface ImportMetaEnv {
  readonly BREVO_API_KEY: string;
  readonly SENDER_EMAIL: string;
  readonly SENDER_NAME: string;
  readonly RECEIVER_EMAIL: string;
  readonly RECEIVER_NAME: string;
  readonly ASTRO_HYGRAPH_ENDPOINT: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}