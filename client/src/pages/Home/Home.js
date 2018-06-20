import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import ScrapeButton from "../../components/ScrapeButton";

class Home extends Component {

  render() {
    return (
      
      <Wrapper>
        
        <Title>NYTimes React Scraper</Title>
        
        <ScrapeButton>Get Articles</ScrapeButton>
       
      </Wrapper>
    );
  }
}

export default Home;