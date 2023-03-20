
import styles from './ExerciseToolbar.module.css'
import React from 'react'
import { MenuFoldOutlined, SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function ExerciseToolbar() {
  return (
    <div className={styles.exercise_toolbar}>
        <SearchOutlined></SearchOutlined>
        <input></input>
        <MenuFoldOutlined></MenuFoldOutlined>
        <span>Filter</span>
    </div>
  )
}

export default ExerciseToolbar
