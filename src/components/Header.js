const Header = () => {
  return (
    <div className="flex justify-between items-center mt-3 mx-3 rounded-xl bg-gradient-to-l from-blue-400">
      <div>
        <img className="w-24" src="https://media.licdn.com/dms/image/v2/C4D0BAQFeP0T2C9Io9g/company-logo_200_200/company-logo_200_200/0/1630527219302?e=1736380800&v=beta&t=4DuGKbRoOGZsksvvSIsUwllcciPGDAhRrboC-Ep9OHg" />
      </div>
      <div>
        <ul className="flex">
          <li className="m-2 p-2">Home</li>
          <li className="m-2 p-2">Projects</li>
          <li className="m-2 p-2">Contact Us</li>
          <li className="m-2 p-2">Store</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
