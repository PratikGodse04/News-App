import React, { useState ,useEffect} from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';
import "../../public/images/csss/media.css"

export default function News(props) {
  const [page,setPage]=useState(1);
  const [loader,setLoader]=useState(false);
  const [result,setResult]=useState(0);



  const pageChnage=()=>{  
    
    
    if(page<=(Math.floor(result/40))){
      let pageCount=page+1;
      document.querySelector("#next").disabled="true"
    setPage(pageCount)

    // checkTheme();
    }
    else{
      // document.querySelector("#next").disabled="true"
      // alert("There is No Next pages");
    }
   
    
  }
  const previousPage=()=>{
  
    if(page>1){
   let pageCount=page-1;
   setPage(pageCount);
  //  checkTheme();
  document.querySelector("#next").disabled="false";
    }
    else{
      alert("There is No previous pages")
    }
    
  }

  const firstLetterCaptial=(str)=>{

    let first=str.charAt(0).toUpperCase();
    let remain=str.slice(1);
    return first+remain;
  }


  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      props.setProgress(20);
      const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${import.meta.env.VITE_API_KEY}&page=${page}&pageSize=20`;
     
      try {
        const response = await fetch(url);
        const parsedData = await response.json();
        setResult(parsedData.totalResults)
        setArticles(parsedData.articles)
        setLoader(false)
        props.setProgress(100);
        document.title=`NewsMonkey-${props.category=="general" ? "Top Headlines":firstLetterCaptial(props.category)}`;
       
      } catch (error) {
        console.error("Error fetching news data:", error);
      }

      
    };

    fetchData();
    
  }, [page]); 

  const [articles, setArticles] = useState([]);
 


 

  return (
    <div className={`container my-3 mb-4`}>
      <h2 className='text-center' style={{marginTop:"80px",marginBottom:"40px" }}>NewsMonkey - Top {firstLetterCaptial(props.category)} Headlines</h2>
     {loader && <Loader/>}
      <div className='row d-flex flex-wrap' >
      { !loader && articles.map((element, index) => (
       
          <div className='col-4' key={index}>
            
            <NewsItem
              title={element.title}
              description={element.description || 'No description available'}
              url={element.urlToImage || "../../public/images/5203299.jpg" }
              newsUrl={element.url}
              author={element.author}
              publish={element.publishedAt}
              source={element.source.name}
            />
          </div>
        
      ))}
      </div>
      <div className="container d-flex justify-content-evenly my-3 ">
        <button className='btn btn-dark' id='previous' onClick={previousPage} ><i className="bi bi-arrow-left mr-4"></i> Previous </button>
        <button className='btn btn-dark 'style={{cursor:"none"}}>PageNO {page}</button>
        <button className='btn btn-dark me-3' id='next' onClick={pageChnage}>Next<i className="bi bi-arrow-right ps-1"></i> </button>
      </div>
    </div>
  );
}
