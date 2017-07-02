import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const RestaurantItem = (props) => {
    return(
        <div className="restaurantItem" key={props.key}>
            <div className="DisplayImageContainer">
                <img className="profile-picture" src={ props.Img } alt={ props.Alt } />
            </div>
            <div className="information">
                <h2> { props.Name }</h2>
                <hr className="line-brightPink-left" />
                <p> Description: { props.Desc } </p>
                <p> Address: { props.Address } </p>
                <p> Telephone: { props.Tel } </p>
                <p> Open Hours: { props.OpenClose } </p>

                <Link to={ `/restaurants/${props.Id}` } className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default RestaurantItem;