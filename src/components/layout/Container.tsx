import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: 'wide' | 'reading';
  className?: string;
}

export function Container({ children, size = 'wide', className = '' }: ContainerProps) {
  const maxWidthClass = size === 'reading' ? 'max-w-reading' : 'max-w-container';
  return (
    <div className={`mx-auto w-full px-5 md:px-8 lg:px-12 ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
}