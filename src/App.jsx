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
import Filter from './components/Filter'
import Header from './components/Header'
import Modal from './components/Modal'
import SpentList from './components/SpentList'
import { generateID } from './helpers'
import newSpent from './img/nuevo-gasto.svg'

function App() {

    const [spent, setSpent] = useState(
        JSON.parse(localStorage.getItem('expenses')) ?? []
    )

    const [budget, setBudget] = useState(
        Number(localStorage.getItem('budget' ?? 0))
    )
    const [validBudget, setValidBudget] = useState(false)

    const [modal, setModal] = useState(false)
    const [animateModal, setAnimateModal] = useState(false)

    const [editSpent, setEditSpent] = useState({})

    const [filter, setFilter] = useState('')
    const [filterExpenses, setFilterExpenses] = useState([])

    useEffect(() => {
        if(Object.keys(editSpent).length > 0) {
            setModal(true)

            setTimeout(() => {
                setAnimateModal(true)
            }, 500)
        }
    },[editSpent])

    useEffect(() => {
        localStorage.setItem('budget', budget ?? 0)
    }, [budget])


    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(spent) ?? []);
    }, [spent])

    useEffect(() => {
        if(filter){
            const filterExpenses = spent.filter(spent => spent.category === filter);

            setFilterExpenses(filterExpenses)
        }
    }, [filter])

    useEffect(() => {
        const budgetLocalStorage = Number(localStorage.getItem('budget')) ?? 0;

        if(budgetLocalStorage > 0) {
            setValidBudget(true)
        }
    }, [])

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
                    <Filter
                        filter={filter}
                        setFilter={setFilter}/>
                    <SpentList
                        spent={spent}
                        setEditSpent={setEditSpent}
                        deleteExpense={deleteExpense}
                        filter={filter}
                        filterExpenses={filterExpenses}
                        />
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
