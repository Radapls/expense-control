/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file SpentList.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Saturday, 4th February 2023
 */

import React from 'react'
import Expense from './Expense'

export default function SpentList({
        spent,
        setEditSpent,
        deleteExpense,
        filter,
        filterExpenses
    }) {
  return (
    <div className='spent-list container'>

        { filter
            ? ( <>
                    <h2>{filterExpenses.length ? 'Expenses': 'There are no expenses yet'}</h2>

                    {filterExpenses.map(expense => (
                    <Expense
                        key={expense.id}
                        expense={expense}
                        setEditSpent={setEditSpent}
                        deleteExpense={deleteExpense}
                    />
                ))}
            </>
            )
            : (
                <>
            <h2>{spent.length ? 'Expenses': 'There are no expenses yet'}</h2>

                {spent.map(expense => (
                    <Expense
                        key={expense.id}
                        expense={expense}
                        setEditSpent={setEditSpent}
                        deleteExpense={deleteExpense}
                    />
            ))}
            </>
            )
        }
    </div>
  )
}
