import discord from "../assets/discord.png";
import facebook from "../assets/facebook.png";
import dribble from "../assets/dribbble.png";
import instagram from "../assets/nstagram.png";
import behance from "../assets/behance.png";

const images = [discord, facebook, dribble, instagram, behance];

const Footer = () => {
  return (
    <footer className="flex mt-20 mb-10 justify-between">
      <div className="flex flex-col">
        <p className="font-bold text-xl">Lets work together</p>
        <p className="w-[40rem] mt-10">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com This is a template Figma file, turned into code
          using Anima. Learn more at AnimaApp.com
        </p>
        <div className="flex mt-10">
          {images.map((e, i) => (
            <img key={i} src={e} width={36} height={36} className="mr-10" />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start w-[30rem]">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#F3F3F3] py-3 px-3 w-full"
        />
        <input
          type="text"
          placeholder="Email"
          className="bg-[#F3F3F3] py-3 px-3 mt-2 w-full"
        />
        <button className="bg-[#2D2D2D] mt-4 text-white px-8 py-4">Submit</button>
      </div>
    </footer>
  );
};

export default Footer;
