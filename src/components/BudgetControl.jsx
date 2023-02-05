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
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function BudgetControl({
        budget,
        setBudget,
        spent,
        setSpent,
        setValidBudget
    }) {

    const [percentage, setPercentage] = useState(0)
    const [available, setAvailable] = useState(0)
    const [used, setUsed] = useState(0)

    useEffect(() => {
        const totalSpent = spent.reduce((total, sp) => sp.quantity + total, 0)
        const totalAvailable = budget - totalSpent;

        const newPercentage = (((budget - totalAvailable) / budget * 100)).toFixed(2)

        setUsed(totalSpent)
        setAvailable(totalAvailable)
        setTimeout(() => {
            setPercentage(newPercentage)
        },1000)
    }, [spent])

    const currencyFormat = (quantity) => {
        return quantity.toLocaleString('es-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const result = confirm('Do you want to reset budget and expenses?')

        if(result) {
            setSpent([])
            setBudget(0)
            setValidBudget(false)
        }
    }

  return (
    <div className='container-budget container shadow two-col'>
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: percentage > 100 ? '#dc2626' : '#0f52bd',
                    trailColor: '#eee8e8',
                    textColor: percentage > 100 ? '#dc2626' : '#0f52bd'
                })}
                text={`${percentage}% Spent`}
                value={percentage}>
            </CircularProgressbar>
        </div>

        <div className='content-budget'>
            <button className='reset-app' type='button' onClick={handleResetApp}>Reset app</button>
            <p>
                <span>Budget: </span> {currencyFormat(budget)}
            </p>
            <p className={`${available < 0 ? 'negative' : ''}`}>
                <span>Available: </span> {currencyFormat(available)}
            </p>
            <p>
                <span>Spent: </span> {currencyFormat(used)}
            </p>
        </div>
    </div>
  )
}
