/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Modal.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Saturday, 4th February 2023
 */
import React, { useEffect, useState } from 'react'
import Close from '../img/cerrar.svg'
import Message from './Message'

export default function Modal({
        setModal,
        animateModal,
        setAnimateModal,
        saveSpending,
        editSpent})
{
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [category, setCategory] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if(Object.keys(editSpent).length > 0) {
            setName(editSpent.name)
            setQuantity(editSpent.quantity)
            setCategory(editSpent.category)
            setId(editSpent.id)
            setDate(editSpent.date)
        }
    },[])

    const closeModal =  () => {
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if([name, quantity, category].includes('')) {
            setMessage('All the fields are obligatory')
            setTimeout(() => {
                setMessage('')
            }, 2000)
            return;
        }

        saveSpending({name, quantity, category, id, date})
        closeModal()
    }




  return (
    <div className='modal'>

        <div className='close-modal'>
            <img
                src={Close}
                alt="Close modal"
                onClick={closeModal}/>
        </div>

        <form  onSubmit={handleSubmit} className={`form ${animateModal ? 'animate' : 'close'}`}>
            <legend>{editSpent.name ? 'Edit Spent' : 'New spent'}</legend>

            {message && <Message type='error'>{message}</Message>}


            <div className='field'>
                <label htmlFor="name">Name of the spent</label>

                <input
                    type='text'
                    placeholder='Add the spent name'
                    id='name'
                    value={name}
                    onChange={e => setName(e.target.value)}/>
            </div>

            <div className='field'>
                <label htmlFor="quantity">Quantity</label>

                <input
                    type='number'
                    placeholder='Add the quantity of th spent ex: 300'
                    id='quantity'
                    min='1'
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}/>
            </div>

            <div className='field'>
                <label htmlFor="category">Category</label>

                <select
                    id="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}>

                        <option value="">--- Select one ---</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="various">Various</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                </select>
            </div>

            <input type="submit" value={editSpent.name ? 'Save changes' : 'Add spent'} />

        </form>

    </div>
  )
}
