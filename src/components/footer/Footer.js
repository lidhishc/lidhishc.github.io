import React from "react";
import './footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
//import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
function Footer() {

    function sendEmail() {
        var mail = "mailto:lidhishc@gmail.com";
        var a = document.createElement('a');
        a.href = mail;
        a.click();
    };

    function openLinks(name) {
        var link=''
        if(name==='linkedIn'){
            link='https://www.linkedin.com/in/lidhishc/'
        }if(name==='github'){
link='https://github.com/lidhishc'
        }
      
        var a = document.createElement('a');
        a.href = link;
        a.click();
    };
  return (
  
      <div className="footer" id='footer'>
          <div style={{color:'white',fontWeight:'bolder',marginLeft:'2rem'}}>
              Contact Me..
          </div >
        <div className="noGutter" style={{marginLeft:'0'}}>
          <div className="leftCol col-sm-3">
              <div className='element' style={{display:'inline'}}> 
               
                 <div>
                 <LocationOnIcon/> Palakkad,kerala</div>
                 </div>
                 <div className='element' style={{display:'inline'}}> 
                 
                 <div><PhoneIphoneIcon/> +91-9074390962
                 
                 </div>
                 </div>
              <div

              
              className='getintouch'
              onClick={()=> (sendEmail())}
              > Get in touch</div>
       
          
          </div>
          <div className="rightCol col-sm-3">
              <div className='element'
              onClick={()=>(openLinks('linkedIn'))}
              
              >
                  < LinkedInIcon />
               Linkedin</div>
              {/* <div className='element'> 
                  <TwitterIcon />
                    Twitter</div> */}
              <div className='element'
                onClick={()=>(openLinks('github'))}
              >
                  <GitHubIcon />
                     Github</div>
       
          
          </div>
        </div>
      
      </div>
   
  );
}

export default Footer;
