/// <reference types="node" />

// Extend the NodeJS namespace with Next.js-defined properties
declare namespace NodeJS {
  interface Process {
    /**
     * @deprecated Use `typeof window` instead
     */
    readonly browser: boolean;
  }

  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }

  interface RequestInit extends globalThis.RequestInit {
    next?: NextFetchRequestConfig | undefined;
  }
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
