import React, { useEffect, useState } from "react"
import { getCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            getCustomers()
                .then((customerArray) => {
                    setCustomers(customerArray)
                })
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 0) {
                updateMessage("You have no customers")
            } else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )

    return (
        <>
            <h2>Customers</h2>
            <div>{totalCustomerMessage}</div>
            {
                customers.slice(0, 5).map((customer) => {
                    return <p key={`customer--${customer.id}`}>{customer.name}</p>
                })
            }
        </>
    )
}