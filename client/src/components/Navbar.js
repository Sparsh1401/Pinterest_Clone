import React from 'react'
import styled from 'styled-components'
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import FaceIcon from '@mui/icons-material/Face';
import { IconButton } from '@mui/material';

export const Navbar = () => {
    return (
        <NavbarMain>
            <Icon>
                <IconButton>
                    <PinterestIcon />
                </IconButton>
            </Icon>
            <HomeButton>
                <a href='/'>Home</a>
            </HomeButton>

            <CreateButton>
                <span>Create</span>
                <IconButton>
                    <ArrowDown />
                </IconButton>
            </CreateButton>

            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" placeholder = "Search" />
                        <button type='submit' >submit</button>
                    </form>
                    
                </SearchBarWrapper>
            </SearchWrapper>

            <IconWrapper>
                <IconButton>
                    <a href='/'><FaceIcon /></a>
                </IconButton> 
                <IconButton>
                    <ArrowDown />
                </IconButton>
            </IconWrapper>
            

        </NavbarMain>
    )
}



const NavbarMain = styled.div`
    display : flex;
    align-items: center;
    height: 56px;
    background-color: white;
    padding: 12px 4px 4px 16px;
`

const Icon = styled.div`
    .MuiSvgIcon-root {
        font-size: 32px;
        cursor: pointer;
        color: #e60023;
        border-radius:20px;

        :hover{
            background-color: #e1e1e1;
        }
    }
`
const HomeButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 80px;
    cursor:pointer;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    background-color: rgb(12 12 12);

    a{
        text-decoration: none;
        color:white;
        font-weight: 700;
        font-family: -apple-system, 
        BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`
const CreateButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 80px;
    cursor:pointer;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    background-color: white;
    padding-left:10px;
    
    span{
        font-weight: 500;
        font-size: 16px;
        font-family: -apple-system, 
        BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .MuiSvgIcon-root{
        border-radius:10px;
        font-size: 25px;
        color:rgb(17,17,17);
    }
    
`

const SearchWrapper = styled.div`
    flex: 1;
    padding: 10px;
`
const SearchBarWrapper = styled.div`

    display:flex;
    height: 48px;
    border-radius: 50px;
    background-color: #efefef;
    width: 100%;
    /* align-items: center; */
    border: none;

    form{
        display: flex;
        flex:1
    }

    form>input{
        background-color: transparent;
        border:none;
        width:100%;
        font-size: 16px;
        border-radius: 24px;
    }

    form>button{
        display:none;
    }

    input:focus{
        outline: none;
    }

    .MuiSvgIcon-root {
        font-size: 20px;
        font-weight: 900;

    a{
            text-decoration: none;
            font-weight: 700;
    }

    }
`

const IconWrapper = styled.div`
    padding:10px;
`