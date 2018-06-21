import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";
import { Input, TextArea, FormBtn } from "../../components/Form";
import ScrapeButton from "../../components/ScrapeButton";

class Home extends Component {

  render() {
    return (
      
      <Wrapper>
        <Navbar />
        <h1>Home</h1>
        <ScrapeButton>Get Articles</ScrapeButton>

          <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Book</FormBtn>
            </form>
       
      </Wrapper>
    );
  }
}

export default Home;