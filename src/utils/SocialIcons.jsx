import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center gap-[14px] text-[#C5C5C5]">
      <div className="flex flex-col gap-[11px] text-[20px] ">
        <FaTwitter />
        <IoLogoYoutube />
        <FaFacebookF />
      </div>
      <div className="w-[2px] h-[91px] bg-[#C5C5C5]" />
      <p className="verticleText text-[20px] font-Poppins font-medium">
        Follow Me
      </p>
    </div>
  );
};

export default SocialIcons;
