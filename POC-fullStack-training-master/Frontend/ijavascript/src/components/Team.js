import React,{useState, useEffect} from 'react'
import  Navbar from './Navbar'
import  AnimatedBox from './AnimatedBox'
import '../styles/team.css'
import axios from 'axios'
export const Team = () => {
  const [Team, setTeam] = useState("");
  useEffect(() => {
   
    axios.get("http://localhost:5000/api/Team").then(response => {
      // console.log(response.data);
     setTeam(response.data)
    //  console.log("team",Team)
  })
  .catch(err => {
      console.log(err);
     
  })
  },[])

  // const members = Team.map(item => <TeamMembers key={item.userId} team={item.name}/>)

  return (
   
    <div className="team-page">
    <Navbar />
    <div className="team-members">
        <h2>Meet the Team</h2>
    </div>
    <div className="team">
        <div>
          {Team && Team.map(member=>  <div key={member.userId} className="member-list">
            <img src={require('../images/profile.png')} alt='member'/>
            <h3>{member.name}</h3>
        </div>)}
            {/* {this.state.isLoading && <div style={{margin: '30px'}}><ReactSpinner type="border" color="primary" size="5" /></div>} */}
          
        </div>
        <AnimatedBox />
    </div>
</div>
  )
}
const TeamMembers = ({team}) =>
        <div className="member-list">
            <img src='profile.png' alt='member'/>
            <h3>{team}</h3>
        </div>

export default Team
