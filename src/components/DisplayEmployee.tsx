import React from "react"
import { useStore } from "@nanostores/react"
import { $employee } from "../stores/employee.store"

function DisplayEmployee() {
  const emp = useStore($employee, {
    keys: ["name", "department"],
  })
  return (
    <div>
      <div>
        <input
          type="text"
          value={emp.name}
          onChange={(e) => {
            $employee.setKey("name", e.target.value)
          }}
        />
      </div>
      <pre>
        <code>{JSON.stringify(emp, null, 2)}</code>
      </pre>
    </div>
  )
}

export default DisplayEmployee
