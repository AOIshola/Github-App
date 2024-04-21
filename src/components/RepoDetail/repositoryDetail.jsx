import React, { useEffect, useState} from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function RepositoryDetail() {
    const { state } = useLocation()
    const { userData, setUserData } = useState({})
    // console.log(location)
    const repoData = state?.repoData

    // useEffect(() => {
    //     async function fetchUserData() {
    //         try {
    //             const response = await fetch('https://api.github.com/users/AOIshola', {
    //                 headers: {
    //                     authorization: 'token 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'
    //                 }
    //             });
    //             if (!response.ok) {
    //                 throw new Error('Response was not OK');
    //             }
    //             const userData = await response.json();
    //             console.log(userData);
    //             // Assuming setUserData is defined using useState
    //             setUserData(userData);
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     }
    //     fetchUserData();
    // }, []);
    // reposData = repoData === undefined ? false : repoData
    // console.log(repoData)
    return (
        // repoData ?
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto mt-10" >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-600">
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Repository Name: {repoData.name}
                </h5>
                <h5>Repository ID: {repoData.id}</h5>
                <h5>Language: {repoData.language}</h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                </p>
            </div>
            <div className="p-6 pt-0">
                <Link to='..' relative='path' data-ripple-light="true" type="button" className="select-none rounded-lg bg-slate-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-slate-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Back
                </Link>
            </div>
        </div>
        // :
        // (<div
        //     className=' flex items-center h-52 mx-auto border shadow-lg border-gray-700 rounded-lg text-center'>
        //     <h1 className=' align-center items-center mx-auto'>This account is owned by AOIshola. Go <Link to='/' className=' text-orange-500 hover:underline'>Home</Link> see the list of repositories</h1>
        // </div>)
    )
};

export default RepositoryDetail