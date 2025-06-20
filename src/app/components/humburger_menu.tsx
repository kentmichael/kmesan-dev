export default function HumburgerMenu() {
  return (
    <button className="fixed top-10 right-5 menu-button flex flex-col justify-center items-center space-y-1 lg:hidden cursor-pointer hover:bg-black/[.05] dark:hover:bg-white/[.06] rounded-full p-4">
      <span className="w-5 h-1 bg-black dark:bg-white rounded-full"></span>
      <span className="w-3 h-1 bg-black dark:bg-white rounded-full"></span>
      <span className="w-5 h-1 bg-black dark:bg-white rounded-full"></span>
    </button>
  );
}
