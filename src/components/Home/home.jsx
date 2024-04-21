import React, { useEffect, useState } from 'react'
import { allRepositories, myRepositories } from '../../utils'
import { Link, useLoaderData } from 'react-router-dom'
import Repos from '../Repositories/repos'
import Pagination from '../Pagination/pagination'

const Home = () => {
    // const data = useLoaderData()
    const [reposOnPage, setReposOnPage] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [reposPerPage, setReposPerPage] = useState(10)
    const [loading, setLoading] = useState(true)
    // console.log(data)
    const [repositories, setRepositories] = useState([])
    const [userData, setUserData] = useState([])

    // const allRepositories = async () => {
    //     try {
    //         let repositories = await myRepositories()
    //         let allRepos = []
    //         while (reposOnPage.length === reposPerPage) {
    //             allRepos = allRepos.concat(repositories);
    //             setCurrentPage(prev => prev + 1)        
    //        }
    //        console.log(allRepos)
    //     } catch (error) {
    //         console.error('Error ti po gan')
    //     }
    // }

    // allRepositories()
    const numPages = Math.ceil((repositories.length + 1) / reposPerPage)
    const handlePagination = (page) => {
        setCurrentPage(page)
    };

    useEffect(() => {
        myRepositories(reposPerPage, currentPage).then(data => setReposOnPage(data))
        // setReposOnPage(data)
        // setRepo(repositories[currentPage])
        // console.log(repo)
        allRepositories(reposPerPage).then(data => setRepositories(data))
        setLoading(false)
    }, [currentPage]);

    const handleNext = (e) => {
        e.preventDefault()
        currentPage < numPages ? setCurrentPage(prev => prev + 1) : setCurrentPage(1)
        // console.log(currentPage)
    }

    const handlePrev = (e) => {
        e.preventDefault()
        currentPage > 1 ? setCurrentPage(prev => prev - 1) : setCurrentPage(numPages)
    }

    useEffect(() => {
        async function userData() {
            try {
                const response = await fetch(`https://api.github.com/users/AOIshola`, {
                    headers: {
                        authorization: 'token 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'
                    }
                })
                if (response.ok != true) {
                    throw new Error('Response was not an OK response')
                }
                const userData = await response.json()
                // console.log(userData)
                setUserData(userData)
            } catch (error) {
                console.error('Error fetching User data')
                return []
            }
        }
        userData();
    }, [])

    return (
        <div className='w-full bg-gray-700 flex-col items-center gap-10 justify-around overflow-y-visible'>
            <div className='bg-gray-700 w-3/4 mx-auto px-5 py-4 grid grid-cols-2 gap-y-5 gap-x-10 border-b-4 border-slate-500 text-white' >
                <div className='w-15 h-15 mr-10'>
                    <img src={userData.avatar_url} width={300} alt="User Avatar" />
                </div>
                <div className=' flex flex-col gap-y-5 max-w-fit items-center -ml-60'>
                    <h1 className='text-3xl'>Name: {userData.name}</h1>
                    <p className=' text-left w-1/2'>{userData.bio}</p>
                    <div className='w-1/2 font-bold flex flex-wrap justify-around items-start'>
                        <span className=''>Followers: {userData.followers}</span>
                        <span className=''>Following: {userData.following}</span>
                    </div>
                </div>
            </div>
            <div className='my-5 text-2xl' >
                <h1>Click on <Link to='/repositories' className=' hover:underline text-slate-300'>Repo</Link> to access ErrorBoundary Page</h1>
            </div>
            <Repos
                repos={reposOnPage}
                loading={loading} />
            {/* {reposOnPage.map((repo) => (
                <div key={crypto.randomUUID()} className=' bg-slate-600 w-1/2 items-center justify-center mx-auto pb-5 my-5'>
                    <h3 className='text-white'>{repo.name}</h3>
                    <Link className=' text-white' to={repo.html_url}>{repo.html_url}</Link>
                </div>
            ))} */}
            <div className='flex w-1/2 mx-auto items-center justify-between'>
                <button onClick={handlePrev} className=' p-5 bg-slate-500 text-center align-middle font-sans rounded-lg hover:bg-slate-800 text-white mx-5'>Prev</button>
                <Pagination
                    repositories={repositories}
                    reposPerPage={reposPerPage}
                    handlePagination={handlePagination}
                />
                <button onClick={handleNext} className=' p-5 bg-slate-500 text-center align-middle font-sans rounded-lg hover:bg-slate-800 text-white mx-5'>Next</button>
            </div>
        </div>
    )
}

export default Home