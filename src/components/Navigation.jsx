import "./Navigation.css"
const Navigation = () => {
  return (
   <nav>
    <div className="logo">
        <img src="./logo.png" alt="" />
    </div>
    <ul>
        <li>Home</li>   
        <li>About</li>
        <li>Contact</li>
    </ul>
   </nav>
  )
}

export default Navigation