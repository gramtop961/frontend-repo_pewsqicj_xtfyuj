import React from 'react';
import Spline from '@splinetool/react-spline';

class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.warn('Spline failed to render:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

export default function SafeSpline({ scene }) {
  return (
    <SplineErrorBoundary
      fallback={
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#0A0A0B] to-[#0F1115]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-full bg-white/10" />
            <p className="text-white/70">Interactive scene unavailable. Showing fallback.</p>
          </div>
        </div>
      }
    >
      <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
    </SplineErrorBoundary>
  );
}
