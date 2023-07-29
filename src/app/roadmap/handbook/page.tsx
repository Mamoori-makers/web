import { IconTitle } from '@/components/IconTitle';
import { PostCard } from '@/components/PostCard';
import { ROADMAP_STEPS } from '@/constants/roadmapData';
import { getAllPublishedPosts } from '@/lib/notion';

export default async function Handbook() {
  const allPosts = await getAllPublishedPosts();

  return (
    <div className="roadmap-container">
      <IconTitle data={ROADMAP_STEPS.step1} />
      <div className="my-5 flex flex-col gap-5 lg:my-8 lg:flex-row">
        {allPosts?.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </div>
  );
}
