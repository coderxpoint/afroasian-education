import { Metadata } from "next";
import LoginPage from "./_components/LoginForm";

export const metadata: Metadata = {
  title: "Afroasian Education | Login",
  description:
    "Login to YourAppName to access your account and manage your data.",
};

export default function Login() {
  return (
    <div className="flex gap-20 justify-center items-center h-screen">
      <LoginPage />
    </div>
  );
}
