import { useContext } from "react"
import AppContext from "../utils/AppContext"

const Search=()=>{
    const {searchText,setSearchText}=useContext(AppContext)
    const handleChange=(e)=>{
        setSearchText(e.target.value);
    }

    return (
        <>
            <input type="text" value={searchText} onChange={handleChange} placeholder="Enter Search text" />
        </>
    )
}

export default Search;