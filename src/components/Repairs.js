import React from "react"
import { ApplicationViews } from "./ApplicationViews.js"
import { NavBar } from "./nav/NavBar.js"
import "./Repairs.css"

export const Repairs = () => {
    return (
        <>
        <NavBar/>
            <h1>Honey Rae Repairs</h1>
        <ApplicationViews />
        </>
    )
}