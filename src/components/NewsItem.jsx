import React from 'react'

export default function NewsItem(props) {
  const imageStyle={height:"300px",width:"100%"}
 
  const getDateAndReturn=(cal)=>{ 

    let date=new Date(cal).toDateString();
    
    return date;
  }
  
  return (
    <>
    <div className={`card card1`}  style={{width: "350px", height:"28rem",marginBottom:"5px", overflow:"scroll ",border:"1px solid black"}}>
    
    
   <img src={props.url} className="card-img-top" alt="image not shown" />
    <div className="card-body">
    <h5 className="card-title">{props.title}  </h5>
    {/* <p className='card-text'> Source : <span className="badge badge-pill badge-danger bg-danger">{props.source}</span></p> */}
    <p className="card-text">{props.description}.</p>
    <p className="card-text"><small className="text-body-secondary">By {!props.author?"Unknown":props.author} on {getDateAndReturn(props.publish)}</small></p>
    <a href={props.newsUrl} target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div>
    </>
  )
}
