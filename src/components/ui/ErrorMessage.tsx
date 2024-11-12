interface ErrorMessageProps {
  message?: string;
  retry?: () => void;
}

export default function ErrorMessage({ message, retry }: ErrorMessageProps) {
  return (
    <div className="text-center space-y-4 py-8">
      <p className="text-muted">{message || 'Đã xảy ra lỗi. Vui lòng thử lại.'}</p>
      {retry && (
        <button
          onClick={retry}
          className="px-6 py-2 bg-vintage-black text-vintage-white hover:bg-accent transition-colors"
        >
          Thử lại
        </button>
      )}
    </div>
  );
} 