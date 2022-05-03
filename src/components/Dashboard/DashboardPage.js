import React from 'react'
import Tabpanel from './Tabpanel'
import MaterialTab from './MaterialTab'

const DashboardPage = () => {
  return (
<>
<div>

    <div style={{padding:"2%"}}>
        <h1>
            Dashboard
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus voluptas saepe similique quaerat non quidem ipsum repellat distinctio, qui tenetur eaque esse facilis nostrum quisquam obcaecati necessitatibus veniam? Ipsa beatae nihil cupiditate labore culpa obcaecati. Rerum, dolorum. Quasi corporis id ducimus optio praesentium veritatis aliquam dolores expedita minima quod.
        </p>
    </div>

    {/* <Tabpanel/> */}
    <MaterialTab/>
</div>
</>
    )
}

export default DashboardPage