/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file NewBudget.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Saturday, 4th February 2023
 */

import { useState } from 'react';
import Message from './Message';

export default function NewBudget({budget, setBudget, validBudget, setValidBudget}) {

    const [message, setMessage] = useState('')

    const handleBudget = (e) => {
            e.preventDefault();
            if(!Number(budget) || Number(budget) < 0)
            {
                setMessage('Is not valid')
                return
            }

            setMessage('')
            setValidBudget(true)
    }

  return (
    <div className='container-budget container shadow'>
        <form className='form' onSubmit={handleBudget}>
            <div className='field'>
                <label> Set budget</label>

                <input
                    type="number"
                    className='new-budget'
                    placeholder='Set your budget'
                    min='1'
                    value={budget}
                    onChange={e => setBudget(Number(e.target.value))}/>

                <input
                    type="submit"
                    value='Add'/>

                    {message &&
                        <Message type='error'>{message}</Message>
                    }
            </div>
        </form>
    </div>
  )
}
