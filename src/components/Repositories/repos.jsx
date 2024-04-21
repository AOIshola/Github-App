import React from 'react'
import { Link } from 'react-router-dom'

function Repos({ repos, loading }) {
    return (
        loading ? (<div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
        </div>)
            :
            (repos.map((repo) => (
                <div key={repo.id}
                className=' flex flex-col shadow shadow-slate-400 bg-slate-600 w-1/2 items-center justify-center mx-auto pb-5 my-5'>
                    <h1 className='text-white text-3xl my-10 font-sans'>{repo.name}</h1>
                    <div>
                        <Link className='select-none rounded-lg bg-slate-500 py-3 px-6 my-10 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-slate-500/20 transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-10' to={`/repositories/${repo.name}`} state={{ repoData: repo }}>Check Details</Link>
                        <Link className='select-none rounded-lg bg-slate-500 py-3 px-6 my-10 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-slate-500/20 transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-10' to={repo.html_url} state={{ repoData: repo }}>Visit Repository</Link>
                    </div>
                </div>
            ))
            )
    )
};

export default Repos