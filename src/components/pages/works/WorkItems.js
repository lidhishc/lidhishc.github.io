import React from 'react'

function WorkItems({image,title,url}) {
function gotoUrl() {
    var a= document.createElement('a');
    a.href=url;
    a.click();
}

    return (
        <div className='col-sm-3 workItem' onClick={gotoUrl}>
            <img 
             src={image}
            alt="Avatar" style={{width:'100%',height:'80%',paddingTop:'1rem'}}></img>
            <div className='workheading mt-2'>
            {title}
            </div>
        </div>
    )
}

export default WorkItems
