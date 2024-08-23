import React from 'react';

const SkeletonLoader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`skeleton-loader h-96 w-full ${className}`}>
    </div>
  );
};

export default SkeletonLoader;
