import React from 'react'
import Styled from 'styled-components'

const FollowerDiv = Styled.div
`
    width: 200px;
    height: 200px;
    background-color: lightgray;
    border: 1px solid gray;
    display: flex;
    flex-flow: column nowrap;
    h2{
        font-size: 15px;
    }
    img{
        height: 80% !important;
        width: 100% !important;
    }
`
const GithubFollowerCard = props => {
    console.log(props.user);
    return(
        <FollowerDiv>
            <img src={props.user.avatar_url} />
            <h2>{props.user.login}</h2>
        </FollowerDiv>
    )
}

export default GithubFollowerCard;