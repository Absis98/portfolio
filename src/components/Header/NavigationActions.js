import '../../App.css';

function NavigationActions() {
    const navigationItems = ['Home', 'About', 'Contact']

    const navigateToSection = (section) => {
        Window.document.getElementById(section).scrollIntoView();
    }
    return (
        <div className="d-flex me-4">
            { navigationItems.map((item) => {
                return (
                    <a className="mx-4 header_action d-flex align-self-center" href={`./#${item}`}> {item} </a>
                )
            })}
        </div>
    )
}

export default NavigationActions;