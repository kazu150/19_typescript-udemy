import React from 'react';

interface Props {
    text: string;
}
const TestComponent: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    );
};

export default TestComponent;
