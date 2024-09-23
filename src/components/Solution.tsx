import productDesign from "../assets/product-design.png";
import visualDesign from "../assets/visual-design.png";
import artDirection from "../assets/art-direction.png";

const data = [
  {
    id: 1,
    img: productDesign,
    title: "Product Design",
    desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    id: 2,
    img: visualDesign,
    title: "Visual Design",
    desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
  {
    id: 3,
    img: artDirection,
    title: "Art Direction",
    desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  },
];

const Solution = () => {
  return (
    <div className="mt-32 flex justify-around">
      {data.map((e) => (
        <div key={e.id} className="flex flex-col justify-center items-center">
          <img src={e.img} width={124} height={124} />
          <p className="font-bold text-2xl mt-16 mb-10">{e.title}</p>
          <p className="w-[20rem] text-center">{e.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Solution;
