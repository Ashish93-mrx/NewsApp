
const Navbar = ({setCategory,setCountry}) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">
        NewsMag
    </span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")} style={{cursor:"pointer"}}>Tech</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("Business")} style={{cursor:"pointer"}}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("Health")} style={{cursor:"pointer"}}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("Sports")} style={{cursor:"pointer"}}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")} style={{cursor:"pointer"}}>Entertainment</div>
        </li>
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Country
          </div>
          <ul className="dropdown-menu">
            <li><div className="dropdown-item" onClick={()=>setCountry("in")} style={{cursor:"pointer"}}>india</div></li>
            <li><div className="dropdown-item" onClick={()=>setCountry("au")} style={{cursor:"pointer"}}>australia</div></li>
            <li><div className="dropdown-item" onClick={()=>setCountry("jp")} style={{cursor:"pointer"}}>japan</div></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar