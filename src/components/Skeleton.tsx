import React from "react";

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
}

export function Skeleton({ className = "", width, height, circle }: SkeletonProps) {
  const style: React.CSSProperties = {
    width: width,
    height: height,
    borderRadius: circle ? "9999px" : "0.5rem",
  };

  return (
    <div
      className={`skeleton ${className}`}
      style={style}
    />
  );
}

export function ProjectSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="w-full aspect-video rounded-3xl" />
      <div className="space-y-2">
        <Skeleton className="w-2/3 h-8" />
        <Skeleton className="w-full h-4" />
      </div>
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-3xl bg-surface-container-low border border-outline-variant/10">
      <Skeleton className="w-full aspect-video rounded-2xl" />
      <div className="space-y-4">
        <div className="flex gap-2">
          <Skeleton className="w-20 h-6 rounded-full" />
          <Skeleton className="w-32 h-6 rounded-full" />
        </div>
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
      </div>
    </div>
  );
}
