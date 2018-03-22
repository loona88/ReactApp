import React from 'react';
import ReactDOM from 'react-dom';
import './Board.css';
import Board from './Board';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<div>
//             <App text={"Hello"}>msg: yeey</App>
//             <App text={"Hello"}>msg: yooy</App>
//             <App text={"Hello"}></App>
//     </div>, document.getElementById('root'));

ReactDOM.render(<Board count={50} />,
    document.getElementById('root'));
registerServiceWorker();
