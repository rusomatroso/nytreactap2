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
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a5eb3d09ba5f4986879af7d2f3d021f4&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231");
    }
};
