import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialtiesList, updateSpecialties] = useState("")
    const history = useHistory()

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
            <div>
                <button onClick={() => history.push("/employees/create")}>
                    Hire Employee</button>
            </div>
            <h2>Employees</h2>

            <div>
                Specialties: {specialtiesList}
            </div>
            <div>
                {
                    employees.map(
                        (employee) => {
                            return <p key={`employee--${employee.id}`}>
                                <Link to={`/employees/${employee.id}`}>{employee.name}</Link> <br /> Specialty: {employee.specialty}</p>
                        }
                    )
                }
            </div>
        </>
    )
}
