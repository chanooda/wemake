export const meta = () => {
 return [{ title: 'Profile | Wemake' }, { name: 'description', content: 'User profile' }];
};

const ProfilePage = () => {
 return (
  <div className="flex flex-col gap-8">
   <div className="flex flex-col gap-4">
    <h2 className="text-lg font-bold">Headline</h2>
    <p className="text-muted-foreground">
     A brief description of your professional background and career goals.
    </p>
   </div>
   <div className="flex flex-col gap-4">
    <h2 className="text-lg font-bold">About</h2>
    <p className="text-muted-foreground">
     I am a software engineer with a passion for building scalable and efficient systems.
    </p>
   </div>
  </div>
 );
};

export default ProfilePage;
