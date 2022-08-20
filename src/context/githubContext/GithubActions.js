import axios from "axios";

const GITHUB_API = process.env.REACT_APP_GITHUB_API
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_API,
    Headers: {
        Authorization: `token ${TOKEN}`
    }
})

export const searchUser = async (text) => {
    const params = new URLSearchParams({
        q: text
    })

    const response = await github.get(`/search/users?${params}`)
    return response.data.items
}

export const getUserAndRepos = async (login) => {

    const params = new URLSearchParams({
        q : login,
        sort : "created",
        per_page : 15,
    })

    const [user, repos] = await Promise.all(
        [github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`)]
    )

    console.log(user.data, 'leleyi', repos.data)
    return { user: user.data, repos: repos.data }
}
