import { toast } from "react-toastify";

const showUndoToast = ({ actionType, post, undoAction }) => {
  const undo = () => {
    undoAction(post.id);
    toast.dismiss();
    toast.success("Action undone");
  };

  toast(
    <div className="flex justify-between items-center gap-4">
      <span>Post {actionType === "approved" ? "Approved" : "Rejected"}.</span>
      <button
        onClick={undo}
        className="bg-white border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-100"
      >
        Undo
      </button>
    </div>,
    {
      position: "bottom-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    }
  );
};

export default showUndoToast;
