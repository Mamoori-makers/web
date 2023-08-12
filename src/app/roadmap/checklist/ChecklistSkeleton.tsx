export const ChecklistSkeleton = () => {
  return (
    <div role="status" className="my-5 max-w-sm animate-pulse">
      <div className="mb-4 h-4 w-full rounded-full bg-gray-200"></div>
      <div className="mb-4 h-6 max-w-[240px] rounded-full bg-gray-200"></div>
      <div className="mb-4 h-6 rounded-full bg-gray-200"></div>
      <div className="mb-4 h-6 max-w-[330px] rounded-full bg-gray-200"></div>
      <div className="mb-4 h-6 max-w-[300px] rounded-full bg-gray-200"></div>
      <div className="mb-4 h-6 max-w-[270px] rounded-full bg-gray-200"></div>
      <div className="mb-4 h-6 max-w-[300px] rounded-full bg-gray-200"></div>
      <div className="mb-4 h-6 max-w-[250px] rounded-full bg-gray-200"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
