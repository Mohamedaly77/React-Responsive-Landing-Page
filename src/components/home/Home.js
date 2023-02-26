import React from 'react';
import image from '../../assets/images/image-web-3-desktop.jpg';
import New from '../news/New';
import './home.css';

function Home() {
  return (
    <>
      <div>
        <div className="flex w-full px-3 py-2 home-page">
          <div className=" flex gap-4 px-5 home-page-col ">
            <div className=" w-9/12">
              <div>
                <img src={image} alt="desktop" className=" w-full" />
                <div className=" flex justify-between mt-3 items-center paragraph">
                  <h1 className=" text-5xl font-bold leading-20 md:w-full sm:w-full">
                    The Bright <br /> Future of <br /> Web 3.0 ?
                  </h1>
                  <div className=" md:w-full ">
                    <p className=" text-gray-700 items-center mt-3">
                      We dive into the next evolution of web that <br /> claims
                      to put the power of the platforms back <br /> into the
                      hands of the people.But its really <br /> fullfilling its
                      promise
                    </p>
                    <div className=" flex justify-center items-center w-full mt-5  ">
                      <button className=" bg-red-500 text-white px-3 py-1.5 rounded-lg">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-3/12 bg-black h-full px-4 py-6 mt-0 mb-3 side_bar">
              <div>
                <h3 className="text-yellow-600 text-4xl  flex items-center justify-start font-bold mt-6 mb-7 ">
                  New
                </h3>
                <p className=" text-white font-normal mt-4 text-xl capitalize hover:text-yellow-500 cursor-pointer">
                  Hydrogen vs Electric Cars
                </p>
                <p className=" text-gray-400 mt-3 capitalize mb-3">
                  Will Hydrogen Fueled Cars Ever Catch up TO EVs?
                </p>
                <div className=" mt-6 mr-2 ml-2 bg-slate-300 ">
                  <hr className=" bg-gray-200" />
                </div>
              </div>

              <div className=" flex justify-start  flex-col mt-3">
                <p className=" text-white font-normal mt-4 text-xl capitalize  hover:text-yellow-500 cursor-pointer">
                  The downside for AI Artistery
                </p>
                <p className=" text-gray-400 mt-3 flex justify-start items-center capitalize mb-3">
                  What are the possible Adverse Effects of possible on demand AI
                  image genaeration{' '}
                </p>
                <div className=" mt-6 mr-2 ml-2 bg-slate-300 ">
                  <hr className=" bg-gray-200" />
                </div>
              </div>
              <div>
                <p className=" text-white font-normal text-xl mt-4 capitalize  hover:text-yellow-500 cursor-pointer">
                  Is VC funding drying up ?
                </p>
                <p className=" text-gray-400 flex justify-start items-center mt-2 capitalize mb-3">
                  Private Funding by VC id down by 50% <br />
                  YOY .We took a look at what that means
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <New />
    </>
  );
}

export default Home;
