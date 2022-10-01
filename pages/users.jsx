import React from "react";
import { useSelector } from "react-redux";
import DataView from "../Components/DataView";
import SelectDB from "../Components/SelectDB";
import { useGetUsersQuery } from "../redux/features/api/apiSlice";

export default function Users() {
  const { isConnected } = useSelector((state) => state.db);
  const { data: users = [], isFetching: fetchingUsers } = useGetUsersQuery("", {
    skip: !isConnected,
  });
  return (
    <div>
      <h1>Posts Page</h1>
      <SelectDB />
      <DataView
        isLoading={fetchingUsers}
        list={users}
        title="Users"
        property="name"
      />
    </div>
  );
}
