import { Skeleton, ProjectSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-8 pt-40 pb-20">
      {/* Hero Section Skeleton */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
        <div className="space-y-8">
          <Skeleton className="w-48 h-8 rounded-full" />
          <div className="space-y-4">
            <Skeleton className="w-full h-16 md:h-24" />
            <Skeleton className="w-3/4 h-16 md:h-24" />
          </div>
          <Skeleton className="w-full h-20" />
          <div className="flex gap-4">
            <Skeleton className="w-40 h-14 rounded-full" />
            <Skeleton className="w-40 h-14 rounded-full" />
          </div>
        </div>
        <Skeleton className="w-full aspect-square rounded-[3rem]" />
      </div>

      {/* Grid Layout Skeleton */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4 w-full max-w-xl">
            <Skeleton className="w-1/3 h-10" />
            <Skeleton className="w-full h-6" />
          </div>
          <Skeleton className="w-40 h-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectSkeleton />
          <ProjectSkeleton />
          <ProjectSkeleton />
        </div>
      </div>

      {/* Testimonial Skeleton */}
      <div className="mt-32">
        <Skeleton className="w-full h-[400px] rounded-[3rem]" />
      </div>
    </main>
  );
}
