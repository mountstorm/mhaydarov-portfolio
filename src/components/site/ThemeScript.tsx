/**
 * Runs before paint, inline in <head>, so the first frame is already in the
 * right theme — no flash. It sets BOTH the `data-theme` attribute (which the
 * CSS custom properties key off) and Tailwind's `dark` class, so the two
 * systems can never disagree.
 */
const script = `(function(){try{
var s=localStorage.getItem('theme');
var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);
var e=document.documentElement;
e.setAttribute('data-theme',d?'dark':'light');
e.classList.toggle('dark',d);
}catch(e){}})();`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
