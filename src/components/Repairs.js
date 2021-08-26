import React from "react"
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./EmployeeList.js"

export const Repairs = () => {
    return (
        <>
            <h1>Honey Rae Repairs</h1>
            {CustomerList()}
            <h1>Employees</h1>
            {EmployeeList()}
        </>
    )
}