export default function Tabs({children, buttons, ButtonsContainer = "menu", ...props}) {
    // const ButtonContainer = buttonsContainer;

    return <><ButtonsContainer>{buttons}</ButtonsContainer>{children}</>
}