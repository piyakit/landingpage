import client from "../assets/client.png";
import StarRatings from 'react-star-ratings';

const data = [
  {
    id: 1,
    desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    img: client,
    start: 5,
    name: "Gemma Nolen",
    company: "Google",
  },
  {
    id: 2,
    desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    img: client,
    start: 5,
    name: "Gemma Nolen",
    company: "Google",
  },
  {
    id: 3,
    desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    img: client,
    start: 5,
    name: "Gemma Nolen",
    company: "Google",
  },
  {
    id: 4,
    desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    img: client,
    start: 5,
    name: "Gemma Nolen",
    company: "Google",
  },
  {
    id: 5,
    desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    img: client,
    start: 5,
    name: "Gemma Nolen",
    company: "Google",
  },
  {
    id: 6,
    desc: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    img: client,
    start: 5,
    name: "Gemma Nolen",
    company: "Google",
  },
];

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="font-bold text-3xl">Testimonial</h1>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {data.map((e) => (
          <div key={e.id} className="bg-[#F3F3F3] p-10 rounded-3xl">
            <p>{e.desc}</p>
            <div className="flex mt-4">
              <div className="">
                <img src={e.img} width={50} height={50} />
              </div>
              <div className="flex flex-col ml-4">
                <StarRatings
                  starRatedColor='blue'
                  numberOfStars={e.start}
                  name="rating"
                />
                <p className="mt-2 font-bold">{e.name}</p>
                <p>{e.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
