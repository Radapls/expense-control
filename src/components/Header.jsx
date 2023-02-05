/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Header.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Saturday, 4th February 2023
 */

import React from 'react'
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

export default function Header({
        budget,
        setBudget,
        validBudget,
        setValidBudget,
        spent,
        setSpent
}) {
  return (
    <header>
        <div className='header-brand'>
            <img src="https://raw.githubusercontent.com/Radapls/expense-control/main/src/img/abacus.webp" width='80px' alt="abacus" draggable='false'/>
            <h1>Cost Control</h1>
        </div>

        {validBudget

            ? ( <BudgetControl
                budget={budget}
                setBudget={setBudget}
                setSpent={setSpent}
                spent={spent}
                setValidBudget={setValidBudget}/> )

            : ( <NewBudget
                budget={budget}
                setBudget={setBudget}
                validBudget={validBudget}
                setValidBudget={setValidBudget}/> )
        }

    </header>
  )
}
