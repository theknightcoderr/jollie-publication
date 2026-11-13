import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'on-dark-primary'
  | 'on-dark-secondary';

interface BaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
}

type ActionButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined;
  };

type LinkButtonProps = BaseProps & {
  to: string;
  onClick?: () => void;
};

export type ButtonProps = ActionButtonProps | LinkButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-burgundy text-cream hover:bg-[#5E182A] active:bg-[#4B1221] border border-burgundy px-6 py-3 rounded',
  secondary:
    'bg-transparent text-burgundy border border-burgundy hover:bg-burgundy/5 active:bg-burgundy/10 px-6 py-3 rounded',
  tertiary:
    'bg-transparent text-burgundy underline underline-offset-4 decoration-burgundy/50 hover:decoration-burgundy px-1 py-2 inline-flex items-center gap-1.5',
  'on-dark-primary':
    'bg-cream text-burgundy hover:bg-white active:bg-paper-deep border border-cream px-6 py-3 rounded',
  'on-dark-secondary':
    'bg-transparent text-cream border border-cream/70 hover:border-cream hover:bg-cream/10 px-6 py-3 rounded',
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', children, className = '', withArrow = false } = props;

  const baseClass = `inline-flex items-center justify-center gap-2 min-h-[44px] min-w-[44px] text-caption font-medium tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {(withArrow || variant === 'tertiary') && (
        <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
      )}
    </>
  );

  if ('to' in props && props.to !== undefined) {
    return (
      <Link to={props.to} onClick={props.onClick} className={baseClass}>
        {content}
      </Link>
    );
  }

  const {
    variant: _v,
    withArrow: _w,
    className: _c,
    children: _ch,
    ...buttonAttrs
  } = props as ActionButtonProps;

  return (
    <button type={buttonAttrs.type ?? 'button'} className={baseClass} {...buttonAttrs}>
      {content}
    </button>
  );
}