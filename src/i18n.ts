import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { getUserLocale } from '@/services/locale';
 
const locales = ['en', 'es', 'pt'];
 
export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  if (!locales.includes(locale as any)) notFound();
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
