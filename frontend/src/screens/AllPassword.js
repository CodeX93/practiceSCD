import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import NAVBAR from "../Components/NAVBAR";

export default function AllPassword() {
  const [passwords, setPassword] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = axios.get("http://localhost:3001/getUsers/getUsersData");
      setPassword((await result).data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <NAVBAR />
      <h1>AllPassword</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Password</th>
          </tr>
        </thead>
      </Table>
      {passwords.map((pass) => (
        <>
          <Table>
            <tbody>
              <tr>
                <td>{pass._id}</td>
                <td>{pass.Password}</td>
              </tr>
            </tbody>
          </Table>
        </>
      ))}
    </div>
  );
}
