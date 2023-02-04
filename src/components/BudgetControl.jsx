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

import React from 'react'

export default function BudgetControl({budget}) {

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
                <span>Available: </span> {currencyFormat(budget)}
            </p>
            <p>
                <span>Spent: </span> {currencyFormat(budget)}
            </p>
        </div>
    </div>
  )
}