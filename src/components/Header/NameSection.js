import '../../App.css';

function NameSection() {
    return (
        <div className="d-flex">
            <div><img className="header_image" src={require('../../media/images/profileImage.jpeg')}/> </div>
            <div className="mx-3 header_name d-flex"> <span className="align-self-center">Abhijitsingh Sisodiya</span> </div>
        </div>
    )
}

export default NameSection;