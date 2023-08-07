import React from "react"
import { useStore } from "@nanostores/react"
import { $department, $employee } from "../stores/employee.store"

function DisplayDepartment() {
  const { department } = useStore($employee, {
    keys: ["department"],
  })
  return (
    <div>
      <div>
        <input
          type="text"
          value={department.name}
          onChange={(e) => {
            $employee.setKey("department", {
              ...$employee.get().department,
              name: e.target.value,
            })
          }}
        />
      </div>
      <div>{JSON.stringify(department)}</div>
    </div>
  )
}

export default DisplayDepartment
