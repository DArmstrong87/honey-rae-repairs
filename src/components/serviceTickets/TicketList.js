import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, setTicket] = useState([])
    const history = useHistory()
    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
            .then(history.go())
    }

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    setTicket(data)
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
                            <button key={`delete--${ticket.id}`} className='deleteButton' onClick={() => {
                                deleteTicket(ticket.id)
                            }}>Delete</button>
                        </p>
                    }
                )
            }
        </>
    )
}
