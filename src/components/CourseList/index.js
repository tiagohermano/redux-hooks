import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CourseList() {
  const qty = 2;

  const courses = useSelector(
    state => state.data.slice(0, qty),
    [qty]
  )
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({type: 'ADD_COURSE', title: 'GraphQL'})
  }

  return (
    <>
      <div>
        <ul>
          {courses.map(course => <li key={course}>{course}</li>)}
        </ul>
      </div>
      <button type="button" onClick={addCourse}>Adicionar curso</button>
    </>
  )
}
