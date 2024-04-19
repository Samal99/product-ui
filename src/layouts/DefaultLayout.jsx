import React from 'react'
import {  AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Outlet } from "react-router-dom"



function DefaultLayout() {
    return (
        <div className="wrapper">
            <AppSidebar />
            <main className="">
                <AppHeader />
                <div className="">
                    <Outlet/>
                    <AppFooter/>
                </div>
            </main>
        </div>
    )
}

export default DefaultLayout
