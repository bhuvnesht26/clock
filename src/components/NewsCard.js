import React from 'react';

const NewsCard = (props) => {
    return(
        <div onClick = {props.getNews}>
            <h1>This is test</h1>
        </div>
    );   
}

export default NewsCard;