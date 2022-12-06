import React from 'react'
import styled from 'styled-components'
import CreatePin from '../components/CreatePin'

function Pinbuilder() {
  return (
    <Wrapper >
      <Buttons>
        <ActionButton >

        </ActionButton>
      </Buttons>
      <MainContainer >
        <Container>
          <CreatePin />
        </Container>
      </MainContainer>
    </Wrapper>
  )
}

export default Pinbuilder


const Wrapper = styled.div`
  display: flex;
  background-color: #efefef;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`

const Buttons = styled.div`

`
const ActionButton = styled.div`

`
const MainContainer = styled.div`
  background-color: white;
  display: flex;
  padding-top:10px;
  padding-left:  40px;
  padding-right:40px;
  width:886px;
  height:90%;
  border-radius: 18px;
  box-sizing: border-box;
`

const Container = styled.div`
  width:100%;
  height: 100%;
  background-color: white;
`