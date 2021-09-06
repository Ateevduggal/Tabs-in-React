import React,{useState} from 'react'
import Data from "./Data"

const App = () => {
  const [state, setstate] = useState(0);
  const {title, dates, duties, company} = Data[state];
  return (
    <>
     <section className="section">
       <div className="title">
         <h2>experience</h2>
          <div className="underline"></div>
       </div>
       <div className="job-center">
       <div className="btn-container">
         {
           Data.map((Val, index) => {
             return(
               <button 
               key={Val.id} 
               onClick={() => setstate(index)}
               className={`btn-job ${index === state && 'active'}`}
               >{Val.company}</button>
             )
           })
         }
       </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-dates">{dates}</p>
          {
            duties.map((duty, index) => {
              return <div className="job-desc" key={index}>
              <i class="fas fa-dot-circle"></i>
              <p>{duty}</p>
            </div>
            })
          }
        </article>
       </div>
     </section>
    </>
  )
}

export default App
