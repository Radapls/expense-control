/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file App.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Friday, 3rd February 2023
 */

import React, { useState } from 'react'
import Header from './components/Header'

function App() {

    const [budget, setBudget] = useState(0)
    const [validBudget, setValidBudget] = useState(false)

  return (
    <div>
        <Header
            budget={budget}
            setBudget={setBudget}
            validBudget={validBudget}
            setValidBudget={setValidBudget}/>

    </div>
  )
}

export default App
