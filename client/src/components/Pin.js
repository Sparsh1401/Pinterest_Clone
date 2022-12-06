import React from 'react'
import styled from 'styled-components'

function Pin(props) {
    let {urls} = props;
    console.log(urls);
    return (
        <Wrapper>
            <PinImage>
                <img src ={urls} alt = "pin"/>
            </PinImage>
        </Wrapper>
    )
}

export default Pin

const Wrapper = styled.div`
    display: inline-flex;
`

const PinImage = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    width:265px;

    img{
    display: flex;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    cursor:zoom-in;
    border-radius:16px;
    object-fit: cover;
    }
`
