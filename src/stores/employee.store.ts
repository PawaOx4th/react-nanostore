import { map, deepMap, computed } from "nanostores"

type EmployeeType = {
  id: number
  name: string
  age: number
  salary: number
  department: {
    id: number
    name: string
  }
}

export const $employee = map<EmployeeType>({
  id: 0,
  name: "Glen",
  age: 0,
  salary: 2000,
  department: {
    id: 14,
    name: "become",
  },
})

export const $department = computed(
  $employee,
  (employee) => employee.department
)
