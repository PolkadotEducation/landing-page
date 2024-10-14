import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';

const locales = ['en', 'es', 'pt'];

const validPaths = ['/'];

function getLocale(req: NextRequest): string {
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value;
  const headerLocale = req.headers.get('accept-language')?.split(',')[0];
  
  return cookieLocale || match([headerLocale || ''], locales, 'en') || 'en';
}

function isValidPage(pathname: string): boolean {
  return validPaths.includes(pathname);
}

export function middleware(req: NextRequest) {
  const locale = getLocale(req);
  
  const res = NextResponse.next();
  res.cookies.set('NEXT_LOCALE', locale);

  const { pathname } = req.nextUrl;

  if (!isValidPage(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
