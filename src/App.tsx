import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { ArgentInput } from "./components/argent-input";

const App: React.FC = () => {
    const [name, setName] = useState('');
    console.log(name);

    return (
        <div className="container">
            <h2 style={{marginTop: '2rem'}}>OnChange Input</h2>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <ArgentInput
                    type="text"
                    // placeholder="Enter your name"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                />
            </Form.Group>
        </div>
    )
};

// class App extends React.Component {
//     state = {
//         name: ''
//     };
//
//     handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
//         this.setState({
//             name: event.target.value
//         })
//     };
//
//
//
//     render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
//         console.log(this.state);
//         return (
//             <div className="container">
//                 <h2 style={{marginTop: '2rem'}}>OnChange Input</h2>
//                 <Form.Group controlId="formBasicEmail">
//                     <Form.Label>Your Name</Form.Label>
//                     <ArgentInput
//                         type="text"
//                         // placeholder="Enter your name"
//                         // value={name}
//                         onChange={this.handleChangeInput}
//                     />
//                 </Form.Group>
//             </div>
//         )
//     }
//
// }

export default App;
