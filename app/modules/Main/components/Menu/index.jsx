import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.css'

export default function Menu({ items }) {
  return (
    <nav className={styles.menu}>
      <ul>
        {items.map(item => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
