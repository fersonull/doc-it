import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md bg-white border-s border-orange-100/90 rounded-sm p-10">
      {children}
    </div>
  );
}
