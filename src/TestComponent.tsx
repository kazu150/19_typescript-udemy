import React, { useState } from 'react';

interface Props {
    text: string;
}
interface UserData {
    id: number;
    name: string;
}

const TestComponent: React.FC<Props> = (props) => {
    // const [count, setCount] = useState(0);
    // 初期値を指定するだけで、自動的にstateの型を推論してくれる

    const [count, setCount] = useState<number | null>(null);
    // よくある方法として、数値の初期値nullにしたい問は、上のようにgenericsで明示的に型を指定する

    const [user, setUser] = useState<UserData>({ id: 1, name: 'dummy ' });
    // interfaceを利用して、stateの型にobjectを用いる

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(e.target.value);
    };

    return (
        <div>
            <h1>{props.text}</h1>
            <h1>{count}</h1>
            <input type="text" value={inputData} onChange={handleInputChange} />
            <h1>{inputData}</h1>
        </div>
    );
};

export default TestComponent;
