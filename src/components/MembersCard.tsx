import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addMember } from '../features/membersSlice';
import { v4 as uuid } from 'uuid';

interface TeamCardType {
  id: string;
  name: string;
  members: string[];
}

export default function MembersCard({ id, name, members }: TeamCardType) {
  const dispatch = useDispatch();

  const [memberName, setMemberName] = useState('');
  
  return (
    <div className="member-card">
      <div className="member-team-name">{name}</div>      
      <div className="member-entries">
        <div className="member-names">
          {members.map((member) => {
            return <p className='member-name' key={uuid()}>{member}</p>
          })}
        </div>        
      </div>
      <div className="member-panel">
        <input 
          value={memberName} 
          onChange={(e) => setMemberName(e.target.value)}
        />
        <button onClick={() => {
          if (!memberName) return;
          dispatch(addMember({
            id,
            member: memberName
          }));
          setMemberName('');
        }}>Add Member</button>
      </div>
    </div>
  )
}
