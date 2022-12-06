import {gql} from '@apollo/client';

const GET_MY_PINS = gql`
    query mypins{
        title
        description
        imageUrl
        userId
}
`

const GET_LATEST_PINS = gql`
    query {
    latestPins{
        title
        description
        imageUrl
        userId
    }
}
`;

const GET_SAVED_PINS = gql`
    query getsavedpins{
        userId
        title
        description
        imageUrl
    }
`

export {GET_MY_PINS, GET_LATEST_PINS, GET_SAVED_PINS};