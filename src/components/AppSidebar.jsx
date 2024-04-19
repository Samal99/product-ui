import React from 'react'

function AppSidebar() {
    return (

        <div className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item">
                            <p className="dahtext">Dashboard</p>

                        </li>
                        <li className="nav-item">
                            <a href={'/home'} className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>User Profile</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={'/offers'} className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Super Offer</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={'/coupon'} className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Discount Coupon</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={'/wallet'} className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>My Wallet</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={'/orders'} className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>My Order</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={'/sells'} className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>My Sells</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default AppSidebar
