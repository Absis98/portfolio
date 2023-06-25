import '../../App.css';
import linkedin from '../../media/images/linkedin.svg';

function FooterInfo() {
    return(
        <div className="footer-container">
            <div className="d-flex justify-content-around">
                <div className="d-flex-column">
                    <div className="h3 title mb-3">Abhijitsingh Sisodiya</div>
                    <div>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</div>
                </div>
                <div className='d-flex-column'>
                    <div className="h3 title mb-1">Social</div>
                    <div><a href="https://www.linkedin.com/in/abhijitsinghsisodiya"><img className="icon-style" src={linkedin} /></a></div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-around">© Copyright 2023. Made by Abhijitsingh Sisodiya</div>
        </div>
    )
}

export default FooterInfo;