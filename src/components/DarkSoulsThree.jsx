import { useState } from 'react'
import Quests from './DarkSoulsThree/Quests'
import Bosses from './DarkSoulsThree/Bosses'
import allQuestInfo from '../data/quests'
import allBossInfo from '../data/bosses'

function DarkSoulsThree({ choice }) {
    const [tab, setTab] = useState('quests')
    const [activeQuest, setActiveQuest] = useState(allQuestInfo[0])
    const [activeBoss, setActiveBoss] = useState(allBossInfo[0])

    return(
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden m-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>

                {tab == 'quests' && <Quests active={activeQuest} />}
                {tab == 'bosses' && <Bosses active={activeBoss} />}
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu w-80 bg-base-100 text-base-content">
                        <button onClick={() => choice("")} className="btn btn text-xs">Choose different game</button>
                        <div className="tabs tabs-boxed flex justify-center bg-base-100 my-5">
                            <a className={tab == 'quests' ? 'tab tab-active' : 'tab'} onClick={() => setTab('quests')}>Quests</a>
                            {/* <a className={tab == 'items' ? 'tab tab-active' : 'tab'} onClick={() => setTab('items')}>Items</a> */}
                            <a className={tab == 'bosses' ? 'tab tab-active' : 'tab'} onClick={() => setTab('bosses')}>Bosses</a>
                        </div>
                        {tab == 'quests' && allQuestInfo.map((npc, i) => {
                            return <li onClick={() => setActiveQuest(npc)} key={i}><a className={activeQuest.name === npc.name ? 'active' : ''}>{npc.name}</a></li>
                        })}
                        {tab == 'bosses' && allBossInfo.map((boss, i) => {
                            return <li onClick={() => setActiveBoss(boss)} key={i}><a className={activeBoss.name === boss.name ? 'active' : ''}>{boss.name}</a></li>
                        })}
                    </ul>
            </div>
        </div>
    )
}

export default DarkSoulsThree