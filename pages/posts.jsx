import React from "react";
import { useSelector } from "react-redux";
import DataView from "../Components/DataView";
import SelectDB from "../Components/SelectDB";
import { useGetPostsQuery } from "../redux/features/api/apiSlice";

export default function Posts() {
  const { isConnected } = useSelector((state) => state.db);
  const { data: posts = [], isFetching: fetchingPosts } = useGetPostsQuery("", {
    skip: !isConnected,
  });
  return (
    <div>
      <h1>Posts Page</h1>
      <SelectDB />
      <DataView
        isLoading={fetchingPosts}
        list={posts}
        title="Posts"
        property="title"
      />
    </div>
  );
}
