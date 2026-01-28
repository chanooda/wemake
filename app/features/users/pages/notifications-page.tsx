import { PageTitle } from '~/common/components/page-title';
import { LINK, metadata } from '~/common/config/sitemap';
import { NotificationCard } from '../ui/notification-card';

export const meta = () => {
 return metadata[LINK.MY_NOTIFICATIONS];
};

const NotificationsPage = () => {
 return (
  <div>
   <PageTitle title="Notifications" />
   <div className="flex flex-col gap-4">
    {Array.from({ length: 10 }, (_, i) => (
     <NotificationCard
      key={i}
      avatarUrl="https://github.com/chanooda.png"
      avatarFallback="CN"
      userName="Steve Jobs"
      message="followed you"
      timestamp="2 days ago"
      seen
     />
    ))}
   </div>
  </div>
 );
};

export default NotificationsPage;
