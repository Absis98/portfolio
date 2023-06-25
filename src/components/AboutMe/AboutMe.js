import '../../App.css'
import GetToKnowMe from './GetToKnowMe.js';
import MySkills from './MySkills.js';

function AboutMe() {
  return (
    <div id="About" className="about-me py-5">
      <div className='w-75  mx-auto'>
        <div className='d-flex justify-content-center pt-5 section-heading'>About Me</div>
        <div className='section-info d-flex text-center mx-auto w-75'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</div>

        <div className="about-me-responsive justify-content-center align-center mx-auto">
          <div className='responsive-element me-3 mt-5'>
            <GetToKnowMe />
          </div>

          <div className='responsive-element ms-3 mt-5'>
            <MySkills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
