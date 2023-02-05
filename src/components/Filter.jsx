/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Filter.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Saturday, 4th February 2023
 */

import React from 'react'

export default function Filter({filter, setFilter}) {
  return (
    <div className='filter shadow container'>
        <form>
            <div className='field'>
                <label>Filter by expenses</label>
                <select
                    value={filter}
                    onChange={e => setFilter(e.target.value)}>
                    <option value="">All the expenses</option>
                    <option value="saving">Saving</option>
                    <option value="food">Food</option>
                    <option value="house">House</option>
                    <option value="various">Various</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                </select>
            </div>
        </form>
    </div>
  )
}
