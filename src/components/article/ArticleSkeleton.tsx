import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export const ArticleSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Skeleton className="h-12 w-3/4 mb-4" />
      <Skeleton className="h-6 w-full mb-8" />
      
      <div className="space-y-4 mb-8">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <div className="mt-8 space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-6">
            <Skeleton className="h-8 w-1/2 mb-4" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};