import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-16 space-y-2">
      <h1 className="text-2xl">CrittoUtil</h1>
      <div className="flex flex-row space-x-2">
        <Link className="btn btn-primary" href={""}>Google Playstore</Link>
        <Link className="btn btn-secondary" href={"crittoutil/privacy-policy"}>Privacy Policy App</Link>
      </div>
    </main>
  );
}
