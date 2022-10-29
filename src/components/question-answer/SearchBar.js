
export default function SearchBar({questionsData, setSearchQuery, setFilteredList , handleFilter}){


  // function to filter based on search
  const handleSearchQuery = (event) => {
    event.preventDefault();
    setFilteredList(handleFilter(event.target.value))
  }



  return (
    <>
    <h3 className="q-a-title"><b> Questions And Answer</b></h3>
    <form className="searchForm">
    <input type='text'placeholder ="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={handleSearchQuery}></input>
    <button><i class='fas fa-magnifying-glass'></i></button>
  </form>

    </>
  )
}