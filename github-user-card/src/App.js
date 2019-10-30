import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import Styled from 'styled-components'

import GithubCard from './Components/GithubCard'

const AppDiv = Styled.div
`
  width: 80%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  background: lightblue;
  height: 100%;
  padding: 35px;
  img{
    height: 400px;
    width: 400px;
  }
`

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      githubUserName: 'nijanes97',
      githubUser: [],
      githubFollowers: []
    };
  }

  getUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.githubUserName}`)
      .then(res => {
        console.log(res);
        this.setState({
          githubUser: res.data
        });
        console.log(this.githubUser);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getFollowers = () => {
    axios
      .get(`https://api.github.com/users/${this.state.githubUserName}/followers`)
      .then(res => {
        console.log(res);
        this.setState({
          githubFollowers: res.data
        });
        console.log(this.githubFollowers);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getUser();
    this.getFollowers();
  }

  render(){
    return (
      <AppDiv>
        <h1>Github Card</h1>
        <GithubCard data={this.state.githubUser} followers={this.state.githubFollowers}/>
      </AppDiv>
    );
  }
}

export default App;
