import '../../App.css';
import linkedinBlack from '../../media/images/linkedin-black.svg';

function ProfileIcons() {
    return (
        <div className='left-icons d-flex-column p-2'>
            <div className='my-2'><a href="https://www.linkedin.com/in/abhijitsinghsisodiya"><img className="icon-style" src={linkedinBlack} /></a></div>
        </div>
    )
}

export default ProfileIcons;