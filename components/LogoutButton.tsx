"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/login");
  };

  return (
    <button onClick={handleLogout} className="w-full bg-red-600 text-white p-2 rounded mt-4">
      Logout
    </button>
  );
}
