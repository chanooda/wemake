import { Form, Link } from 'react-router';
import { TextField } from '~/common/components/textfield';
import { Button } from '~/common/components/ui/button';
import { LINK, metadata } from '~/common/config';

export const meta = () => {
 return metadata[LINK.AUTH_JOIN];
};

const JoinPage = () => {
 return (
  <div className="flex flex-col items-center justify-center gap-8">
   <Button asChild variant="ghost" className="absolute top-8 right-8">
    <Link to={LINK.AUTH_LOGIN}>Login</Link>
   </Button>
   <h1 className="text-2xl font-bold">Create an account</h1>
   <Form className="w-full max-w-sm">
    <div className="flex flex-col gap-4">
     <TextField
      label="Name"
      placeholder="Enter your name"
      description="Enter your name"
      required
      name="name"
      id="name"
     />
     <TextField
      label="Username"
      placeholder="i.e wemake"
      description="Enter your username"
      required
      name="username"
      id="username"
     />
     <TextField
      label="Email"
      placeholder="i.e wemake@gmail.com"
      description="Enter your email"
      required
      name="email"
      id="email"
      type="email"
     />
     <TextField
      label="Password"
      placeholder="Enter your password"
      description="Enter your password"
      required
      name="password"
      id="password"
      type="password"
     />
    </div>
    <Button className="mt-8 w-full">Create account</Button>
   </Form>
  </div>
 );
};

export default JoinPage;
