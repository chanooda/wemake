import { Github, Lock, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { Separator } from '~/common/components/ui/separator';
import { TypographyMuted } from '~/common/components/ui/typography';
import { LINK } from '~/common/config';

export const AuthButtons = () => {
 return (
  <div className="flex w-full flex-col items-center justify-center gap-2">
   <Separator />
   <TypographyMuted>OR CONTINUE WITH</TypographyMuted>
   <div className="flex w-full flex-col items-center justify-center gap-2">
    <Button className="w-full" variant="outline" asChild>
     <Link to={LINK.AUTH_SOCIAL_START('kakao')}>
      <MessageCircle /> Kakao Talk
     </Link>
    </Button>
    <Button className="w-full" variant="outline" asChild>
     <Link to={LINK.AUTH_SOCIAL_START('github')}>
      <Github /> Github
     </Link>
    </Button>
    <Button className="w-full" variant="outline" asChild>
     <Link to={LINK.AUTH_OTP_START}>
      <Lock /> OTP
     </Link>
    </Button>
   </div>
  </div>
 );
};
