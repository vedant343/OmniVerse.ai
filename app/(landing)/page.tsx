import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      Landing page
      <div>
        <Link href="/sign-up">
          <Button>Login</Button>
        </Link>
        <Link href="sign-in">
          <Button>SignIn</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
