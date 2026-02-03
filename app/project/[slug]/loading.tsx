export default function Loading() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <article className="max-w-2xl mx-auto px-6 py-20 sm:py-28 animate-pulse">
        {/* Back navigation skeleton */}
        <nav className="mb-12">
          <div className="h-4 w-32 bg-stone-200 dark:bg-stone-800 rounded" />
        </nav>

        {/* Button skeleton */}
        <div className="mb-10">
          <div className="h-10 w-40 bg-stone-200 dark:bg-stone-800 rounded-full" />
        </div>

        {/* Title skeleton */}
        <div className="space-y-4 mb-8">
          <div className="h-10 w-3/4 bg-stone-200 dark:bg-stone-800 rounded" />
        </div>

        {/* Content skeletons */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded" />
          <div className="h-4 w-5/6 bg-stone-200 dark:bg-stone-800 rounded" />
          <div className="h-4 w-4/6 bg-stone-200 dark:bg-stone-800 rounded" />
        </div>

        <div className="my-8 h-64 w-full bg-stone-200 dark:bg-stone-800 rounded-xl" />

        <div className="space-y-4">
          <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded" />
          <div className="h-4 w-5/6 bg-stone-200 dark:bg-stone-800 rounded" />
          <div className="h-4 w-3/6 bg-stone-200 dark:bg-stone-800 rounded" />
        </div>
      </article>
    </main>
  );
}
