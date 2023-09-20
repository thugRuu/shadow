import { signIn, signOut, useSession } from "next-auth/react";

export function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 bg-gradient-to-tr from-[#803bad] to-[#5006bf] px-10 py-3 font-semibold text-gray-200 no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
