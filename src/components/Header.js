import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex justify-between text-lg items-center z-[20] flex-wrap border-solid border-2 border-sky-500 rounded-xl bg-gradient-to-l from-blue-300">
      <div>
        <img className="w-24 rounded-2xl" src="https://media.licdn.com/dms/image/v2/C4D0BAQFeP0T2C9Io9g/company-logo_200_200/company-logo_200_200/0/1630527219302?e=1736380800&v=beta&t=4DuGKbRoOGZsksvvSIsUwllcciPGDAhRrboC-Ep9OHg" />
      </div>
      <Nav />
    </div>
  );
};

export default Header;
