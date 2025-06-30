import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import showUndoToast from "../utils/showUndoToast";
import {
  approvePost,
  rejectPost,
  setPostPending,
} from "../features/posts/postsSlice";
import ConfirmDialog from "./ConfirmDialog"; // make sure it's imported

const ContentModal = ({ post, onClose }) => {
  const dispatch = useDispatch();
  const { allPosts, filter } = useSelector((state) => state.posts);
  const posts = allPosts.filter((p) => p.status === filter);
  const currentIndex = posts.findIndex((p) => p.id === post.id);
  const prevPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];
  const isProcessed = post.status !== "pending";

  const [showConfirm, setShowConfirm] = useState(false);

  const handleKeyDown = (e) => {
    console.log("Pressed Key", e.key);
    if (e.key === "ArrowLeft" && prevPost) onClose(prevPost);
    if (e.key === "ArrowRight" && nextPost) onClose(nextPost);
    if (e.key === "A" || e.key === "a") handleApprove();
    if (e.key === "R" || e.key === "r") setShowConfirm(true);
    if (e.key === "Escape") onClose(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleApprove = () => {
    dispatch(approvePost(post.id));
    showUndoToast({
      actionType: "approved",
      post,
      undoAction: (id) => dispatch(setPostPending(id)),
    });
    onClose(null);
  };

  const handleReject = () => {
    dispatch(rejectPost(post.id));
    showUndoToast({
      actionType: "rejected",
      post,
      undoAction: (id) => dispatch(setPostPending(id)),
    });
    setShowConfirm(false);
    onClose(null);
  };

  return (
    <>
      {/* Content Modal */}
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg w-full max-w-xl shadow-lg p-6 relative">
          <button
            onClick={() => onClose(null)}
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
          >
            x
          </button>

          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="mb-4 text-gray-800 whitespace-pre-line">
            {post.content}
          </p>

          <div className="text-sm text-gray-500 space-y-1 mb-4">
            <p>
              <strong>Author:</strong> {post.author.username}
            </p>
            <p>
              <strong>Reported Reason:</strong> {post.reportedReason}
            </p>
            <p>
              <strong>Status:</strong> {post.status}
            </p>
            <p>
              <strong>Report Count:</strong> {post.reportCount}
            </p>
            <p>
              <strong>Reported At:</strong>{" "}
              {new Date(post.reportedAt).toLocaleString()}
            </p>
          </div>

          {!isProcessed && (
            <div className="flex justify-center gap-6 mb-6">
              <button
                onClick={() => setShowConfirm(true)}
                className="bg-red-500 text-red-800 px-4 py-2 rounded hover:bg-red-600"
              >
                Reject
              </button>
              <button
                onClick={handleApprove}
                className="bg-green-500 text-green-800 px-4 py-2 rounded hover:bg-green-600"
              >
                Approve
              </button>
            </div>
          )}

          <div className="flex justify-between mt-4">
            <button
              onClick={() => onClose(prevPost)}
              disabled={!prevPost}
              className="text-blue-600 hover:underline disabled:text-gray-400"
            >
              ← Previous
            </button>
            <button
              onClick={() => onClose(nextPost)}
              disabled={!nextPost}
              className="text-blue-600 hover:underline disabled:text-gray-400"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      {/* Confirm Dialog */}
      {showConfirm && (
        <div className="z-60 fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <ConfirmDialog
            title="Reject Post?"
            message="Do you want to reject this post?"
            onCancel={() => setShowConfirm(false)}
            onConfirm={handleReject}
          />
        </div>
      )}
    </>
  );
};

export default ContentModal;
