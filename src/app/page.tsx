import HumburgerMenu from "./components/humburger_menu";

export default function Home() {
  return (
    <>
      <main className="py-10 px-5">
        <HumburgerMenu />
        <div className="h-[600px] mt-7 rounded-tr-[50%] rounded-tl-2xl rounded-bl-[50%] rounded-br-2xl bg-[url(/images/profile.jpeg)] bg-cover bg-top"></div>
        <div className="my-4 flex flex-col gap-5">
          <h1 className="text-xl font-bold mt-5">Hello!</h1>
          <p className="text-4xl font-semibold">
            I&apos;m Kent Michael <br />
            <span className="block mt-2 text-4xl font-semibold text-primary">
              I am a :changing text:
            </span>
          </p>
        </div>
      </main>
    </>
  );
}
