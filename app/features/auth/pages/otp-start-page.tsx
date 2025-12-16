import { Form } from "react-router";
import { TextField } from "~/common/components/textfield";
import { Button } from "~/common/components/ui/button";
import { TypographyMuted } from "~/common/components/ui/typography";
import { LINK, metadata } from "~/common/config";

export const meta = () => {
  return metadata[LINK.AUTH_OTP_START];
};

const OtpStartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Login in with OTP</h1>
        <TypographyMuted>
          We will send you 4-digit code to your email
        </TypographyMuted>
      </div>
      <Form className="w-full max-w-sm">
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
        </div>
        <Button className="mt-8 w-full">Send OTP</Button>
      </Form>
    </div>
  );
};

export default OtpStartPage;
