import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

// Sole responsibility of this module is to listen for when the url is changed and render the specific component.

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
        </>
    )
}