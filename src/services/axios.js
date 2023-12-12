import axios from "axios";

const githubToken = "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"

const Api = axios.create({
    baseURL: "https://api.github.com/search/repositories?q=language:javascript+sort:followers&per_pages=5",
    headers: {
        'Accept': 'application/vnd.Github.v3+json',
        'Authorization': "token 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"
    }
})

export default Api;

// username: import.meta.env.VITE_APP_API_USERNAME,
// password: import.meta.env.VITE_APP_API_KEY,