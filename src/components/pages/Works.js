import React from "react";
import Item from "./works/WorkItems";
import NetfilxPNG from './works/netflix.png';
import Uniqin from './works/uniqin.png'
function Works() {
  return (
    <div className="works" id='works'>
        <div className="workHeading">
            Works
        </div>
      <div className="worksItems row noGutter">
        <Item  image={NetfilxPNG} title='Netflix Clone' url={'https://netflix-clone-lidhish.web.app/'}/>
        <Item  image={Uniqin} title='Uniqin.ai' url={'https://uniqin.ai/'}/>
      {/* <Item  /> */}
     
      </div>
    </div>
  );
}

export default Works;
