import  "./NavBar.css";
export default function NavBar({names}) {
  return (
    <>
     <header className="header" >

     <nav className="navbar bg-body-tertiary bg-success fixed-top" >
        <div className="container-fluid">
          <a className="navbar-brand">{names}</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit" >
              Search
            </button>
          </form>
        </div>
      </nav>

     </header>
    </>
  );
}
