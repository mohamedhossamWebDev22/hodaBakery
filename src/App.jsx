import { useState } from "react";

import "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import NaviBar from "./components/navBar";
import Foot from "./components/foot";

import img1 from "./assets/2.jpeg";
import img2 from "./assets/4.jpeg";
import cause1 from "./assets/5.jpeg";
import cause2 from "./assets/6.jpeg";
import cause3 from "./assets/7.jpeg";
import Animator from "./components/Animator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NaviBar />

      <Animator>
      {/* first */}
      <div className="first py-5">
        <div className="content my-5 py-5 text-light">
          <h1 className="display-1 mb-5 font-title text-warning text-shadow">
            حلواني الهدى
          </h1>
          <br />
          <p dir="rtl" className="mt-2 text-shadow">
            <b>نظافة</b>، <b>مذاق لذيذ</b>، <b>جودة</b> كل هذا ستجده لدينا
          </p>
          <br />
          <a className="text-light text-shadow" href="#after">
            شوف أكتر
          </a>
        </div>
      </div>

      {/* after */}
      <div className="second" id="after">
        <div className="text-center my-5 py-5">
          <h1 dir="rtl" className="display-1 font-title">
            ليه تيجي ؟
          </h1>
          <div className="row pt-5 text-center mx-0">
            <div className="col-lg-3 text-center">
              <img src={cause1} alt="reason 1" className="rounded" />
            </div>
            <div className="col-lg-9 text-center">
              <p dir="rtl" className="fs-5">
                حلواني الهدى يقع في منطقة المعز القديمة و فرعه التاني في وسط
                البلد، وهما منطقتين تاريخية ذات جمال فريد. الشوارع الضيقة
                والمباني القديمة تعطيك إحساسًا بالعودة إلى الماضي. يمكنك التجول
                في أزقتها واستكشاف الحياة اليومية للسكان المحليين.
              </p>
            </div>
          </div>
          <div className="row pt-5 text-center mx-0">
            <div className="col-lg-9 text-center">
              <p dir="rtl" className="fs-5">
                حلواني الهدى مشهور بجودة طعامه. يقدم مجموعة متنوعة من الأطباق
                المصرية اللذيذة، مثل الكبدة والكشري والفول والطعمية. ستجد هناك
                أيضًا الحلويات المصرية الشهيرة مثل البسبوسة والقطايف و لقمة
                القاضي و صوابع زينب و أم علي.
              </p>
            </div>
            <div className="col-lg-3 text-center">
              <img src={cause2} alt="reason 2" className="rounded" />
            </div>
          </div>
          <div className="row pt-5 text-center mx-0">
            <div className="col-lg-3 text-center">
              <img src={cause3} alt="reason 3" className="rounded in-sh" />
            </div>
            <div className="col-lg-9 text-center">
              <p dir="rtl" className="fs-5">
                في حلواني الهدى، يعمل الطهاة بشطارة ومهارة. يتميزون بتحضير
                الأطعمة بأسرع وقت ممكن دون التخلي عن الجودة. ستجد هناك تنوعًا في
                القائمة واهتمامًا بتفاصيل الطهي. باختصار، حلواني الهدى هو مكان
                يجمع بين الجمال التاريخي والطعام اللذيذ والمهارة في الطهي. إذا
                كنت في القاهرة، فلا تفوت فرصة زيارته!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third */}
      <div className="third">
        <div className="py-5 my-5 text-light text-center">
          <h1 className="display-1 font-title">هتلاقي أفضل الأصناف</h1>
          <p dir="rtl" className="mt-5 text-shadow">
            <b>بسبوسة</b>، <b>كنافة</b>، <b>زلابية</b> و أكتر كمان
          </p>
        </div>
      </div>

      {/* four */}
      <div className="four my-3">
        <div className="row mx-0">
          <div className="col-lg-6"><img id="firstImg" className="rounded m-1" src={img1} alt="image" /></div>
          <div className="col-lg-6"><img className="rounded m-1" src={img2} alt="image" /></div>
        </div>
      </div>

      {/* five */}
      <div className="five">
        <div className="py-5 mt-5 text-light text-center bg-dark">
          <h1 className="font-title my-2 display-1">المنيو</h1>

          <Link to="/menu">
            <Button variant="outline-warning" className="my-4 fs-3">شوف المنيو</Button></Link>
        </div>
      </div>

      </Animator>
      {/* footer */}
      <Foot />
    </>
  );
}

export default App;
