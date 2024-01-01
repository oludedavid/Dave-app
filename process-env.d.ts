declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_PASS: string;
      EMAIL_USER: string;
    }
  }
}
