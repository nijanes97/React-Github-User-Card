import React from 'react'
import GithubFollowerCard from './GithubFollowerCard'
import Styled from 'styled-components'

const FollowerList = Styled.div
`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

const GithubCard = (props) => {
        console.log(props.followers);
        return(
            <div>
                <img src={props.data.avatar_url} alt='github avatar' />
                <h2>{props.data.name}</h2>
                <p>{props.data.bio}</p>
                <h3>Followers: </h3>
                <FollowerList>
                    {props.followers.map( user => (
                        <GithubFollowerCard user={user} />
                    ))}
                </FollowerList>
            </div>
        )
}

export default GithubCard;

/*
data:
avatar_url: "https://avatars2.githubusercontent.com/u/50849836?v=4"
bio: null
blog: "https://nijanes97.github.io/"
company: null
created_at: "2019-05-20T22:45:17Z"
email: null
events_url: "https://api.github.com/users/nijanes97/events{/privacy}"
followers: 1
followers_url: "https://api.github.com/users/nijanes97/followers"
following: 0
following_url: "https://api.github.com/users/nijanes97/following{/other_user}"
gists_url: "https://api.github.com/users/nijanes97/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/nijanes97"
id: 50849836
location: null
login: "nijanes97"
name: "Nick Janes"
node_id: "MDQ6VXNlcjUwODQ5ODM2"
organizations_url: "https://api.github.com/users/nijanes97/orgs"
public_gists: 0
public_repos: 33
received_events_url: "https://api.github.com/users/nijanes97/received_events"
repos_url: "https://api.github.com/users/nijanes97/repos"
site_admin: false
starred_url: "https://api.github.com/users/nijanes97/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/nijanes97/subscriptions"
type: "User"
updated_at: "2019-10-28T20:17:09Z"
url: "https://api.github.com/users/nijanes97"
*/