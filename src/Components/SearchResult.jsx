import { useContext, useEffect, useState } from "react";
import { data } from "../utils/constants";
import '../assets/Styles/SearchResult.css'
import AppContext from "../utils/AppContext";
const SearchResult=()=>{

    const [allData,setAllData]=useState(data);
    const [filteredData,setFilteredData]=useState(data);
    const {searchText}=useContext(AppContext);
    const [facets,setFacets]=useState([]);
    console.log(searchText)
    console.log("All Data",allData)

    const filterOnCategory=()=>{
        const result=allData.filter((data)=>data?.category.toLowerCase().includes(searchText.toLowerCase()));
        console.log(result)
        setFilteredData(result);
    }

    const getFacets=()=>{
        const result=[]
        filteredData.map((data)=>{
            if(!result.includes(data.category)){
                result.push(data?.category)
            }
        })
        setFacets(result)
    }

    useEffect(()=>{
        filterOnCategory();

    },[searchText])

    useEffect(()=>{
        getFacets()
    },[filteredData])

    const handleFacetClick=(facet)=>{
        setFilteredData((prev)=>prev.filter((item)=>item.category==facet))
    }

    return (
        <ul className="search-wrapper"> 
        {facets.map((facet,index)=><button key={index} onClick={()=>handleFacetClick(facet)} value={facet}>{facet}</button>)}
        {filteredData.map((data)=>{
            return <li className="search-element" key={data?.id}>
                <div className="id">{data?.id}</div>
                <div className="category">{data?.category}</div>
                <div className="name">{data?.name}</div>
               
            </li>
        })}
        </ul>
       
    )

}
export default SearchResult;