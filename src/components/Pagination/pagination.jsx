import React from 'react'

function Pagination({ repositories, reposPerPage, handlePagination }) {
    const numRepos = repositories.length
    let pageNumbers = []
    for (let i = 1; i <= Math.ceil(numRepos / reposPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className='flex gap-5 items-center justify-center max-w-fit mx-auto'>
            {pageNumbers.map((num) => (
                <button onClick={handlePagination} key={num}
                className='border border-slate-400 rounded-lg hover:bg-slate-500 text-white p-2 w-10  mx-5 text-xl'
                >
                {num}
                </button>
            ))}
        </div>
    )
}

export default Pagination