import type { ReactNode } from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}

export function FormField({
  id,
  label,
  required = false,
  error,
  hint,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-caption font-medium text-charcoal">
        {label}
        {required && (
          <span className="text-burgundy ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {hint && <p className="text-xs text-ink-soft">{hint}</p>}
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-burgundy pt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}