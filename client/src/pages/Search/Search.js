import React, {Component} from "react";
import {List, ListItem} from "../../components/List";
import API from "../../data/API";
import "./Search.css";

class Search extends Component {
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
    };


    searchArticles = (event) => {
        event.preventDefault();
        API.findArticles(this.state.topic, this.state.startYear, this.state.endYear)
            .then(res => {
                    this.setState({articles: res.data.response.docs});

                }
            )
            .catch(err => console.log(err));
    };

    saveArticleSubmit = (headline, link, date, category) => {
        console.log("Working", category);
        API.saveArticle({
            headline: headline,
            link: link,
            date: date,
            category: category
        })
            .then(res => console.log("saved article"))
            .catch(err => console.log(err));
    };


    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="container-fluid">

                <form className="mainSearch">
                    <h5>What are you looking for?</h5>
                    <div className="form-row align-items-center">
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="f-topic">Topic</label>
                            <input className="form-control mb-2"
                                   placeholder="Enter your topic"
                                   id="f-topic"
                                   value={this.state.title}
                                   onChange={this.handleInputChange}
                                   name="topic"/>
                        </div>
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="f-year">From year</label>
                            <input className="form-control mb-2"
                                   placeholder="XXXX"
                                   id="f-year"
                                   value={this.state.author}
                                   onChange={this.handleInputChange}
                                   name="startYear"
                            />
                        </div>
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="f-eyear">To year</label>
                            <input className="form-control mb-2"
                                   placeholder="XXXX"
                                   id="f-eyear"
                                   value={this.state.author}
                                   onChange={this.handleInputChange}
                                   name="endYear"
                            />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-outline-success mb-2"
                                    disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                                    onClick={this.searchArticles}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>

                {this.state.articles.length ? (

                    <List>
                        {this.state.articles.map(article => (
                            <ListItem
                                key={article._id}
                                headline={article.headline.main}
                                category={article.news_desk}
                                link={article.web_url}
                                date={article.pub_date}
                            >

                                <button className="btn btn-outline-primary mb-2"
                                        onClick={() => this.saveArticleSubmit(article.headline.main, article.web_url, article.pub_date, article.news_desk)}>
                                    Save this Article
                                </button>

                            </ListItem>))}
                    </List>

                ) : (
                    <div className="alert alert-warning">
                        <p>Please search for the articles or view your <a href="/saved">saved articles</a>.</p>
                    </div>)
                }

            </div>
        );
    }
}

export default Search;
