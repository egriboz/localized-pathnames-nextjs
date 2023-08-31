import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  defaultLocale: 'en',
  locales: ['en', 'tr'],
  pathnames: {
    '/about': {
      en: '/about',
      tr: '/hakkimizda',
    },
    '/posts': {
      en: '/posts',
      tr: '/yazilar',
    },
  },
  localePrefix: 'always',
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
