import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
    <nav>
         <h3> Soselani </h3>
         <div>
         <button> Pizza </button>
         <button> Calzones </button>
         <button> Sorrentinos </button>
 </div>
 <CartWidget />
</nav>
)
}
export default NavBar
       