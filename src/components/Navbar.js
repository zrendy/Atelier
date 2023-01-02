import {useState} from 'react';
import logo from '../images/logo.png';

export default function Navbar ({setCurrentProduct}) {
  const [term, setTerm] = useState('');
  // event helper function
  const searchBarOnChange = (e)=>{
    setTerm(e.target.value);
  };
  const searchButtonOnClick = (e)=>{
    setCurrentProduct(parseInt(term))
    setTerm('');
  }
  return (
  <div >
  <header className="header">
    <nav className='navbar' data-testid="navbar">
      <img className="logo" src={logo}/>
      <form class="form-wrapper">
        <input type="text" id="search" placeholder="Search by ID..." value={term} onChange={searchBarOnChange} required/>
        <input onClick={searchButtonOnClick} type="submit" value="go" id="submit"/>
      </form>
      {/* <span className="search-bar">
        <input placeholder="Search ID" type="text" value={term} onChange={searchBarOnChange}></input>
        <button onClick={searchButtonOnClick}>search</button>
      </span> */}
    </nav>
  </header>
  <h4 className="banner"><a href="/">FLASH SALE!</a></h4>
  </div>
  )
}