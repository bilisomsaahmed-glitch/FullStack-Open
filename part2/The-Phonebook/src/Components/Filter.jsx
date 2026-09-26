const Filter=({search,handlesearch})=>{
  return(
    <div>
      fileter shown with: <input type="text" value={search}  onChange={handlesearch} />
    </div>
  )

}

export default Filter;
