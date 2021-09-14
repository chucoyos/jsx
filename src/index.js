import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on Me';
}

const App = function () {
    const labelText = 'Enter Name:'
    const paragraphText = { text: 'This text'}
    return (
        <div>
            <p>{paragraphText.text}</p>
            <label className="label" htmlFor="name">{labelText} </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
              {getButtonText()}
            </button>
        </div>
    );
};

ReactDOM.render(
 <App />,
 document.querySelector('#root')
);

