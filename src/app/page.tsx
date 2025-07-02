import HumburgerMenu from "./components/humburger_menu";

export default function Home() {
  return (
    <>
      <main className="py-10 px-5">
        <HumburgerMenu />
        <div className="h-[600px] mt-7 rounded-tr-[50%] rounded-tl-2xl rounded-bl-[50%] rounded-br-2xl bg-[url(/images/profile.jpeg)] bg-cover bg-top"></div>
      </main>
    </>
  );
}
