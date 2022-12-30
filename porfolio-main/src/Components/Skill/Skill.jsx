import React from "react";
// import skill from "./skill.module.css";
import "./skill.css"

export const Skill = () => {
  const click = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="skilldiv">
      <h1>Skills and Frameworks</h1>

      <div className="skouter">
        <div className="skf1">
          <div className="frontend">
            <div onClick={() => click("https://en.wikipedia.org/wiki/HTML")}>
              <img
                src="https://camo.githubusercontent.com/0821ae25cbd292f1c724d2fbf808a78136e61c72ec42a1a961d2be9288441930/68747470733a2f2f7777772e77332e6f72672f68746d6c2f6c6f676f2f646f776e6c6f6164732f48544d4c355f4c6f676f5f3531322e706e67"
                alt="html"
              />
            </div>
            <div onClick={() => click("https://www.w3schools.com/css/")}>
              <img
                src="https://camo.githubusercontent.com/9977319498c69f17a1034d75afcc29cceb175f4f98584c40d756478841ba62e0/68747470733a2f2f696d61676573372e77656279646f2e636f6d2f39302f393039383734362f333935382f34366432643030352d316230322d343936312d616131642d3061626137663732303962642e6a7067"
                alt="css"
              />
            </div>
            <div onClick={() => click("https://www.w3schools.com/js/")}>
              <img
                src="https://camo.githubusercontent.com/da839b79b282a7658a172f07e13496fb18bcf9fa624d061def0e80f47a68ff1d/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6a6176617363726970742e706e67"
                alt="javaScript"
              />
            </div>
            <div onClick={() => click("https://reactjs.org/")}>
              <img
                src="https://camo.githubusercontent.com/04ac2546b58f898879a6580277f10bfceece97d7fa3f20d69cdcee599324ee05/68747470733a2f2f6164646f6e732e6d6f7a696c6c612e6f72672f757365722d6d656469612f70726576696577732f66756c6c2f3233392f3233393934312e706e673f6d6f6469666965643d31363232313336313230"
                alt="reactjs"
              />
            </div>
            <div onClick={() => click("https://code.visualstudio.com/")}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKldv336KAtXazDI3Cy0KXghMeDKV-1sG2p-V_ur8Z8RTJaXuuwuKTgaY6RvDJ1Vkg5xg&usqp=CAU"
                alt="reactjs"
              />
            </div>
            <div onClick={() => click("https://nodejs.org/en/")}>
              <img
                src="https://camo.githubusercontent.com/8e67b9eb4900eec5d54fa3e6b79135140e2db16b960afe0f87ed2fb87d87be25/68747470733a2f2f736f667470726f646967792e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f30362f6e6f64656a732d6c6f676f2e706e67"
                alt="html"
              />
            </div>
            <div onClick={() => click("https://www.mongodb.com/")}>
              <img
                src="https://camo.githubusercontent.com/29a942d5b4d90d058090fa0bdb8722711d0905a11cd98e3a9e9b2a94031f31f4/68747470733a2f2f696e66696e617070732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31302f6d6f6e676f64622d6c6f676f2e706e67"
                alt="css"
              />
            </div>
            <div onClick={() => click("https://www.npmjs.com/")}>
              <img
                src="https://camo.githubusercontent.com/6c10a8bff81bb32c29f35514bf2a2bcb434398b49a8a2a4b18343ae710ccd2f8/68747470733a2f2f6272616e646570732e636f6d2f6c6f676f2d646f776e6c6f61642f4e2f4e706d2d6c6f676f2d766563746f722d30312e737667"
                alt="javaScript"
              />
            </div>
            <div onClick={() => click("https://www.postman.com/")}>
              <img
                src="https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667"
                alt="reactjs"
              />
            </div>
            <div onClick={() => click("https://git-scm.com/")}>
              <img
                src="https://camo.githubusercontent.com/bc60041f5ea7b022c6419b73a15aaac12a2ede682867ec0d3e3c9ec374dce54b/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f34382f3030303030302f6769742e706e67"
                alt=""
              />
            </div>
            <div onClick={() => click("https://expressjs.com/")}>
              <img
                src="https://miro.medium.com/max/800/1*Ahl24GrglQHwFcp5-_B36Q.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
