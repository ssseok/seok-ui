import './App.css';

import Label from './components/label/Label';
import Clear from '../src/assets/icons/Clear.svg';
import { useState } from 'react';
import TextField from './components/textField/TextField';

function App() {
    const [isError, setIsError] = useState(false);
    return (
        <>
            <Label htmlFor="email">이메일</Label>
            <TextField
                id="email"
                placeholder="이메일을 입력하세요."
                errorMessge="이메일을 확인해주세요. "
                isError={isError}
                iconPath={Clear}
                IconAlt="delete"
                onChange={() => {}}
                onIconClick={() => {}}
                value=""
            />
            <div className="my-20" />
            <Label htmlFor="address">주소</Label>
            <TextField
                id="address"
                placeholder="주소을 입력하세요."
                errorMessge="주소을 확인해주세요. "
                isError={isError}
                iconPath={Clear}
                IconAlt="delete"
                onChange={() => {}}
                onIconClick={() => {}}
                value=""
            />
            <button onClick={() => setIsError((prev) => !prev)}>
                에러 버튼 토글
            </button>
        </>
    );
}

export default App;
