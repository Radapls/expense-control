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

import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import SpentList from './components/SpentList'
import { generateID } from './helpers'
import newSpent from './img/nuevo-gasto.svg'

function App() {

    const [spent, setSpent] = useState([])

    const [budget, setBudget] = useState(0)
    const [validBudget, setValidBudget] = useState(false)

    const [modal, setModal] = useState(false)
    const [animateModal, setAnimateModal] = useState(false)

    const [editSpent, setEditSpent] = useState({})

    useEffect(() => {
        if(Object.keys(editSpent).length > 0) {
            setModal(true)

            setTimeout(() => {
                setAnimateModal(true)
            }, 500)
        }
    },[editSpent])


    const handleNewSpent = () => {
        setModal(true)
        setEditSpent({})

        setTimeout(() => {
            setAnimateModal(true)
        }, 500)
    }

    const deleteExpense = id => {
        const updatedExpenses = spent.filter(res => res.id !== id)

        setSpent(updatedExpenses)
    }

    const saveSpending = expense => {

        if(expense.id){
            const updatedExpenses = spent.map(spentState =>
                spentState.id === expense.id
                    ? expense
                    : spentState)

            setSpent(updatedExpenses)
            setEditSpent({})
        } else {
            expense.id = generateID();
            expense.date = Date.now();
            setSpent([...spent, expense]);
        }

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
                        spent={spent}
                        setEditSpent={setEditSpent}
                        deleteExpense={deleteExpense}/>
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
                editSpent={editSpent}
                setEditSpent={setEditSpent}
                />}
    </div>
  )
}

export default App
