import type { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  variant?: 'cream' | 'outline' | 'dark';
  className?: string;
}

export function Tag({ children, variant = 'cream', className = '' }: TagProps) {
  const styles = {
    cream: 'bg-cream text-charcoal border border-line',
    outline: 'bg-transparent text-ink-soft border border-line',
    dark: 'bg-burgundy text-cream border border-burgundy',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-caption font-medium tracking-wide ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}