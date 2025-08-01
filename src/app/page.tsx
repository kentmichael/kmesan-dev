// import HumburgerMenu from "./components/humburger_menu";
import ContactInfo from "./components/contact_info";
import MyProjects from "./components/my_projects";

export default function Home() {
  return (
    <>
      <main className="py-10 px-5">
        {/* <HumburgerMenu /> */}
        <div className="h-[600px] mt-7 rounded-tr-[50%] rounded-tl-2xl rounded-bl-[50%] rounded-br-2xl bg-[url(/images/profile.jpeg)] bg-cover bg-top"></div>
        <div className="my-4 mb-[36px] flex flex-col gap-3">
          <h1 className="text-md font-bold mt-5">Kent Michael San</h1>
          <p className="text-2xl font-semibold">
            Full Stack <span className="text-[#3ad353]">Developer</span>
          </p>
        </div>
        <hr className="text-gray-500 opacity-50" />
        <ContactInfo />
        <hr className="text-gray-500 opacity-50" />
        <MyProjects />
        <hr className="text-gray-500 opacity-50" />
      </main>
    </>
  );
}
