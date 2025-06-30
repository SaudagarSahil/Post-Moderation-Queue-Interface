import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "./PostItem";
import ContentModal from "./ContentModal";
import {
  setFilter,
  selectAll,
  clearSelected,
  batchApprove,
  batchReject,
} from "../features/posts/postsSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { allPosts, filter, selectedPostIds } = useSelector(
    (state) => state.posts
  );

  const filteredPosts = allPosts.filter((post) => post.status === filter);

  {
    /* Pagination Logic */
  }
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [selectedPost, setSelectedPost] = useState(null);

  const totalPages = Math.ceil(filteredPosts.length / perPage);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  {/* Dispatch Actions */}
  const handleSelectAll = () => dispatch(selectAll());
  const handleClear = () => dispatch(clearSelected());
  const handleBatchApprove = () => dispatch(batchApprove());
  const handleBatchReject = () => dispatch(batchReject());

  const filters = ["pending", "approved", "rejected"];

  {
    /* Reset page when filter or perPage changes */
  }
  useEffect(() => {
    setCurrentPage(1);
  }, [filter, perPage]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Reported Posts</h2>

      {/* Filter Tabs */}
      <div className="flex gap-4 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            className={`px-4 py-2 rounded font-medium ${
              filter === f ? "bg-blue-600 text-gray-400" : "bg-black-800"
            }`}
            onClick={() => dispatch(setFilter(f))}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Batch Actions */}
      <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleSelectAll}
            className="bg-gray-300 px-3 py-1 rounded"
          >
            Select All
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-300 px-3 py-1 rounded"
          >
            Clear
          </button>
          <button
            onClick={handleBatchApprove}
            className="bg-green-500 px-3 text-green-800 py-1 rounded disabled:opacity-50"
            disabled={selectedPostIds.length === 0}
          >
            Approve Selected
          </button>
          <button
            onClick={handleBatchReject}
            className="bg-red-500 px-3 text-red-800 py-1 rounded disabled:opacity-50"
            disabled={selectedPostIds.length === 0}
          >
            Reject Selected
          </button>
        </div>

        <span className="font-bold text-gray-600 ml-auto">
          Selected: {selectedPostIds.length}
        </span>
      </div>

      {/* Render Post Items */}
      {paginatedPosts.length === 0 ? (
        <p className="text-gray-500">No posts found for this status.</p>
      ) : (
        <div className="space-y-4">
          {paginatedPosts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              onView={() => setSelectedPost(post)}
            />
          ))}
        </div>
      )}

      {/* Show Content Modal */}
      {selectedPost && (
        <ContentModal
          post={selectedPost}
          onClose={(nextPost) => {
            if (nextPost) setSelectedPost(nextPost);
            else setSelectedPost(null);
          }}
        />
      )}

      {/* Pagination Controls */}
      <div className="flex items-center gap-4 mt-4">
        <label className="text-sm">Items per page:</label>
        <select
          value={perPage}
          onChange={(e) => setPerPage(parseInt(e.target.value))}
          className="border px-2 py-1 rounded"
        >
          {[5, 10, 20, 30, 50].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-2 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-2 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostList;
