import React, { useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import "./Styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useMaterialUIController } from "context";

export default function TopSearchSelect({data}) {
  const [count,setCount]=useState(5);
  const [controller] = useMaterialUIController();
  const {sidenavColor } = controller;
  let color
  if(sidenavColor=="info") color="blue"
  else if(sidenavColor=="error") color="red"
  else if(sidenavColor=="warning") color="orange"
  else if(sidenavColor=="success") color="green"
  else if(sidenavColor=="primary") color="pink"
  else if(sidenavColor=="dark") color="black"

  return (
    <MDBDataTableV5
      entriesOptions={[5,10,15,20,25]}
      entries={count}
      pagesAmount={4}
      data={data}
      searchTop
      searchBottom={false}
      materialSearch
      theadColor={color}
      className='table_01 z-depth-5 text-primary'
      searching
      fullPagination
      responsive
      theadTextWhite
      bordered
    />
  );
}