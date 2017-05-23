import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from './NewsList';
import MacList from './MacList';
// import { Panel } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    articles: [],
    burgers: []
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

  getMacList() {
    const URL = 'https://cfa-mac-secret-menu.herokuapp.com/macs/api?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRha2FoaXJvc3V6dWtpLm0wMTBAZ21haWwuY29tIiwiaWF0IjoxNDk1NTMxODk1fQ.9GY9toZd5oMUt-OdRyKOUBIxBT18p5-bGMsUconxDz4';
    axios.get(URL)
    .then((response) => {
      console.log(response.data)
      this.setState({ burgers: response.data})
   })
    .catch(function (error) {
       console.log(error);
    });
  }

  render() {
    return (
      <div>
        <p> Welcome to DonaldBoard! </p>

        {this.getNewsList()}
          <NewsList articles={this.state.articles} />
          <br />
        {this.getMacList()}
          <MacList burgers={this.state.burgers} />
      </div>
    );
  }
}

export default App;
