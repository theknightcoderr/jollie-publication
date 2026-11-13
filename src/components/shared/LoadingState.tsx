interface LoadingStateProps {
  label?: string;
  count?: number;
}

export function LoadingState({
  label = 'Loading editorial content…',
  count = 3,
}: LoadingStateProps) {
  return (
    <div role="status" aria-live="polite" className="py-8 space-y-6">
      <span className="sr-only">{label}</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, idx) => (
          <div
            key={idx}
            className="border border-line bg-white rounded-sm p-6 space-y-4 animate-pulse"
          >
            <div className="h-4 w-24 bg-paper-deep rounded" />
            <div className="h-6 w-3/4 bg-paper-deep rounded" />
            <div className="space-y-2">
              <div className="h-3.5 w-full bg-paper-deep rounded" />
              <div className="h-3.5 w-5/6 bg-paper-deep rounded" />
            </div>
            <div className="pt-4 border-t border-line flex justify-between">
              <div className="h-3 w-20 bg-paper-deep rounded" />
              <div className="h-3 w-16 bg-paper-deep rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}