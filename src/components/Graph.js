import React, { useEffect, useState } from 'react'

export default function Graph(props) {
    const [sortedCountry,setSortedCountry] = useState({})
    const countries = props.countries
    
 

    function compare( a, b ) {
        if ( a.TotalConfirmed < b.TotalConfirmed ){
          return -1;
        }
        if ( a.TotalConfirmed > b.TotalConfirmed ){
          return 1;
        }
        return 0;
      }


    useEffect(()=>{
        if(props.countries.length>10){
            
            countries.sort( compare ).reverse();
            setSortedCountry(countries.slice(0,5))
           
        }  



    })

    
    
    
    return (
        <div className="w-100">
            {sortedCountry.length>2?sortedCountry.map((ele)=>(<h3 className="text-center d-block">{ele.Country}:{ele.TotalConfirmed}</h3>)):"empty"}
            
        </div>
    )
}
