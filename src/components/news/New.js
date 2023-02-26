import React from 'react';
import retro from '../../assets/images/image-retro-pcs.jpg';
import keyBoard from '../../assets/images/image-top-laptops.jpg';
import game from '../../assets/images/image-gaming-growth.jpg';
import './news.css';

function New() {
  return (
    <>
      <div className=" flex mt-5 w-full justify-center items-center px-5 mx-auto mb-3 footer ">
        <div className=" flex ">
          <img src={retro} alt="pcs" />

          <div className=" items-center">
            <span className=" text-gray-400 text-5xl px-2 ml-2 font-semibold">
              01
            </span>
            <h4 className=" font-bold capitalize px-3 text-lg mt-3  hover:text-red-500 cursor-pointer">
              Reviving retro pc
            </h4>
            <p className=" text-gray-400 items-center px-3 mt-3">
              What happens when old Pcs are given mdern upgrades ?
            </p>
          </div>
        </div>
        <div className=" flex ">
          <img src={keyBoard} alt="Key" />

          <div className="items-center">
            <span className=" text-gray-400 text-5xl px-2 ml-2 font-semibold ">
              02
            </span>
            <h4 className=" font-bold capitalize px-3 text-lg mt-3 hover:text-red-500">
              Top 20 Labtops 2022
            </h4>
            <p className=" text-gray-400 items-center px-3 mt-3  ">
              Our best picks for various needs and budgets
            </p>
          </div>
        </div>
        <div className=" flex ">
          <img src={game} alt="pcs" />

          <div className=" items-center">
            <span className=" text-gray-400 text-5xl px-2 ml-2 font-semibold">
              03
            </span>
            <h4 className=" font-bold capitalize px-3 text-lg mt-3  hover:text-red-500 cursor-pointer">
              The Growth of Gaming
            </h4>
            <p className=" text-gray-400 items-center px-3 mt-3">
              How the pandemic has spread fresh opportunities
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;
