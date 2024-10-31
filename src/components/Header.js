import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex justify-between text-lg items-center z-[20] flex-wrap border-solid border-2 border-sky-500 rounded-xl bg-gradient-to-l from-blue-300">
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
