import React from 'react'

function Error404() {
    return (
        <div className="bg-gradient-to-r from-slate-500 to-slate-200">
            <div className="w-9/12 m-auto py-5 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-9xl font-bold text-slate-400">404</h1>
                        <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                        <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <button className="bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-300 text-white font-semibold px-6 py-3 rounded-md mr-6">
                            HOME
                        </button>
                        <button className="bg-gradient-to-r from-slate-400 to-slate-500 hover:from-slate-500 hover:to-slate-300 text-white font-semibold px-6 py-3 rounded-md">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404