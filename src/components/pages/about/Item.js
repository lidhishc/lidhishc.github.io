import React,{useState,useEffect} from 'react'

function Item({title,count}) {
const [level1,setLevel1]=useState(null)
    useEffect(()=>{
     
        let arr1=[]
        for(let i=0;i<count;i++){
            arr1.push(<span style={{color:'orenge',fontWeight:'bolder'}}>* </span>)
        }
        for(let i=0;i<5-count;i++){
            arr1.push(<span style={{color:'grey'}}>* </span>)
        }
   setLevel1(arr1)
    },[])
    return (
        <div className='card'>
            {title}
            <div className='level'>
                {level1}
            </div>
        </div>
    )
}

export default Item
