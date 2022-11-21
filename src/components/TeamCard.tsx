import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTeam } from '../features/teamsSlice'
import { addWholeTeam } from '../features/membersSlice'
import { v4 as uuid } from 'uuid'

interface TeamCardTypes {
  name: string
  index: number
}

export default function TeamCard({name, index}: TeamCardTypes) {
  const dispatch = useDispatch()

  return (
    <div className="team-card">
      <p
        className='team-card-name'
        onClick={() => {
          dispatch(removeTeam(index));
          dispatch(addWholeTeam({
            id: uuid(),
            name,
            members: []
          }))
        }}
      >
        {name}
      </p>
      <p 
        className='removeButton'
        onClick={() => {
          dispatch(removeTeam(index))
        }}
      >
        -
      </p>
    </div>
  )
}
