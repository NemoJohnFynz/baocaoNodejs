import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function Header() {
    const location = useLocation();
    const isActiveNav = (path) => location.pathname === path;
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            <div class="container-fluid ">
                <Link to="#" class="navbar-brand d-flex align-items-center gap-2  ">
                    <img src="https://w7.pngwing.com/pngs/62/708/png-transparent-disney-nemo-illustration-finding-nemo-marlin-pixar-nemo-miscellaneous-seafood-orange.png" alt="" width="60" height="50" class="d-inline-block align-text-top rounded-circle " />
                    <span>Nemo</span>
                </Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav justify-content-center gap-2">
                        <li class="nav-item">
                            <Link to="/" class={`nav-link link-secondary rounded-pill ${isActiveNav('/') ? ' rounded-pill bg-primary text-white' : ''}`} aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/friend" class={`nav-link link-secondary rounded-pill ${isActiveNav('/friend') ? ' rounded-pill bg-primary text-white' : ''}`} >Friend</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/11" class={`nav-link link-secondary rounded-pill ${isActiveNav('/11') ? ' rounded-pill bg-primary text-white' : ''}`} >11</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div class="collapse navbar-collapse" id="navbarNav"> */}

            {/* </div> */}
        </nav >
        // <ul class="nav nav-tabs">
        // <li class="nav-item">
        //     <Link to="/" class={`nav-link ${isActiveNav('/') ? 'active' : ''}`} aria-current="page">Home</Link>
        // </li>
        // <li class="nav-item">
        //     <Link to="/friend" class={`nav-link ${isActiveNav('/friend') ? 'active' : ''}`} >Friend</Link>
        // </li>
        // <li class="nav-item">
        //     <Link to="/11" class={`nav-link ${isActiveNav('/11') ? 'active' : ''}`} >11</Link>
        // </li>
        // </ul>
    )
}
