import React from "react";
import './Box_val.css';
import { Rate } from 'antd';

const Box_val = ({ Val }) => {
  return (
    <div className="box-card-Val">
      <img src={Val?.imgIcon} alt={Val?.name} />
      <h3>{Val?.name}</h3>
      <p>{Val?.opinion}</p>
      <Rate allowHalf disabled defaultValue={Val.starNumber} />
    </div>
  );
};

export default Box_val;
