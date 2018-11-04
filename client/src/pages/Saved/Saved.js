import React, {Component} from "react";
import {List, ListItem} from "../../components/List";
import API from "../../data/API";

class Search extends Component {
    state = {
        articles: [],
        topic: "",
        startYear: "",
        endYear: ""
    };

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles = () => {
        API.getArticles()
            .then(res =>
                this.setState({articles: res.data})
            )
            .catch(err => console.log(err));
    };
    deleteArticleSubmit = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
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

                {this.state.articles.length ? (

                    <List>
                        {this.state.articles.map(article => (
                            <ListItem
                                key={article._id}
                                headline={article.headline}
                                link={article.link}
                                category={article.category}
                                date={article.date}
                            >

                                <button className="btn btn-outline-danger mb-2"
                                        onClick={() => this.deleteArticleSubmit(article._id)}>
                                    Delete Article
                                </button>


                            </ListItem>))}
                    </List>
                ) : (
                    <div className="alert alert-warning">
                        <p>You did not save any articles, please <a href="/">search</a> for some.</p>
                    </div>)
                }

            </div>
        );
    }
}

export default Search;
