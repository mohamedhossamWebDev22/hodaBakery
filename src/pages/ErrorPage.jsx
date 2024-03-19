import React from "react";
import NaviBar from "../components/navBar";
import Foot from "../components/foot";
import Animator from "../components/Animator";

export default function () {
  return (
    <>
      <NaviBar />
      <Animator>
      <div className="my-5 py-5">
        <h1 className="font-title text-center fs-1 display-q">خطأ</h1>
      </div>
      </Animator>
      <Foot />
    </>
  );
}
