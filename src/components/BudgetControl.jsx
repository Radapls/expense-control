/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file BudgetControl.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Saturday, 4th February 2023
 */

import React, { useEffect, useState } from 'react'

export default function BudgetControl({budget, spent}) {

    const [available, setAvailable] = useState(0)
    const [used, setUsed] = useState(0)

    useEffect(() => {
        const totalSpent = spent.reduce((total, sp) => sp.quantity + total, 0)
        const totalAvailable = budget - totalSpent;

        setUsed(totalSpent)
        setAvailable(totalAvailable)
    }, [spent])


    const currencyFormat = (quantity) => {
        return quantity.toLocaleString('es-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='container-budget container shadow two-col'>
        <div>
            <p>Graph here</p>
        </div>

        <div className='content-budget'>
            <p>
                <span>Budget: </span> {currencyFormat(budget)}
            </p>
            <p>
                <span>Available: </span> {currencyFormat(available)}
            </p>
            <p>
                <span>Spent: </span> {currencyFormat(used)}
            </p>
        </div>
    </div>
  )
}
