interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary',
  isLoading,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`
        relative px-8 py-3 
        transition-all duration-200
        disabled:opacity-50
        ${variant === 'primary' 
          ? 'bg-vintage-black text-vintage-white hover:bg-accent' 
          : 'bg-muted/10 hover:bg-muted/20'
        }
      `}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2" />
          Đang xử lý...
        </span>
      ) : children}
    </button>
  );
}
