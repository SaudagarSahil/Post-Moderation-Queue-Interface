import { useSelector, useDispatch } from "react-redux";
import {
  toggleSelectPost,
  approvePost,
  rejectPost,
  setPostPending,
} from "../features/posts/postsSlice";
import showUndoToast from "../utils/showUndoToast";
import ConfirmDialog from "./ConfirmDialog";
import { useState } from "react";

const PostItem = ({ post, onView }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) =>
    state.posts.selectedPostIds.includes(post.id)
  );
  const isProcessed = post.status !== "pending";

  const [showConfirm, setShowConfirm] = useState(false);

  const handleApprove = () => {
    dispatch(approvePost(post.id));
    showUndoToast({
      actionType: "approved",
      post,
      undoAction: (id) => dispatch(setPostPending(id)),
    });
  };

  const handleReject = () => {
    dispatch(rejectPost(post.id));
    showUndoToast({
      actionType: "rejected",
      post,
      undoAction: (id) => dispatch(setPostPending(id)),
    });
    setShowConfirm(false);
  };

  return (
    <div className="border p-4 rounded shadow flex flex-col md:flex-row justify-between items-start md:items-center bg-white">
      {/* Checkbox & info */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => dispatch(toggleSelectPost(post.id))}
          className="mt-2"
          disabled={isProcessed}
        />
        <div>
          <h3
            className="font-semibold text-lg text-left text-blue-700 hover:underline cursor-pointer"
            onClick={onView}
          >
            {post.title}
          </h3>
          <p className="text-sm text-left text-gray-600">
            <strong>{post.author.username}</strong> | {post.reportedReason} |{" "}
            {new Date(post.reportedAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex gap-2 mt-3 md:mt-0 md:ml-4">
        <button
          onClick={() => setShowConfirm(true)}
          disabled={isProcessed}
          className="bg-red-500 hover:bg-red-600 text-red-800 px-3 py-1 rounded disabled:text-gray-400"
        >
          Reject
        </button>
        <button
          onClick={handleApprove}
          disabled={isProcessed}
          className="bg-green-500 hover:bg-green-600 text-green-800 px-3 py-1 rounded disabled:text-gray-400"
        >
          Approve
        </button>
        <button
          onClick={onView}
          className="bg-blue-500 hover:bg-blue-600 text-black-800 px-3 py-1 rounded"
        >
          View
        </button>
      </div>
      {showConfirm && (
        <ConfirmDialog
          title="Reject Post?"
          message="Do you want to reject this post?"
          onCancel={() => {
            setShowConfirm(false);
          }}
          onConfirm={handleReject}
        />
      )}
    </div>
  );
};

export default PostItem;
