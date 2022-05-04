import React from 'react'

const RentalService = () => (
    <div>
      <table className="table" style={{maxWidth:"90%"}}>
        <thead style={{ fontSize: "large" }}>
          <tr>
            <th scope="col-1">Service Type</th>
            <th scope="col-1">Date</th>
            <th scope="col-1">Price</th>
            <th scope="col-1">Availability</th>
            <th scope="col-2">From Date</th>
            <th scope="col-1">To Date</th>
            <th scope="col-2">Time</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "large" }}>
          <tr>
            <th scope="row">
              <h6>
                {" "}
                <span style={{ marginLeft: "5px" }}>Minted</span>
              </h6>
            </th>
            <td>
              Rental Villa #123456 <br /> <h6>Strugend Backside</h6>{" "}
            </td>
            <td>1500 Rs.</td>
            <td>1</td>
            <td>27 Apr 2022</td>
            <td>30 Apr 2022</td>
            <td>9:00 AM</td>
          </tr>
          <tr>
            <th scope="row">
              <h6>
                {" "}
                <span style={{ marginLeft: "5px" }}>Minted</span>
              </h6>
            </th>
            <td>
              Rental Villa #123456 <br /> <h6>Strugend Backside</h6>{" "}
            </td>
            <td>1500 Rs.</td>
            <td>1</td>
            <td>27 Apr 2022</td>
            <td>30 Apr 2022</td>
            <td>9:00 AM</td>
          </tr>
          <tr>
            <th scope="row">
              <h6>
                {" "}
                <span style={{ marginLeft: "5px" }}>Minted</span>
              </h6>
            </th>
            <td>
              Rental Villa #123456 <br /> <h6>Strugend Backside</h6>{" "}
            </td>
            <td>1500 Rs.</td>
            <td>1</td>
            <td>27 Apr 2022</td>
            <td>30 Apr 2022</td>
            <td>9:00 AM</td>
          </tr>
        </tbody>
      </table>
      </div>
  )

export default RentalService