import React from "react";
import Item from "./Item";
import Description1 from "./Description1";
import Image from './Image'
function Description() {
  return (
    <div className="desc">
      <div className="others">
        <strong className="whoami">Who Am I</strong>
        <div className="components__">
         <div className="desciption_image">
         <Image />
         <Description1 />
         </div>
          <div>
            <span style={{ fontWeight: "bolder" ,marginLeft:'1rem',fontSize:'2rem',
            fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'}}> Skills</span>
            <hr className="separtor" />
          </div>
          <div className="description_items">
            <div className="row noGutter">
              <Item className="col-sm-3" title="React.js" count={4} />
              <Item className="col-sm-3" title="Angular 2+" count={3} />
              <Item className="col-sm-3" title="Node.js" count={4} />
              <Item className="col-sm-3" title="Express.js" count={3} />
              <Item className="col-sm-3" title="HTML" count={4} />
              <Item className="col-sm-3" title="CSS" count={4} />
              <Item className="col-sm-3" title="JavaScipt" count={4} />
              <Item className="col-sm-3" title="Python" count={4} />
              <Item className="col-sm-3" title="Java" count={3} />
              <Item className="col-sm-3" title="C" count={3} />
              <Item className="col-sm-3" title="PosgreSQL" count={3} />
              <Item className="col-sm-3" title="MySQL" count={3} />
            </div>
          </div>
        </div>
        <div>
        <a className="cv_down" href="https://drive.google.com/file/d/149xUlgcIWIMzk1r2sM6feC6HlKkyMZTe/view?usp=sharing">
          Download CV</a>
      </div>
      </div>

      
    </div>
  );
}

export default Description;
