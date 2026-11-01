import type { ReactNode } from 'react';

/** Every homepage section is named, ruled and anchored the same way. */
export default function Section({
  id,
  label,
  children,
  className = ''
}: {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className={`reveal scroll-mt-24 border-t border-rule py-16 sm:py-20 ${className}`}
    >
      <div className="rule-gold mb-6 w-10" />
      <h2 id={`${id}-label`} className="eyebrow">
        {label}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
