import axios from "axios";

const githubToken = "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"

const ApiKey = axios.create({
    baseURL: "https://api.github.com/search/repositories?q=language:javascript+sort:followers&per_pages=5",
    headers: {
        'Accept': 'application/vnd.Github.v3+json',
        'Authorization': "token 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"
    }
})

export default ApiKey;

// username: import.meta.env.VITE_APP_API_USERNAME,
// password: import.meta.env.VITE_APP_API_KEY,