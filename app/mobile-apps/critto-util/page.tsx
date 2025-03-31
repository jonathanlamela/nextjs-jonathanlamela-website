import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <h1 className="text-2xl">CrittoUtil</h1>
        <Link className="text-xl" href={""}>Google Playstore</Link>
        <Link className="text-xl" href={"./privacy-policy"}>Privacy Policy App</Link>
      </main>

    </div>
  );
}
