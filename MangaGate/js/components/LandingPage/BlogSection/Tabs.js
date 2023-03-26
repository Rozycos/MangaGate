import React, { useState } from "react";
import NewSection from "../NewSection/NewSection";
import FirstTab from "./AllTabs/FirstTab";
import SecondTab from "./AllTabs/SecondTab";
import TabContent from "./V2/TabContent";
import TabNavItem from "./V2/TabNavItem";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("comedy");
   
    return (
      <div className="tabs">
        <ul className="tabs__nav">
          <TabNavItem title="comedy" id="comedy" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="fantasy" id="fantasy" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="drama" id="drama" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="action" id="action" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="history" id="history" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabNavItem title="military" id="military" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </ul>
   
        <div className="outlet">
            <TabContent id="comedy" activeTab={activeTab}>
                <NewSection/>
            </TabContent>
            <TabContent id="fantasy" activeTab={activeTab}>
                <SecondTab/>
            </TabContent>
            <TabContent id="drama" activeTab={activeTab}>
                <p>Tab 3 works!</p>
            </TabContent>
            <TabContent id="action" activeTab={activeTab}>
                <p>tab 4 works!</p>
            </TabContent>
            <TabContent id="history" activeTab={activeTab}>
                <p>tab 5 works!</p>
            </TabContent>
            <TabContent id="military" activeTab={activeTab}>
                <p>tab 6 works! Będzie Military</p>
            </TabContent>
        </div>
      </div>
    );
  };
   
  export default Tabs;