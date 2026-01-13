import AddAutoLogo from"../../assets/AddAuto.jpg"
const Logo = () => {
  return (
    <div className="flex place-items-end justify-evenly pl-3">
      <img src={AddAutoLogo}
        className="w-20 h-20 rounded-full"
        alt="logo"
      />
      <div className="font-medium font-serif text-2xl uppercase">Add-Auto Technology</div>
    </div>
  );
};

export default Logo;
