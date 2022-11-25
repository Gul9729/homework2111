import logo1 from '../images/Logo.png';
import logo2 from '../images/Logo (1).png';
import News from '../images/News.png';
import News1 from '../images/News (1).png';
import News2 from '../images/News (2).png';
import Footer from '../images/Footer.png';

export default function Media () {

  return (
      <><div className='Header' 
     style={{
      flexDirection: "row",
      alignItems: "center",
      padding: "24px 160px",
      gap: "752px",
      width: "1440px",
      height: "70px",
     }}>
      <img src={logo1} alt="logo"/>
    </div> 

    <div className='Header1'
    style={{
      //display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "64px 160px",
      gap: "752px",
      width: "1440px",
      height: "248px",
    }}>
      <img src={logo2} alt="logo (1)"/>
    </div>

    <div className='New List'
    style={{
      //display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "0px 160px",
      gap: "45px",
      width: "1440px",
      height: "1152px"
    }}>
      <img src={News} alt="News"/>
      <img src={News1} alt="News (1)"/>
      <img src={News2} alt="News (2)"/>
    </div>

    <div className='Footer'
    style={{
      //display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "778px, 160px, 32px",
      gap: "32px",
      width: "1440px",
      height: "918px"
    }}>
      <img src={Footer} alt="Footer"/>
    </div>
    </>
  );
}




