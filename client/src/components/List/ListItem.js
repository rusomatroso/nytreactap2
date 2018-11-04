import React from "react";
import Moment from "react-moment";

export const ListItem = props =>
    <div className="card border-light">
        <div className="card-body">
            <h5 className="card-title"><a href={props.link} rel="noopener noreferrer" target="_blank">{props.headline}</a></h5>
            <p className="card-text">From Category: <span className="badge badge-success">{props.category}</span></p>
            {props.children}
        </div>
        <div className="card-footer">Date Published: <Moment format="DD MMM, YYYY @ HH:mm">{props.date}</Moment></div>
    </div>;
