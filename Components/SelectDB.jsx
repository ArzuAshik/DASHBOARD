import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSetDatabaseMutation } from "../redux/features/api/apiSlice";

export default function SelectDB() {
  const { connectedTo } = useSelector((state) => state.db);
  const [value, setValue] = useState("");
  const [handleSetDB, { isLoading }] = useSetDatabaseMutation();

  const handleChange = (e) => {
    handleSetDB(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!connectedTo || value === connectedTo) return;
    setValue(connectedTo);
  }, [connectedTo]);

  return (
    <select
      name="db"
      onChange={handleChange}
      style={{ padding: "5px 20px", margin: "0px 10px" }}
      value={value}
    >
      {isLoading && <option value="">Loading...</option>}
      <option value="db1">DB1</option>
      <option value="db2">DB2</option>
      <option value="db3">DB3</option>
    </select>
  );
}
