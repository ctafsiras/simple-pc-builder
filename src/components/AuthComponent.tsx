import { Button } from "antd";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthComponent() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Button type="primary" danger onClick={() => signOut()}>
        Sign out
      </Button>
    );
  }
  return (
    <Button type="primary" onClick={() => signIn()}>
      Sign in
    </Button>
  );
}
