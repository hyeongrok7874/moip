import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const { replace } = useRouter();

  useEffect(() => {
    replace("/");
  }, []);

  return <></>;
}
