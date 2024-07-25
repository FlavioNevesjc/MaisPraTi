import { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const QRCodeGenerator = () => {
 
 const Title = styled.h1`
    color: green;
    text-align: center;
`

const Input = styled.input`

`
    const [ valor, setText ] = useState('');

    return (
        <>
             
        <div>
            <Title> Gerador de QRCode</Title>
            <input type="text" value={valor} onChange={(event) => setText(event.target.value)}/>
                <QRCode
                value={valor}
                size={128}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
                />
        </div>

        </>
    )
}


export default QRCodeGenerator