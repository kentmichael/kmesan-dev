import HumburgerMenu from "./components/humburger_menu";

export default function Home() {
  return (
    <main className="relative py-10 px-5">
      <HumburgerMenu />
      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
        Kent Michael E. San
      </code>
    </main>
  );
}
