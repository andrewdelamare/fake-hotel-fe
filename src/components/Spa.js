import img1 from "../images/chelsea-shapouri-r40EYKVyutI-unsplash.jpg";
import img2 from "../images/huum-Ruso6EXMC5U-unsplash.jpg";
import img3 from "../images/jared-rice-PibraWHb4h8-unsplash.jpg";
import img4 from "../images/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg";
import img5 from "../images/li-yang-a8iCZvtrHpQ-unsplash.jpg";
import img6 from "../images/ralph-ravi-kayden-CsqHFS6ZXfM-unsplash.jpg";
import { Link } from "react-router-dom";

const Card = ({ title, desc, className, img, linkLoc }) => (
  <div className={className + " relative place-content-center flex flex-col"}>
    <Link
      to={linkLoc}
      className={
        "w-auto h-full mr-4 mb-4 place-content-center bg-cover bg-[center_left_0rem] flex flex-col z-0 contrast-50 " +
        img
      }
    />
    <div className=" opacity-100 z-10 blur-none absolute self-center text-white">
      <div className="text-3xl font-serif">{title}</div>
      <div>{desc}</div>
    </div>
  </div>
);

export const Spa = () => {
  return (
    <div className="mt-[96px]">
      <div className="inline-flex w-full h-full overflow-hidden mx-4 mt-6">
        <img src={img3} alt="pic" className="object-cover h-600 w-2/3" />
        <div className="self-center w-1/3 mx-10 bg-stone-200 p-8">
          <h1 className=" w-full text-4xl font-serif pb-3">
            Lay back and relax in our luxury spa.
          </h1>
          <p className="text-justify font-sans text-xl">
            Our spa offers everything you need to unwind. Take a swim in our
            indoor pool, or warm up in our jacuzzi. Experience an authentic
            Finnish Sauna, or get a massage from our expert masseuse. We use and
            offer to you locally produced cosmetics and beauty products, all of
            which use ethically sourced and environmentally responsible
            ingredients.
          </p>
        </div>
      </div>
      <div className="">
        <div className="block w-full h-auto pt-4 pl-4 pb-4 relative ">
          <Card
            className="w-2/5 h-[340px] float-left relative"
            title="Finnish Sauna"
            desc="The pinacle of sauna"
            linkLoc="/spa"
            img="bg-spa2  bg-[center_48rem]"
          />
          <Card
            className="w-3/5 h-[360px] float-right relative"
            title="Local Products"
            desc="Locally produced, ethical ingrediants"
            linkLoc="/spa"
            img="bg-spa1 bg-cover text-white"
          />
          <Card
            className="w-2/5 h-[300px] float-left relative"
            title="Indoor Pool"
            desc="No matter the weather, enjoy a swim!"
            linkLoc="/spa"
            img="bg-spa6 bg-cover bg-[center_left_29rem] text-white "
          />
          <Card
            className="w-3/5 h-[280px] float-right relative"
            title="Expert Masseuse"
            desc="Leave all your burdens behind"
            linkLoc="/spa"
            img="bg-spa4 bg-cover bg-[right_17rem] text-white "
          />
        </div>
      </div>
      <div className="h-400">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
