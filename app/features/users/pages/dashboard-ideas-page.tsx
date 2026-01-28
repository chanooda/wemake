import { IdeaCard } from '~/features/ideas/ui/idea-card';

export const meta = () => {
 return [
  { title: 'Dashboard Ideas | Wemake' },
  { name: 'description', content: 'Your ideas dashboard' },
 ];
};

const DashboardIdeasPage = () => {
 return (
  <div className="flex w-full flex-col gap-8">
   <h1 className="text-4xl font-bold">Claimed Ideas</h1>
   <div className="grid grid-cols-4 gap-4">
    {Array.from({ length: 10 }, (_, i) => (
     <IdeaCard
      key={i}
      id={String(i)}
      title={`Idea Title ${i + 1}`}
      viewsCount={100 + i}
      postedAt="12 hours ago"
      likesCount={10 + i}
      claimed={false}
     />
    ))}
   </div>
  </div>
 );
};

export default DashboardIdeasPage;
