import { fbase } from "../lib/Firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Hackers = () => {
  const auth = getAuth(fbase);
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) router.replace("/");
  }, [router, user]);

  return <></>;
};

export default Hackers;
