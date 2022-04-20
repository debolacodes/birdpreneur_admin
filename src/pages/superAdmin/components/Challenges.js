import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";

import TabTitle from '../../../components/TabTitle';
import { formatToCurrency} from "../../../utils";
export default function Challenges() {
    const {
        challenges,
        toggleChallenge
    } = useContext(mainFunctions)

  const [filteredChallenges, setFilteredChallenges] = useState([])
  const DAILY_CHALLENGE_TAB = {id: "daily", title:"Daily Challenges", data:{}}
  const WEEKLY_CHALLENGE_TAB = {id: "week", title:"Weekly Challenges", data:{}};
  const MONTHLY_CHALLENGE_TAB = {id: "month", title:"Monthly Challenges", data:{}};
  const [activeChartTab, setActiveChartTab ] = useState(DAILY_CHALLENGE_TAB);

  useEffect(()=>{
    if(challenges){
        var fc = challenges.filter((thisChallenge, index)=>{
            if(activeChartTab.id === thisChallenge.type){
                return true
            }
            return false
        })
        setFilteredChallenges(fc)
    }
  },[Challenges, activeChartTab])
  return (
    <div>
        <TabTitle pages={[DAILY_CHALLENGE_TAB, WEEKLY_CHALLENGE_TAB, MONTHLY_CHALLENGE_TAB]} 
            active={activeChartTab} 
            setActive={setActiveChartTab} 
            underline={true}
        />
        <div className='challenges_title'>Challenges</div>
        <div className='challenge_box'>
            {filteredChallenges.map((thisChallenge, index)=>{
            return(
                <div className='challenge_box_tr' key={thisChallenge.id}>
                    <div className='title_box'>
                        <div className='title'>{thisChallenge.title}</div>
                        <div className='sub_title'>{thisChallenge.subtitle}</div>
                    </div>
                    <div className='challenge_box_td'>
                            <div className="item_text">₦{formatToCurrency(thisChallenge.reward, 1)}</div>
                            <div className="item_action">Edit</div>
                    </div>
                    <div className='challenge_box_td'>
                        <div className={`toggle_container ${thisChallenge.active ? "active":""}`}
                        onClick={()=>{
                            toggleChallenge(thisChallenge.id)
                        }}
                        >
                            <div className='toggle_knob'></div>
                        </div>
                    </div>
                </div>
            )}
            )}
        </div>
    </div>
  )
}
