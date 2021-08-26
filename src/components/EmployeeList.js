import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialtiesList, updateSpecialties] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const specialties = employees.map(employee => {
            return employee.specialty
        }).join(", ")

        updateSpecialties(specialties)

    }, [employees])

    return (
        <>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
            <div>
                <h3>Specialties:</h3>
                <p>{specialtiesList}</p>
            </div>
        </>
    )
}
