import React,{useState} from "react"

const Searchbar=({doSubmit})=>{
    var [term,setTerm]=useState('')

   const onSubmit=(e)=>{
        e.preventDefault()
        doSubmit(term)
    }

        return(<div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
            <div className="field">
            <label>VideoSearch</label>
            <input type='text' value={term} onChange={(e)=>{setTerm(e.target.value)}}/>
            </div>
            </form>
        </div>)
    }

export default Searchbar