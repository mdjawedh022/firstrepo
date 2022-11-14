import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Center,
} from "@chakra-ui/react";

import React from "react";

function Table1() {
  return (
    <div className="tab_dasboard">
      {/* <div style={{ width: "80%", height: "150px" }}> */}
      <Tabs isLazy size="md">
        <TabList>
          <Tab>MY APPLICATION</Tab>
          <Tab>MYCOURSE</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <div style={{margin:"auto"}}>
              <i className="fa-regular fa-face-smile"></i>
              <p>You dont have any all applications</p>
              <Button colorScheme="blue" variant="outline">
               KICKSTART YOUR CAREER NOW
              </Button>
            </div>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel marginLeft={40} >
            <div >
              <i className="fa-regular fa-face-smile"></i>
              <p>Not picked course yet?</p>
              <Button colorScheme="blue" variant="outline">
                UPGRADE YOUR SELF
              </Button>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
    // </div>
  );
}

export default Table1;
