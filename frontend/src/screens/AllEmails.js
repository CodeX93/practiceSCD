import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import NAVBAR from "../Components/NAVBAR";

export default function AllEmails() {
  const [User, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = axios.get("http://localhost:3001/getUsers/getUsersData");

      setUser((await result).data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <NAVBAR />
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
      </Table>
      {User.map((us) => (
        <>
          <Table>
            <tbody>
              <tr>
                <td>{us._id}</td>
                <td>{us.Email}</td>
              </tr>
            </tbody>
          </Table>
        </>
      ))}
    </div>
  );
}
