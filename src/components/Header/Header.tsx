import { NavList } from "./NavList/NavList";

export const Header = () => {
  return (
    <header className="bg-sky-500 text-white flex items-center justify-between py-4 px-14">
      <NavList />
    </header>
  );
};
