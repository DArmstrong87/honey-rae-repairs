import React, { useEffect, useState } from "react"

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employees) => {
                    setEmployees(employees)
                })
        },
        []
    )

    return (
        <>
            {employees.map(
                employee => {
                    return <h2 key={`employee--${employee.id}`}>{employee.name}</h2>
                }
            )}
        </>
    )
}