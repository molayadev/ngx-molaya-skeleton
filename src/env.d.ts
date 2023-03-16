declare namespace NodeJS {
  /** Merge declaration with `process` in order to override the global-scoped env. */
  export interface ProcessEnv {
    /**
     * Built-in environment variable.
     * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
     */
    readonly MOLA_ENV: string;
    readonly MOLA_FIREBASE_SETTINGS: string;
    // Add your environment variables below
  }
}
