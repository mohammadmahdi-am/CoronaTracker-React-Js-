import React,{useState} from "react";

export default function CountryPicker(props) {

    async function handle_select_option(e){
        props.setCountry(e.target.value)
        let res = props.countriesObj.filter(ele=>ele.Country === e.target.value)
        props.setDeaths(res[0].TotalDeaths)
        props.setConfirmed(res[0].TotalConfirmed)
        props.setRecovered(res[0].TotalRecovered)

        

    }

 
    


    
    var options = [];
    for (var i = 0; i < props.countriesObj.length; i++) {
        options.push(
            <option key={props.countriesObj[i].Country}   className="station" value={props.countriesObj[i].Country}>
                
                {props.countriesObj[i].Country}
            </option>
        )
    }
   
       
       


  
    return (
           
                <select className="w-50 d-block m-auto"  onChange={handle_select_option}>
                    
                    {options}
            
                </select>
                
               
           

        
    )
}
