import React from "react";
import { AiOutlineClose, AiOutlineCheckCircle } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalFalse } from "../redux/singleMovie/movieSlice";
import ReactPlayer from "react-player";
import { add, remove } from "../redux/myList/myListSlice";

const Modal = () => {
  const modal = useSelector((state) => state.movie.modal);
  const details = useSelector((state) => state.movie.movie);
  const myList = useSelector((state) => state.myList.myList);
  const dispatch = useDispatch();

  const index = details?.videos?.results?.findIndex(
    (video) => video.type === "Trailer"
  );

  const existingMovie = myList.find((i) => i.id === details.id);
  console.log(existingMovie);

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
          {details?.videos?.results && (
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              playing={modal}
              url={`https://www.youtube.com/watch?v=${details.videos.results[index]?.key}`}
            />
          )}
        </div>

        <div className="flex bg-[#141414] p-5">
          <div className="w-[60%] lg:w-[70%] h-full ">
            <div className="flex items-center">
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

              {existingMovie ? (
                <AiOutlineCheckCircle
                  className="add"
                  onClick={() => dispatch(remove(details))}
                />
              ) : (
                <IoMdAddCircleOutline
                  className="add"
                  onClick={() => dispatch(add(details))}
                />
              )}
            </div>
            <p className="text-gray-400 mt-5 ">{details?.overview}</p>
          </div>
          <div className="w-[30%] h-full p-5 lg:p-10 mt-5 lg:mt-0 space-y-3">
            <p className="text-gray-500">
              Genre:{" "}
              {details?.genres?.map((detail) => (
                <span key={detail.id} className="text-gray-400">
                  {detail.name},{" "}
                </span>
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
