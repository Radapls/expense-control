/*
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file Expense.jsx
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Saturday, 4th February 2023
 */

import React from 'react';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { formatDate } from '../helpers';

import SavingIcon from '../img/icono_ahorro.svg';
import HouseIcon from '../img/icono_casa.svg';
import FoodIcon from '../img/icono_comida.svg';
import SpentIcon from '../img/icono_gastos.svg';
import EntertainmentIcon from '../img/icono_ocio.svg';
import HealthIcon from '../img/icono_salud.svg';
import SubscriptionsIcon from '../img/icono_suscripciones.svg';

const iconLibrary = {
    saving: SavingIcon,
    food: FoodIcon,
    house: HouseIcon,
    various: SpentIcon,
    entertainment: EntertainmentIcon,
    health: HealthIcon,
    subscriptions: SubscriptionsIcon
}

export default function Expense({expense, setEditSpent}) {

    const {name, quantity, category, id, date} = expense;

    const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() => setEditSpent(expense)}>
            Edit
        </SwipeAction>
    </LeadingActions>)

    const trailingActions = () =>(
        <TrailingActions>
            <SwipeAction onClick={() => console.log('kek')}>
                Delete
            </SwipeAction>
        </TrailingActions>
    )

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}>

        <div className='spent shadow'>
            <div className="content-spent">

                { <img
                    src={iconLibrary[category]}
                    alt='Spent Icon'
                    draggable='false'
                />}

                <div className="spent-description">
                    <p className='category'> {category}</p>
                    <p className='spent-name'> {name} </p>
                    <p className='spent-date'> Added on: {''} <span>{formatDate(date)}</span> </p>
                </div>
            </div>
                    <p className='quantity-spent'> ${quantity}</p>
        </div>

        </SwipeableListItem>
    </SwipeableList>
  )

}