import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, set] = useState({})
    const { employeeId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then(data => {
                    set(data)
                })
        },
        [ employeeId ]
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__spectialty">Specialty: {employee.specialty}</div>
            </section>
        </>
    )
}