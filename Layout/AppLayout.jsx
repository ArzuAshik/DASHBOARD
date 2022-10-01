import Link from "next/link";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SelectDB from "../Components/SelectDB";
import { useSetDatabaseMutation } from "../redux/features/api/apiSlice";

export default function AppLayout({ children }) {
  const { connectedTo } = useSelector((state) => state.db);
  const [handleSetDB, { isLoading, isError }] = useSetDatabaseMutation();

  useEffect(() => {
    const connectedDB = localStorage.getItem("db") || "db1";
    handleSetDB(connectedDB);
  }, []);

  if (isLoading || !connectedTo) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ fontSize: "5vw" }}>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          background: "lightgray",
          padding: "0 10px",
        }}
      >
        <h5>
          <Link href="/">Dashboard</Link>
        </h5>
        <h5>
          <Link href="/users">Users</Link>
        </h5>
        <h5>
          <Link href="/posts">Posts</Link>
        </h5>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SelectDB />
        </div>
      </div>
      {children}
    </>
  );
}
