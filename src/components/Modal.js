import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalFalse } from "../redux/singleMovie/movieSlice";

const Modal = () => {
  const modal = useSelector((state) => state.movie.modal);
  const details = useSelector((state) => state.movie.movie);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        !modal && "hidden"
      } fixed inset-0 bg-black/50 flex justify-center text-sm lg:text-base `}
    >
      <div className="w-full h-screen lg:max-w-[1024px] lg:h-[90vh]  lg:mt-12">
        <div className="w-full lg:w-[1024px] h-[550px] bg-black relative">
          <div
            className="modal-close"
            onClick={() => dispatch(toggleModalFalse())}
          >
            <AiOutlineClose />
          </div>
        </div>

        <div className="flex bg-[#141414] p-5">
          <div className="w-[60%] lg:w-[70%] h-full ">
            <div className="flex ">
              <span
                className={`${
                  details?.vote_average < 7
                    ? "text-orange-300"
                    : "text-green-400"
                } font-bold mr-5`}
              >
                {details?.vote_average}
              </span>
              <span className="text-gray-400">{details?.release_date}</span>
            </div>
            <p className="text-gray-400 mt-5 ">{details?.overview}</p>
          </div>
          <div className="w-[30%] h-full p-5 lg:p-10 mt-5 lg:mt-0 space-y-3">
            <p className="text-gray-500">
              Genre:{" "}
              {details?.genres?.map((detail) => (
                <span className="text-gray-400">{detail.name}, </span>
              ))}
            </p>
            <p className="text-gray-500">
              Original language:{" "}
              <span className="text-gray-400">
                {details?.original_language}
              </span>
            </p>
            <p className="text-gray-500">
              Total votes:{" "}
              <span className="text-gray-400">{details?.vote_count}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
