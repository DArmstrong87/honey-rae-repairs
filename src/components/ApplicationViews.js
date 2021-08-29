import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { Employee } from "./employees/CreateEmployee"
import { EmployeeForm } from "./employees/EmployeeForm"
import { EmployeeList } from "./employees/EmployeeList"
import { Ticket } from "./serviceTickets/CreateTicket"
import { TicketForm } from "./serviceTickets/TicketForm"
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
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}