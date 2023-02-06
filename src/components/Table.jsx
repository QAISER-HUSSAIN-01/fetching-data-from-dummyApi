import React from "react";


function Table({users,status}) {
  return (
    <table border={2} width="50%" style={{border:'2px solid black',borderRadius:'5px'}} >
      <thead>
        <tr>
          <td style={tableHead}>Name</td>
          <td style={tableHead}>User Name</td>
          <td style={tableHead}>Email</td>
          <td style={tableHead}>Phone</td>
        </tr>
      </thead>
      <tbody>
        {status ? (
          users.map((item, index) => (
            <tr key={index}>
              <td style={tableData}>{item.name}</td>
              <td style={tableData}>{item.username}</td>
              <td style={tableData}>{item.email}</td>
              <td style={tableData}>{item.phone}</td>
            </tr>
          ))
        ) : (
          <h4>loading . . . </h4>
        )}
      </tbody>
    </table>
  );
}
const tableData = {
    padding: "10px",
    border: "2px solid lightgrey",
    borderRadius: "5px",
  };
  
  const tableHead = {
    padding: "10px",
    fontWeight: "bold",
    fontSize: "24px",
    border:'2px solid black',
    borderRadius: "5px",
  };
  
export default Table;
