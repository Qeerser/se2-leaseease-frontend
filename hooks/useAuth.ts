import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login"); // Redirect ไปหน้า login ถ้าไม่ได้ล็อกอิน
    }
  }, [isAuthenticated, router]);

  return { user, isAuthenticated };
}