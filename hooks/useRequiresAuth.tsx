import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useRequiresAuth() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/login");
      }
    }
  }, [router]);
}
export function useLogin() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        router.push("/property");
      }
    }
  }, [router]);
}
