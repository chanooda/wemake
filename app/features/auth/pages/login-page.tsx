import { Form, Link } from "react-router";
import { TextField } from "~/common/components/textfield";
import { Button } from "~/common/components/ui/button";
import { LINK, metadata } from "~/common/config";
import { AuthButtons } from "../ui/auth-buttons";

export const meta = () => {
  return metadata[LINK.AUTH_JOIN];
};

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Button asChild variant="ghost" className="absolute top-8 right-8">
        <Link to={LINK.AUTH_JOIN}>Join</Link>
      </Button>
      <div className="flex w-full max-w-sm flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <Form className="w-full">
          <div className="flex flex-col gap-4">
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
          <Button className="mt-8 w-full">Login</Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
};

export default LoginPage;
