import { Navbar } from "reactstrap";
import CartWidget from "./CartWidget/CartWidget"
import NavLinks from "./NavLinks/NavLinks"
import LogoVans from "./LogoVans/LogoVans"
import FavWidget from "./FavWidget/FavWidget"
import Login from "./Login/Login"


const NavBar = () => {
    const style = {
      color: "#fff"
    }

    return (
       <Navbar
        style={style}
        light
        container="fluid">
          <LogoVans />
          <NavLinks link="https://github.com/joseottonello" title="Home"/>
          <NavLinks link="https://github.com/joseottonello" title="Contacts"/>
          <NavLinks link="https://github.com/joseottonello" title="Products"/>
          <FavWidget />
          <CartWidget/>
          <Login />
        </Navbar>
    )
}

export default NavBar