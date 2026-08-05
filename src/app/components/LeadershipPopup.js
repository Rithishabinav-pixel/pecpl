import React from 'react'
import style  from "@/app/about-us/about.module.css"
import Image from 'next/image'

export default function LeadershipPopup({data,setLeaderPopup}) {
  return (
    <div className="popup">
        <div className="overlay" onClick={()=>setLeaderPopup(false)} ></div>
            <div className={`popupContainer ${style.leaderPopupContainer}`}>
                <button className='popupClosebtn' onClick={()=>setLeaderPopup(false)}>
                    <Image src="/assets/images/close.svg" width={24} height={24} alt=''/>
                </button>
                <div className={style.image}>
<Image src={data.image} height={330} width={322} alt={data.name}/>
                </div>
                <div className={style.content}>
                    <h3>{data.name}</h3>
                    <div>
                        <p>{data.position}</p>
                        <span>{data.tag}</span>
                    </div>
                    <p>{data.content}</p>
                </div>
            </div>
        
    </div>
  )
}
