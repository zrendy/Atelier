import {useState} from 'react';

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
      <span className="logo">LOGO</span>
      <span className="search-bar">
        <input placeholder="search product id" type="text" value={term} onChange={searchBarOnChange}></input>
        <button onClick={searchButtonOnClick}>search</button>
        </span>
    </nav>
  </header>
  <h4 className="banner">BANNER!! <a href="/">SALE SALE SALE!</a></h4>
  </div>
  )
}