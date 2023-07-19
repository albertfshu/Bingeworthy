import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useGetAccountQuery } from "./store/accountSlice";
import { useGetCommentsQuery, useCreateCommentMutation } from "./store/dataSlice";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { movie_id } = useParams();
  const { data: showComments, isLoading: isCommentsLoading } = useGetCommentsQuery(movie_id)
  const [postComment] = useCreateCommentMutation();
  const { data: account } = useGetAccountQuery();
  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState("");
  // console.log(account)
  console.log(showComments)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("anything ?")
    console.log(comment)
    postComment(comment, movie_id, account)
  }
  console.log(account)
  if (isCommentsLoading) return (<div>loading...</div>);
  return (
    <>
      <div className="grid grid-cols-[1fr,200px]">
        <h1 className="mt-8 inline text-3xl"> Reviews </h1>
        {account &&
          <button
            className="inline bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add Review
          </button>}
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto min-w-6xl">

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-600 outline-none focus:outline-none">

                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">New Review</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="relative p-6 flex-auto">
                    <textarea
                      className="w-full p-2 border border-cyan-700 rounded text-black h-60"
                      id="Login__username"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div>
        <div id="reviewdisplay">
          {showComments.comments.map((r) => (
            <div id="testReviewCard" className="bg-yellow-100 w-full p-3 text-black my-3" key={r._id}>
              <div id="cardheader" className="bg-white w-full p-3 text-black grid grid-cols-[1fr,100px,100px]">
                <div className="grid grid-cols-[auto_1fr]">
                  <img className="rounded-full bg-color-black h-12 my-auto" src="https://cdn.discordapp.com/emojis/1091215748338307173.webp?size=96&quality=lossless" />
                  <div className="ml-6">
                    <p className="text-2xl">{r.commentor_id}</p>
                    <p>{Date(r.post_date)}</p>
                  </div>
                </div>
                {r.commentor_id == account.account.id
                  && <>
                    <button className="m-1 mr-1 bg-red-100">Edit</button>
                    <button className="m-1 bg-red-100">Delete</button>
                  </>
                }
              </div>
              <div className="bg-black w-7/8 h-[1px] mx-auto"></div>
              <div className="mx-6 my-5">
                <p>{r.comment}</p>
                <div className="ml-auto h-[min-content]">
                  {r.edit_date !== r.post_date && <p>if edited then edited: EDIT DATE</p>}
                </div>
              </div>
            </div>
          ))}
        </div>


        <div id="testReviewCard" className="bg-yellow-100 w-full p-3 text-black">
          <div id="cardheader" className="bg-white w-full p-3 text-black grid grid-cols-[1fr,100px,100px]">
            <div className="grid grid-cols-[auto_1fr]">
              <img className="rounded-full bg-color-black h-12 my-auto" src="https://cdn.discordapp.com/emojis/1091215748338307173.webp?size=96&quality=lossless" />
              <div className="ml-6">
                <p className="text-2xl">USERNAME GOES HERE</p>
                <p>Creation Date</p>
              </div>
            </div>
            <button className="m-1 mr-1 bg-red-100">Edit</button>
            <button className="m-1 bg-red-100">Delete</button>
          </div>
          <div className="bg-black w-7/8 h-[1px] mx-auto"></div>
          <div className="mx-6 my-5">
            <p>CONTENT
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div className="ml-auto h-[min-content]">
              <p>if edited then edited: EDIT DATE</p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Reviews;
