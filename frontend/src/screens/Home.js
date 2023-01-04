import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import NAVBAR from "../Components/NAVBAR";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:3001/getUsers/getUsersData"
      );
      setUsers(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <NAVBAR />
      <h1 data-testid="comp">All Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
      </Table>
      {users.map((us) => (
        <>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>{us._id}</td>
                <td>{us.FirstName}</td>
                <td>{us.LastName}</td>
                <td>{us.Email}</td>
                <td>{us.Password}</td>
              </tr>
            </tbody>
          </Table>
        </>
      ))}
    </div>
  );
}
