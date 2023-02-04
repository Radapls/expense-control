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
import Modal from './components/Modal'
import SpentList from './components/SpentList'
import { generateID } from './helpers'
import newSpent from './img/nuevo-gasto.svg'

function App() {

    const [budget, setBudget] = useState(0)
    const [validBudget, setValidBudget] = useState(false)

    const [modal, setModal] = useState(false)
    const [animateModal, setAnimateModal] = useState(false)

    const [spent, setSpent] = useState([])

    const handleNewSpent = () => {
        setModal(true)

        setTimeout(() => {
            setAnimateModal(true)
        }, 500)
    }

    const saveSpending = expense => {
        expense.id = generateID();
        expense.date = Date.now();
        setSpent([...spent, expense]);

        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }

  return (
    <div className={modal ? 'fix' : ''}>
        <Header
            spent={spent}
            budget={budget}
            setBudget={setBudget}
            validBudget={validBudget}
            setValidBudget={setValidBudget}/>


            {validBudget && (
                <>
                <main>
                    <SpentList
                    spent={spent} />
                </main>

                <div className='new-spent'>
                    <img
                        src={newSpent}
                        alt="New spent icon"
                        onClick={handleNewSpent}/>
                </div>
                </>
            )}

        {modal &&
            <Modal
                animateModal={animateModal}
                setModal={setModal}
                setAnimateModal={setAnimateModal}
                saveSpending={saveSpending}
                />}
    </div>
  )
}

export default App
