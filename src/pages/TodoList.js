import React, { useEffect } from 'react'
import './index.css'
// import { store } from '../store'
const TodoList = (props) => {
    const { arr = [], remove, handleChange } = props
    return (
        <>
            <ul>
                {arr.map((item, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" value={item.done} checked={item.done} onChange={() => {
                                handleChange(index)
                            }} />
                            <p>{item.value}</p>
                            <a onClick={() => {
                                remove(index)
                            }} >-</a>
                        </li>
                    )
                }
                )}

            </ul>
        </>
    )
}
export default TodoList