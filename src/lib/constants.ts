const appName = process.env.NEXT_PUBLIC_APP_NAME ?? process.env.APP_NAME;

if (!appName) {
  throw new Error("Missing NEXT_PUBLIC_APP_NAME or APP_NAME");
}

export const APP_NAME = appName;

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? process.env.DOMAIN ?? "";
