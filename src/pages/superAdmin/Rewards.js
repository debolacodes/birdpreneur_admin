import React, {useContext, useState, useEffect} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import SummaryBox from '../../components/SummaryBox';
import Title from '../../components/Title';
import AllStoresTable from './tables/AllStoresTable';
import ProductDeals from './tables/ProductDeals';
import Challenges from './components/Challenges';
import AddDeal from '../../modals/AddDeal';

export default function Rewards() {
  const {
    setModalPage,
    setModalData,
    setShowModal,
    ADD_DEAL_MODAL,
  } = useContext(mainFunctions)
  const [dealModal, setDealModal] = useState("")

  const CHALLENGE_PAGE = "challenges";
  const DEALS_PAGE = "deals";
  const [rewardPage, setRewardPage] = useState(CHALLENGE_PAGE)

  useEffect(() => {
    setModalPage(ADD_DEAL_MODAL);
    if(dealModal){
      if(dealModal === "add"){
        setModalData(
          <AddDeal />
        );
      }
      setShowModal(true);
    }
		//eslint-disable-next-line
  }, [dealModal]);
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Rewards"
            button={{
              title: "DOWNLOAD REPORT",
              action: () => {}
            }}
            />
            <div className="mainbar-container">
            <div style={{minHeight:"80px"}}>
              <div className="page-filter">
                {rewardPage === DEALS_PAGE
                  ? <div className='btn_ btn_green mb-3' 
                    onClick={()=>setDealModal("add")}
                    >NEW DEAL</div>
                  : <div className='btn_ btn_green mb-3'>ADD CHALLENGE</div>
                }
              </div>
              <div>
                <select className='select_' style={{marginTop:"13px"}}
                onChange={(e)=>setRewardPage(e.target.value)}
                value={rewardPage}
                >
                  <option value={DEALS_PAGE} >Product Deals</option>
                  <option value={CHALLENGE_PAGE}>Challenges</option>
                </select>
              </div>
            </div>
              {rewardPage === DEALS_PAGE 
                ? <ProductDeals/>
                : <Challenges />
              }
            </div>
        </div>
    </div>
  )
}
