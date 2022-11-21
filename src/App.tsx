import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import MembersCard from './components/MembersCard';
import TeamCard from './components/TeamCard';
import { addTeam } from './features/teamsSlice';

function App() {
  const [teamName, setTeamName] = useState('')

  const teams = useSelector(
    (state: RootState) => state.teams.value
  )

  const teamNames = useSelector(
    (state: RootState) => state.teamNames.value
  )

  const dispatch = useDispatch();

  const handleAddTeam = () => {
    if (!teamName) return;
    dispatch(addTeam(teamName));
    setTeamName('');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="teams">
          <div>
            <h1 className="teams-header">Teams</h1>
            <div className="team-cards">
              {teams.map((name, index) => {
                return <TeamCard key={index} name={name} index={index} />
              })}
            </div>
          </div>
          <div className="teams-panel">
            <input 
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <button onClick={handleAddTeam}>Add Team</button>            
          </div>
        </div>
        <div className="members">
          <h1 className="members-header">Members</h1>
          <div className="member-cards">
            {teamNames.map(team => {
              return <MembersCard key={team.id} id={team.id} name={team.name} members={team.members}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
