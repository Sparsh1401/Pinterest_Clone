import React from 'react'
import styled from 'styled-components'
// import {CREATE_PIN} from '../GraphQL/Mutation'
// import {useMutation} from '@apollo/client';
function CreatePin() {
  return (
    <Wrapper>
        <SaveButtonWrapper>
            <SaveButton >
                Save
            </SaveButton>
        </SaveButtonWrapper>
        <MiddleWrapper>
            <ImageInput>
                <span>Drag and Drop or click to upload</span>
                <input  type="file" text=""/>
            </ImageInput>
            <LeftContainer>
                <TitleInput>
                    <input type= "text" placeholder = "Add your Title" />
                </TitleInput>
                <DescriptionInput>
                    <input type = "text" placeholder='Tell everyone what your pin is about' />
                </DescriptionInput>
            </LeftContainer>
            
        </MiddleWrapper>
        
    </Wrapper>
  )
}

export default CreatePin

const Wrapper = styled.div`
    width:100%;
    height:100%;
`
const SaveButtonWrapper = styled.div`
    display:flex;
    justify-content: right;
    padding-top:20px;
    align-items: center;
`
const SaveButton = styled.button`
    background-color: rgb(230,0,35);
    width:50px;
    height: 40px;
    border-radius: 0 8px 8px 0;
    border:none;
    cursor:pointer;

        color:white;
        font-size:15px;
        font-weight:700;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const MiddleWrapper = styled.div`
    display:flex;
    flex-direction:row;
    padding:0px 0px 20px 20px;
`

const LeftContainer  = styled.div`
    flex: 1;
    display:flex;
    padding-left: 40px;
    flex-direction: column;
    width:100%;
    height: 100vh;
`


const TitleInput = styled.div`
    width:100% ;
    height:75px;
    input{
        width:100%;
        height: 75px;
        box-sizing: border-box;
        margin-top:15px;
        border-top:none;
        border-left:none;
        border-right:none;
        background-color: white;
        font-weight:700;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:30px;
        outline: none;
    }
`
const ImageInput = styled.div`
    width:320px;
    height: 550px;
    background-color: #efefef;
    border-radius:16px;
    
    span{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input{
       width: 100%;
       height: 100%;
       border:none; 
       cursor:pointer;
    }
`

const DescriptionInput = styled.div`
    padding-top:40px;
    width:100% ;
    height:75px;
    input{
        width:100%;
        height: 75px;
        box-sizing: border-box;
        margin-top:15px;
        border-top:none;
        border-left:none;
        border-right:none;
        background-color: white;
        font-weight:700;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:18px;
        color: #333;
        border-bottom: 2px solid #c6c6c6;
        outline:none;
    }
`
