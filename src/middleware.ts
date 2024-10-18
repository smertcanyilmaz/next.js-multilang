// import createMiddleware from 'next-intl/middleware';

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['tr', 'en'],

//   // Used when no locale matches
//   defaultLocale: 'tr'
// });

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ['/', '/(tr|en)/:path*']
//   // matcher: ['/((?!api|_next|.*\\..*).*)']
// };

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["tr", "en"],

  defaultLocale: "tr",
});

export const config = {
  matcher: ["/", "/(tr|en)/:path*"],
};
