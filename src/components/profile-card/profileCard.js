import React from 'react'
import './profileCard.css'
import avata from './avata.jpg'
export class ProfileCard extends React.Component{
    render(){
        return(
            <div className="container_p">
    <div className="card">
      <div className="card--header" />
      <img className="avatar" src={avata} alt="avatar" />
      <div className="card--body">
        <div>
          <p className="text-header">Đồng Xuân Nghĩa</p>
          <p className="text-sub">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
          <button className="btn third" >FOLLOW</button>
        </div>
      </div>
    </div>
  </div>
        );
    }
}