// const postsPerPage = 10;
// let currentPage = 1
const KEY = import.meta.env.VITE_GITHUB_TOKEN

export const myRepositories = async (postsPerPage, currentPage) => {
    try {
        const response = await fetch(`https://api.github.com/users/AOIshola/repos?per_page=${postsPerPage}&page=${currentPage}`, {
            headers: {
                authorization: `token ${KEY}`
            }
        });
        if (response.ok != true) {
            throw new Error('response was not an OK response')
        }
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.error('Error fetching repositories')
        return [];
    }
}

export const allRepositories = async (postsPerPage) => {
    try {
        const repositories = await myRepositories()
        // console.log(typeof repositories)
        let allRepositories = []
        // while (repositories.length === )
        allRepositories = allRepositories.concat(repositories)
        return allRepositories
    } catch (error) {
        console.error('Errors getting all repositories')
    }
}