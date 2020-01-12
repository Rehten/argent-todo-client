import React, { useState } from 'react';
import { ArgentButton } from './index';

export default { title: 'ArgentButton' };

export const buttonsColor = () => {

    return (
        <div className="container" style={{display: 'flex', flexDirection: 'column'}}>

            <h2 style={{marginTop: '2rem'}}>Buttons </h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="primary">Primary</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="secondary">Secondary</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="success">Success</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="warning">Warning</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="danger">Danger</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="info">Info</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="dark">Dark</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="light">Light</ArgentButton>
                </div>

            </div>

            <h2 style={{marginTop: '2rem'}}>Outline buttons </h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="outline-primary">Primary</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="outline-secondary">Secondary</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="outline-success">Success</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="outline-warning">Warning</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="outline-danger">Danger</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="outline-info">Info</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="outline-dark">Dark</ArgentButton>
                </div>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton variant="outline-light">Light</ArgentButton>
                </div>

            </div>
        </div>
    )
};

export const buttonsSize = () => (
    <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
        <h2 style={{marginTop: '2rem'}}>Sizes</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
            <div style={{marginRight: '1rem'}}>
                <ArgentButton variant="primary" size="lg">Primary</ArgentButton>
            </div>
            <div style={{marginRight: '1rem'}}>
                <ArgentButton variant="secondary" size="lg">Secondary</ArgentButton>
            </div>
            <div style={{marginRight: '1rem'}}>
                <ArgentButton variant="primary">Primary</ArgentButton>
            </div>
            <div style={{marginRight: '1rem'}}>
                <ArgentButton variant="secondary">Secondary</ArgentButton>
            </div>
            <div style={{marginRight: '1rem'}}>
                <ArgentButton variant="primary" size="sm">Primary</ArgentButton>
            </div>
            <div style={{marginRight: '1rem'}}>
                <ArgentButton variant="secondary" size="sm">Secondary</ArgentButton>
            </div>
        </div>
    </div>
);

export const buttonsState = () => (
    <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
        <h2 style={{marginTop: '2rem'}}>Active state</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
            <div style={{marginRight: '1rem'}}>
                <ArgentButton variant="primary" active>Primary</ArgentButton>
            </div>
            <div style={{marginRight: '1rem'}}>
                <ArgentButton variant="secondary" active>Secondary</ArgentButton>
            </div>
        </div>

        <h2 style={{marginTop: '2rem'}}>Disabled state</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
            <div style={{marginRight: '1rem'}}>
                <ArgentButton variant="primary" disabled>Primary</ArgentButton>
            </div>
            <div style={{marginRight: '1rem'}}>
                <ArgentButton variant="secondary" disabled>Secondary</ArgentButton>
            </div>
        </div>
    </div>
);

export const ClickOnButton = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="container" style={{display: 'flex', flexDirection: 'column'}}>
            <h2 style={{marginTop: '2rem'}}>Button clicked state</h2>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                <div style={{marginRight: '1rem'}}>
                    <ArgentButton
                        variant="outline-primary"
                        onClick={() => setCount(count + 1)}
                    >
                        {'Счетчик: ' + count.toString()}
                    </ArgentButton>
                </div>
            </div>
        </div>
    )
};
