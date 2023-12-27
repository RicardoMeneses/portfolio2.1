import { cssBundleHref } from '@remix-run/css-bundle';
import { json, type LinksFunction, type LoaderFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { ServerStyleContext, ClientStyleContext } from './context';
import { withEmotionCache } from '@emotion/react';
import { useContext, useEffect, useMemo, useRef } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import generalSyles from './styles/index.css';
import i18next from './i18next.server';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  {
    rel: 'stylesheet',
    href: generalSyles,
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18next.getLocale(request);
  return json({ cookies: request.headers.get('cookie') ?? '', locale });
};

export const handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: 'common',
};

export function useChangeLanguage(locale: string) {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

const theme = extendTheme({ fonts: { body: "'Rancho', cursive" } });

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(({ children }: DocumentProps, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext);
  const clientStyleData = useContext(ClientStyleContext);

  const DEFAULT_COLOR_MODE: 'dark' | 'light' | null = 'dark';
  const CHAKRA_COOKIE_COLOR_KEY = 'chakra-ui-color-mode';

  const getColorMode = (cookies: string) => {
    const match = cookies.match(new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`));
    return match == null ? void 0 : match[2];
  };

  // Only executed on client
  useEffect(() => {
    const lng = localStorage.getItem('language');

    if (lng) {
      i18n.changeLanguage(lng);
    }
    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData?.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let { cookies } = useLoaderData<typeof loader>();
  const { locale } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();

  const cookiesRef = useRef(cookies);

  if (typeof document !== 'undefined') {
    cookies = document.cookie;
  }

  const colorMode = useMemo(() => {
    let color = getColorMode(cookiesRef.current);

    if (!color && DEFAULT_COLOR_MODE) {
      cookiesRef.current += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`;
      color = DEFAULT_COLOR_MODE;
    }

    return color;
  }, [cookiesRef]);

  return (
    <html
      lang={locale}
      dir='ltr'
      {...(colorMode && {
        'data-theme': colorMode,
        style: { colorScheme: colorMode },
      })}
    >
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Rancho&display=swap'
          rel='stylesheet'
        />
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body
        {...(colorMode && {
          className: `chakra-ui-${colorMode}`,
        })}
        style={{ backgroundColor: '#F1F2F5' }}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
