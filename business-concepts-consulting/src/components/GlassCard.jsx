
export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`
      backdrop-glass
      bg-glass
      shadow-glass
      rounded-2xl
      p-6
      ${className}
    `}>
      {children}
    </div>
  );
}