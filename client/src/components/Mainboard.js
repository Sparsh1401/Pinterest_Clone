import React from 'react'
import styled from 'styled-components'
import Pin from '../components/Pin'
import {useEffect, useState} from 'react'
import {useQuery} from '@apollo/client'
import {GET_MY_PINS, GET_LATEST_PINS, GET_SAVED_PINS} from '../GraphQL/Queries'


function Mainboard() {

    const {data} = useQuery(GET_LATEST_PINS);

    const [latestPin, setLatestPin] = useState([]);

    useEffect(() => {
        if(data)
            setLatestPin(data.latestPins);
      },[data]);

    //   console.log(latestPin);
    return (
        <Wrapper>
            <Container>
                {
                    latestPin.map((pin) => {
                        const urls= pin.imageUrl;
                        console.log(urls);
                        return(<Pin urls = {urls} />)
                    })
                }
            </Container>
        </Wrapper>
    )
}

export default Mainboard

const Wrapper = styled.div`
    background-color: white;
    display:flex;
    justify-content: center;
    height: 100%;
    width:100%;
    margin-top:15px;
`

const Container = styled.div`
    background-color: white;
    column-count:5;
    column-gap:10px;
    max-width: 1360px;
    margin: 0 auto;
`