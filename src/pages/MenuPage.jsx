import React from "react";
import NaviBar from "../components/navBar";
import Foot from "../components/foot";
import MenuCard from "../components/MenuCard";

import img1 from "../assets/menu/1.png"
import img2 from "../assets/menu/2.png"
import img3 from "../assets/menu/3.png"
import img4 from "../assets/menu/4.png"
import img5 from "../assets/menu/5.png"
import img6 from "../assets/menu/6.png"
import img7 from "../assets/menu/7.png"
import img8 from "../assets/menu/8.png"
import img9 from "../assets/menu/9.png"
import img10 from "../assets/menu/10.png"
import img11 from "../assets/menu/11.png"
import img12 from "../assets/menu/12.png"
import Animator from "../components/Animator";


export default function MenuPage() {
  return (
    <>
      <NaviBar />
      <Animator>
      <div className="bg-dark text-center text-light py-5">
        <h1 className="display-1 mt-5 pt-2 font-title border-bottom text-center mx-auto w-50">
          المنيو
        </h1>
        <div className="row px-2 w-100 mt-5 pt-5">
            <div className="col-6 col-lg-3">
              <MenuCard title="بسبوسة" price = "٦٠ج" src={img1}/>
            </div>
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="بسبوسة بالمكسرات" price = "٨٠ج" src={img2}/>
            </div>
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="كنافة" price = "٦٠ج" src={img3}/>
            </div>
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="كنافة بالمكسرات" price = "٨٠ج" src={img4}/>
            </div>
        </div>
        <div className="row px-2 w-100 mt-1">
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="كنافة بالمانجا" price = "٦٠ج" src={img5}/>
            </div>
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="كنافة بالنوتيلا" price = "٨٠ج" src={img6}/>
            </div>
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="زلابية" price = "٦٠ج" src={img7}/>
            </div>
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="زلابية بالسكر" price = "٨٠ج" src={img8}/>
            </div>
        </div>
        <div className="row px-2 w-100 mt-1">
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="زلابية بالنوتيلا" price = "٦٠ج" src={img9}/>
            </div>
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="أم علي" price = "٨٠ج" src={img10}/>
            </div>
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="رز بلبن" price = "٦٠ج" src={img11}/>
            </div>
            <div className="col-6 col-lg-3 mt-1">
              <MenuCard title="صوابع زينب" price = "٨٠ج" src={img12}/>
            </div>
        </div>
      </div>
      </Animator>
      <Foot />
    </>
  );
}
