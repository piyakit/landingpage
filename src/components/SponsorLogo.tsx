import adidas from "../assets/adidas.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import nike from "../assets/nike.png";
import samsung from "../assets/samsung.png";

const images = [google, nike, samsung, apple, adidas];

const SponsorLogo = () => {
  return (
    <div className="flex justify-between mt-10">
      {images.map((e, i) => (
        <img key={i} src={e} className="object-contain" />
      ))}
    </div>
  );
};

export default SponsorLogo;
