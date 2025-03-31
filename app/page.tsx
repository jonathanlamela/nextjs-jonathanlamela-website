import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow justify-center items-center px-16">
      <h1 className="text-4xl">Jonathan La Mela</h1>
      <div className="divider"></div>
      <div className="flex flex-col space-x-2 space-y-2 text-center">
        <h2 className="text-2xl">Mobile apps</h2>
        <div className="flex flex-row items-center justify-center">
          <Link className="btn" href="/mobile-apps/crittoutil">CrittoUtil</Link>
        </div>
      </div>
    </main>
  );
}
