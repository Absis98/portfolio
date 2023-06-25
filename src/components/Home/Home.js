import '../../App.css'
import ProfileIcons from './ProfileIcons';

function Home() {
  return (
    <div id="Home" className="home">
      <ProfileIcons />
      <div className='d-flex-column w-75 home_content position-relative'>
        <div className='d-flex display-1 font-weight-bold justify-content-center name-intro'>
          Hey I'm Abhijitsingh Sisodiya
        </div>
        <div className='d-flex mt-5 text-center intro-details'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</div>
      </div>
    </div>
  );
}

export default Home;
