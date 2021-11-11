import React from 'react'
import { Routes as Switch, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

import Create from './pages/Create';
import Index from './pages/Index';
import Show from './pages/Show';
import Update from './pages/Update';

export default function Routes() {
    const location = useLocation();
    const transitions = useTransition(location, {
        from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
        enter: { opacity: 1, transform: 'translateY(0)', position: 'absolute' },
        leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },
    })

    return transitions((props, item) => (
        <animated.div style={props}>
            <Switch location={item}>
                <Route path="/" element={<Create/>} />
                <Route path="/index" element={<Index/>} />
                <Route path="/show" element={<Show/>} />
                <Route path="/create" element={<Create/>} />
                <Route path="/update" element={<Update/>} />
            </Switch>
        </animated.div>
    ))
}