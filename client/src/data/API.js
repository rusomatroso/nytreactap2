import axios from "axios";

export default {
    getArticles: function () {
        return axios.get("/api/articles");
    },
    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },
    saveArticle: function (articleData) {
        return axios.post("/api/articles", articleData);
    },
    findArticles: function (topic, startYear, endYear) {
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=XNUlZP3jgP8BnKEYuJYwWkbbGHI89pF4&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231");
    }
};
