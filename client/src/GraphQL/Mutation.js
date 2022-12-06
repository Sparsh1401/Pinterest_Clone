import {gql} from '@apollo/client'

const CREATE_PIN = gql`
    mutation createPin{
            title
            imageUrl
            description
            userId
        }
    }
`

// const DELETE_PIN = gql`
//     mutatiaon{
        
//     }
// `

export {CREATE_PIN} ;