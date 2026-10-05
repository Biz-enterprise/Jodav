import { useEffect } from 'react';
import { SITE } from './data';

export default function Seo({ title, description, path }: { title: string; description: string; path: string }) {
  useEffect(() => {
    document.title = title;
    const set = (sel: string, attr: string, val: string) => document.head.querySelector(sel)?.setAttribute(attr, val);
    set('meta[name="description"]', 'content', description);
    set('link[rel="canonical"]', 'href', SITE + path);
    set('meta[property="og:title"]', 'content', title);
    set('meta[property="og:description"]', 'content', description);
    set('meta[property="og:url"]', 'content', SITE + path);
    window.scrollTo(0, 0);
  }, [title, description, path]);
  return null;
}
