import React from 'react'
import { useDispatch } from 'react-redux'
import { setAuthenticated } from '../Store/StoreSlice'

function HomePage() {

    const dispatch = useDispatch()

    function handleLogout() {
        localStorage.setItem('auth-data', '')
        dispatch(setAuthenticated())
    }
    return (
        <div>
            <p>Home page</p>
            <button className='text-4xl p-2 bg-slate-500' onClick={() => handleLogout()}>Log out</button>
        </div>
    )
}

export default HomePage
