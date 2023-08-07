import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { useStore } from "@nanostores/react"
import { $employee } from "./stores/employee.store"
import DisplayDepartment from "./components/DisplayDepartment"
import DisplayEmployee from "./components/DisplayEmployee"

function App() {
  return (
    <>
      <div>
        <DisplayEmployee />
        <hr />
        <DisplayDepartment />
      </div>
    </>
  )
}

export default App
