import "./home.css"
import Inqueryform from "./form";

const home = () => {
    return (<>
    <div className="hero-sec">
      <img className="hero-sec" src="HERO-IMG.jpg" alt="hero-section" />
    </div>
    <div className="welcome-sec">
      <div className="part-1 p-4">
      <h2>Welcome To React Js Project</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, laborum est velit sunt eveniet blanditiis reiciendis nulla, tempore repellendus, laudantium vel rerum sint iste numquam accusantium error possimus quam voluptates.
      Magni iure odit inventore nam provident error, tempore delectus nesciunt repudiandae doloribus illo. Architecto nostrum nam quibusdam, illo, molestias aliquam totam quae enim exercitationem nihil distinctio modi voluptatem quis dolorem!
      
      
      </p>
      <img className = 'welcome-img' src="welcome-img.webp" alt="" />
      </div>
      <div className="part-2 pt-4 d-flex align-items-centre" >  <Inqueryform /> </div> 
      
    </div>
<br />

    
    
    </>);
  };
  
  export default home;