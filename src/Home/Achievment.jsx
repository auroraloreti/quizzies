export default function Achievement() {
  return (
    <>
      <div className=" bg-coral  rounded-full w-100% h-60 mb-6 flex flex-row">
        <div className="flex items-center ">
          <div className=" w-44 h-44 bg-lilac rounded-full ml-8 mt-3"></div>
        </div>
        <div className=" ml-7 mt-14 text-xl ">
          <p className="text-white mb-2 text-3xl"> NOVIZIO DEI QUIZ </p>
          <p className="text-white">completa 2 quiz</p>
          <div className="progress-bar bg-white rounded-full h-4 mt-8  ">
            <div
              className="progress-fill bg-lilac rounded-full h-4 "
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
