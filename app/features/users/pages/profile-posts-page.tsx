import { DiscussionCard } from '~/features/community/ui/discussion-card';

export const meta = () => {
 return [{ title: 'User Posts | Wemake' }, { name: 'description', content: 'User posts' }];
};

const ProfilePostsPage = () => {
 return (
  <div className="flex flex-col gap-8">
   {Array.from({ length: 10 }).map((_, index) => (
    <DiscussionCard
     id={String(index)}
     key={index}
     title={`Post Title ${index + 1}`}
     author="John Doe"
     authorAvatarUrl="https://github.com/apple.png"
     category="productivity"
     postedAt="12 hours ago"
     expanded
     votes={10}
    />
   ))}
  </div>
 );
};

export default ProfilePostsPage;
