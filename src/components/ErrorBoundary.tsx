import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-montserrat">Đã xảy ra lỗi</h1>
              <p className="text-muted">Vui lòng thử lại sau</p>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-vintage-black text-vintage-white hover:bg-accent transition-colors"
              >
                Tải lại trang
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 