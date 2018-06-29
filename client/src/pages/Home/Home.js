import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Home extends Component {
  state = {
    topic: "",
    startYear: "",
    endYear: "",
    articles: [],
    error: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    // api call -- scrape for articles
    API.scrapeNYT(this.state.topic, this.state.startYear, this.state.endYear)
    .then (res => this.setState({ 
        articles: res.data.response.docs, 
        }))
    .catch(err => this.setState({error: err.message}));
    
  };

 
  render() {
  
    return (
      
      // User form to get user input for article search
      // Top 5 Results returned/posted below form

      <Wrapper>
        <Navbar /><br />
          <form>
              <Input name="topic" placeholder="Topic (required)"
              value={this.state.topic} onChange={this.handleInputChange} />
              <Input name="startYear" placeholder="
               Starting Year" value={this.state.startYear} onChange={this.handleInputChange}/>
              <Input name="endYear" placeholder="Ending Year" value={this.state.endYear} onChange={this.handleInputChange} />
              <FormBtn onClick={this.handleFormSubmit}>Get Articles</FormBtn>
            </form>
       

           <h2>Results</h2>
           {this.state.articles.slice(0,5).map(article => (
             <Listing
              id={article._id}
              title={article.headline.main}
              url={article.web_url}
              />
           ))}
      
       </Wrapper>
    );
  }
}

export default Home;