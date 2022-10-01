import React from "react";
import { useSelector } from "react-redux";
import DataView from "../Components/DataView";
import SelectDB from "../Components/SelectDB";
import {
  useGetPostsQuery,
  useGetUsersQuery
} from "../redux/features/api/apiSlice";

export default function Dashboard() {
  const { isConnected } = useSelector((state) => state.db);
  const { data: users = [], isFetching: fetchingUsers } = useGetUsersQuery("", {
    skip: !isConnected,
  });
  const { data: posts = [], isFetching: fetchingPosts } = useGetPostsQuery("", {
    skip: !isConnected,
  });
  return (
    <div>
      <h1>Dashboard Page</h1>
      <SelectDB />
      <DataView
        isLoading={fetchingUsers}
        list={users}
        title="Users"
        property="name"
      />
      <DataView
        isLoading={fetchingPosts}
        list={posts}
        title="Posts"
        property="title"
      />
    </div>
  );
}
