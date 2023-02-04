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
import React from 'react'
import Close from '../img/cerrar.svg'

export default function Modal({setModal, animateModal, setAnimateModal}) {

    const closeModal =  () => {
        setAnimateModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500)
    }

  return (
    <div className='modal'>

        <div className='close-modal'>
            <img
                src={Close}
                alt="Close modal"
                onClick={closeModal}/>
        </div>

        <form className={`form ${animateModal ? 'animate' : 'close'}`}>
            <legend>New spent</legend>

            <div className='field'>
                <label htmlFor="name">Name of the spent</label>

                <input
                    type='text'
                    placeholder='Add the spent name'
                    id='name'/>
            </div>

            <div className='field'>
                <label htmlFor="quantity">Quantity</label>

                <input
                    type='number'
                    placeholder='Add the quantity of th spent ex: 300'
                    id='quantity'/>
            </div>

            <div className='field'>
                <label htmlFor="category">Category</label>

                <select
                    id="category">

                        <option value="">--- Select one ---</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="various">Various</option>
                        <option value="entertainment">entertainment</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                </select>
            </div>

            <input type="submit" value="Add spent" />

        </form>

    </div>
  )
}
