import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Home extends Component {
  state = {
    search: "",
    topic: "",
    articles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({            articles: res.data 
      }))
      .catch(err => console.log(err));
  };

  handleBtnClick = event => {
    //call axios -- scrape for articles
  }

  render() {
    return (
      
      <Wrapper>
        <Navbar /><br />
          <form>
              <Input name="topic" placeholder="Topic" />
              <Input name="yearStart" placeholder="
               Starting Year" />
              <Input name="yearEnd" placeholder="Ending Year" />
              <FormBtn>Get Articles</FormBtn>
            </form>
       
      </Wrapper>
    );
  }
}

export default Home;