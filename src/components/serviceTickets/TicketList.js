import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTicket] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTicket(data)
                })
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}>
                    Create Ticket</button>
            </div>
            <h2>Service Tickets</h2>
            <h4>There are {tickets.length} open tickets.</h4>
            {
                tickets.map(
                    (ticket) => {
                        return <p key={`ticket--${ticket.id}`} className={ticket.emergency ? `emergency` : `ticket`}>
                            {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                        </p>
                    }
                )
            }
        </>
    )
}
