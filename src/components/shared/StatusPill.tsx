type StatusPillProps = {
  text: string;
  className?: string;
};

export function StatusPill({ text, className = '' }: StatusPillProps) {
  return (
    <div className="flex justify-center pt-3">
      <span
        className={`inline-flex items-center gap-2 rounded-full bg-shhala-green px-4 py-2 text-xs font-semibold text-white ${className}`}
      >
        {text}
        <span className="h-2 w-2 rounded-full bg-green-300" />
      </span>
    </div>
  );
}
