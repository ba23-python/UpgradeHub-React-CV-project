
import Hero from "./hero/Hero";
import { CV } from "../CV/cv";
import Education from "./education/Education"
import Experience from "./experience/Experience";
import { useState } from "react";
import Languages from "./languages/Languages";
import "./buttons/Button.scss";




 

function App() {
  const { hero, education, experience, languages } = CV;
  const [edu, setEdu] = useState(true) // por defecto  se vea el componente  Education

  const [showLanguage, setShowLanguage] = useState(false)

  const handleClick = () => {
    setEdu(true)
  }
  const handleCheckbox = (event) => {
    //setShowLanguage(showLanguage ? false : true)
    setShowLanguage(event.target.checked)
    console.log(event.target.checked) // el input tiene la propiedad checked  y es un valor true, o false
    //setShowLanguage(!showLanguage)
  }


  return (
  <div> 
    <Hero data = {hero} />
    <button className="custom-btn btn-4"onClick={handleClick}>Education</button>
    <button className="custom-btn btn-4" onClick={() => {setEdu(false) }}>Experience</button>
      {edu ? <Education data={education} /> : <Experience data={experience} />}

      <input type="checkbox" onChange={handleCheckbox} />
      <label>See my languages</label>

      {showLanguage ? <Languages info={languages} /> : null}
   
  </div>
  );
}

export default App;
