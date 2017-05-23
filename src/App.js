import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from './NewsList';
import { Panel } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    articles: []
    }
  };

  getNewsList() {
    const URL = 'https://newsapi.org/v1/articles?source=the-next-web&apiKey=1c3004ee6bca468a9024f7be6ced9f41';
    axios.get(URL)
      .then((response) => {
        this.setState({ articles: response.data.articles});
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div>
        <p> Welcome to DonaldBoard! </p>
        <Panel />
        {this.getNewsList()}
        <Panel header="Panel heading without title">
          <NewsList articles={this.state.articles} />
        </Panel>
      </div>
    );
  }
}

export default App;
