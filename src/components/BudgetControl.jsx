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
  return (
    <div className='container-budget container shadow two-col'>
        <div>
            <p>Graph here</p>
        </div>

        <div className='content-budget'>
            <p>
                <span>Budget: </span> ${budget}
            </p>
        </div>
    </div>
  )
}
