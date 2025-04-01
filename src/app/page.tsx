import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-6rem)] gap-y-4">
      <p className="text-2xl text-gray-600">Welcome to MatchMe App</p>
      <Link
        href={"/login"}
        className="border font-semibold text-2xl text-gray-400 px-3 py-1 rounded-full cursor-pointer"
      >
        Get started!
      </Link>
    </div>
  );
}
