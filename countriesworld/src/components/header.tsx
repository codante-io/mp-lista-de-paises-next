import world from "../../public/world.png";

const Header = () => {
  return (
    <header className=" bg-slate-50  ">
      <div className=" flex flex-row ml-16 p-4 items-center gap-2">
        <img src={world.src} className="w-9 h-w-9"/>
        <h3>Countries Of World</h3>
      </div>
      
    </header>
  );
};

export default Header;
