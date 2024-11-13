import React from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function Header() {
    const location = useLocation();
    const isActiveNav = (path) => location.pathname === path;
    return (
        <nav class="navbar navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Fixed top</a>
            </div>
        </nav>
        // <ul class="nav nav-tabs">
        //     <li class="nav-item">
        //         <Link to="/" class={`nav-link ${isActiveNav('/') ? 'active' : ''}`} aria-current="page">Home</Link>
        //     </li>
        //     <li class="nav-item">
        //         <Link to="/friend" class={`nav-link ${isActiveNav('/friend') ? 'active' : ''}`} >Friend</Link>
        //     </li>
        //     <li class="nav-item">
        //         <Link to="/11" class={`nav-link ${isActiveNav('/11') ? 'active' : ''}`} >11</Link>
        //     </li>
        // </ul>
    )
}
