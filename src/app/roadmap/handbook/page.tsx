import { IconTitle } from '@/components/IconTitle';
import { PostCard } from '@/components/PostCard';
import { ROADMAP_STEPS } from '@/constants/textData/roadmapData';
import { getAllPublishedPosts } from '@/libs/notion';

export default async function Handbook() {
  const allPosts = await getAllPublishedPosts();

  return (
    <div className="roadmap-container">
      <IconTitle data={ROADMAP_STEPS.step1} />
      <div className="my-5 flex flex-col flex-wrap gap-5 sm:flex-row lg:my-8">
        {allPosts?.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}
