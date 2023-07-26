import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useGetAccountQuery } from "./store/accountSlice";
import { useGetCommentsQuery, useCreateCommentMutation, useDeleteCommentMutation, useUpdateCommentMutation } from "./store/dataSlice";
import ReviewCardProfile from "./ReviewCardProfile";

const Reviews = (props) => {
  let page_id = props.page_id;
  const { data: showComments, isLoading: isCommentsLoading } = useGetCommentsQuery(page_id)
  const [deleteComment] = useDeleteCommentMutation();
  const [postComment] = useCreateCommentMutation();
  let { data: account } = useGetAccountQuery();
  const [showModal, setShowModal] = useState(false);
  let edit = false;
  const [editCommentID, setEditCommentID] = useState(null);
  const [commentContent, setCommentContent] = useState("");
  const [updateComment] = useUpdateCommentMutation();


  if (account == null) {
    account = false
  }
  console.log(showComments)

  const handleDelete = (e) => {
    console.log(e.target.value)
    let comment_id = e.target.value;
    let query = { page_id: page_id, comment_id: comment_id }
    deleteComment(query)
  }

  const handleSubmit = () => {
    console.log(
      "handleSubmit"
    )
    if (editCommentID) {
      console.log(commentContent)
      let query = {
        page_id: page_id,
        comment_id: editCommentID,
        body: {
          "commentor_id": account.account.username,
          "comment": commentContent,
        },
      };
      console.log(query);
      console.log(query.body);
      updateComment(query);
    } else {
      console.log(commentContent)
      let query = {
        page_id: page_id,
        body: {
          "commentor_id": account.account.username,
          "comment": commentContent,
        },
      };
      postComment(query);
    }
    setShowModal(false);
  };

  const handleDate = (isoString) => {
    return ((new Date(isoString).toLocaleDateString()) + " " + (new Date(isoString).toLocaleTimeString()));
  };


  const handleEdit = (commentId, commentContent) => {
    console.log("handleEdit");
    console.log(commentContent)
    setEditCommentID(commentId);
    setCommentContent(commentContent);
    setShowModal(true);
  }

  const handleEditSubmit = () => {

    setShowModal(false)
  }


  if (isCommentsLoading) { return (<div>loading...</div>) };
  return (
    <>
      <div className="mt-20 grid grid-cols-[1fr,100px] border-b">
        <h1 className="mt-4 inline text-3xl font-bold"> Reviews </h1>
        {account &&
          <button
            className="inline bg-cyan-700 h-10 w-20 ml-5 mt-2 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              setShowModal(true);
              setCommentContent("");
              setEditCommentID(null);

              edit = false;
            }}
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
                  <h3 className="text-3xl font-semibold">{editCommentID ? "Edit Review" : "New Review"}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <form onSubmit={handleEditSubmit}>
                  <div className="relative p-6 flex-auto">
                    <textarea
                      className="w-full p-2 border border-cyan-700 rounded text-black h-60"
                      id="Login__username"
                      value={commentContent}
                      onChange={(e) => setCommentContent(e.target.value)}
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
                      type="submit"
                      onClick={() => {
                        setShowModal(false);
                        handleSubmit();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div >
          </div >
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div>
        <div id="reviewdisplay">
          {showComments.comments.map((r) => (
            <div id="testReviewCard" className="bg-cyan-700 w-full p-3 text-black my-3 rounded" key={r._id}>

              <div id="cardheader" className="rounded bg-gray-200 w-full p-3 text-black grid grid-cols-[1fr,100px,100px]">
                <div className="grid grid-cols-[auto_1fr]">
                  <ReviewCardProfile commentor_id={r.commentor_id} post_date={r.post_date} />
                </div>
                {r.commentor_id == account.account?.username
                  && <>
                    <button className="text-sm m-1 mr-1 h-8 w-12 rounded-lg text-white bg-cyan-700 ml-20 mt-3 border border-black" onClick={() => {
                      handleEdit(r._id, r.comment)
                    }}>Edit</button>
                    <button className="text-sm m-1 mr-1 h-8 w-12 rounded-lg text-white bg-cyan-700 ml-12 mt-3 border border-black" value={r._id} onClick={handleDelete}>Delete</button>
                  </>
                }
              </div>
              <div className="bg-black w-7/8 h-[1px] mx-auto"></div>
              <div className="mx-6 my-5">
                <p className="text-xl text-gray-200">{r.comment}</p>
                <div className="ml-auto h-[min-content]">
                  {r.edit_date !== r.post_date && <p>edited {handleDate(r.edit_date)}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >
    </>
  );
};

export default Reviews;
