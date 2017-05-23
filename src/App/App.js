import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from '../NewsListComponent/NewsList';
import MacList from '../MacListComponent/MacList';
import MacForm from './MacForm';
import { Panel, Well, Button, Row } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    articles: [],
    burgers: []
    }
  };
  componentDidMount() {
    this.getNewsList();
    this.getMacList();
  };

  getNewsList() {
    const URL = 'https://newsapi.org/v1/articles?source=cnn&apiKey=1c3004ee6bca468a9024f7be6ced9f41';
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
      this.setState({ burgers: response.data})
   })
    .catch(function (error) {
       console.log(error);
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid  welcomeDiv"><h2> Welcome Mr President!</h2></div>
          <NewsList articles={this.state.articles} />
          <MacList burgers={this.state.burgers} />
          <MacForm getMacList={ () => this.getMacList() }/>
      </div>
    );
  }
}

export default App;
