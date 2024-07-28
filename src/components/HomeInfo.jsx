import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hello, I'm
        <span className='font-semibold mx-2 text-white'>Ragil Lingga Aditya</span>
        👋
        <br />
        A Software Quality Assurance From Indonesia 
      </h1>
    );

    if (currentStage === 2) {
      return (
        <div className='info-box'>
          <p className='font-medium sm:text-xl text-center'>
            Expertise in delivering high-quality software solutions. <br /> 
            Discover the skills and methodologies I use for successful QA.
          </p>
    
          <Link to='/about' className='neo-brutalism-white neo-btn'>
            Explore My QA Expertise
            <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
          </Link>
        </div>
      );
    }
    

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Extensive experience in Software Quality Assurance. <br /> Want to see how I ensure top-notch quality?
        </p>
  
        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Explore My SQA Services
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }
  

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Looking to improve your software quality or need expert testing? <br /> 
          I’m here to help with SQA solutions!
        </p>
  
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Lets Talk
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }
  
  return null;
};

export default HomeInfo;