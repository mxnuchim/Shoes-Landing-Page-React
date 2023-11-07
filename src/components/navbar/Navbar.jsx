import logo from "../../assets/logo.svg";
import search from "../../assets/searchicon.svg";
import "./Navbar.css";

export default function Navbar() {
  const navigation = [
    { title: "Home" },
    { title: "Shoes" },
    { title: "Contact Us" },
    { title: "About Us" },
  ];

  return (
    <nav className="w-full px-[150px]">
      <div className="flex justify-between items-center pt-[30px] pr-4">

        <a href="" className="flex items-end gap-2 w-[165px] h-[90px]">
          <h1 className="text-[27px] font-[900] text-[#cf9c5d] uppercase micro">
            Micro
          </h1>
          <span className="logo">
            <img
              src={logo}
              alt=""
              width={59}
              height={59}
              className="ml-[18px]"
            />
            <h1 className="text-[27px] font-[900] text-[#cf9c5d] uppercase shoe">
              Shoes
            </h1>
          </span>
        </a>

        <div className="flex space-x-[80px]">
          <ul className="flex justify-center items-center space-x-[80px]">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="  text-[#fff]  text-[15px] font-medium uppercase font-Poppins"
                >
                  <a href="">{item.title}</a>
                </li>
              );
            })}
          </ul>

          <div className="w-[290px] h-[34px] rounded-[48px] border border-[#CF9C5D] flex justify-between px-2 items-center serachbar">
            <input
              type="text"
              className="w-[260px] h-[34px] rounded-[48px] bg-transparent focus:outline-none pl-2 text-white"
            />
            <img src={search} alt="" width={24} height={24} />
          </div>

        </div>

      </div>
    </nav>
  );
}
