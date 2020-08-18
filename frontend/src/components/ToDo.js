import React from 'react';

export default function(props) {
    const text = props.text;
    const completed = props.completed;
    return (
        <div>
          <p>
            {text} : {completed.toString()}
          </p>
        </div>
    )
}