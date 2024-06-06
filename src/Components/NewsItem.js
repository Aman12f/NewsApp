import React,{useState} from "react";
import PropTypes from 'prop-types'

export default function NewsItem(props) {
  return (
    <>
    <div className="my-3 d-flex justify-content-center">
    <div className="card" style={{width: "18rem", position:"relative"}}>
  <div className="card-body">
    <div className="pill" style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>
  <span className="badge rounded-pill bg-danger">
    {props.source}
  </span>

    </div>
  <img className="card-img-top" src =  {!props.imageUrl?"https://c.biztoc.com/p/a20384d4b62a0ce8/s.webp":props.imageUrl} alt="..."></img>
    <span className="visually-hidden">unread messages</span>
    <h5 className="card-title">Card {props.title}</h5>
    <p className="card-text">{props.description}</p>
    <p className="card-text"><small className="text-muted">{props.author}<br></br>{new Date(props.publishedAt).toGMTString()}</small></p>
    <a href={props.newsUrl} className="btn btn-sm btn-primary my-2" target="_blank" rel="noreferrer">Read More</a>
  </div>

</div>
    </div>
    </>
  );
}
