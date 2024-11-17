import logo from "../assets/investment-calculator-logo.png";


export default function Header() {
    return(<header id="header">
        <img src={logo} alt="Logo showing moneybag" />
        <h1>Invcstment Calculator</h1>
    </header>);
}