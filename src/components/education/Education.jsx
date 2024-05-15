
import PropTypes from "prop-types"
import "./Education.scss"



function Education ({data}) {
    return (
        
            <div className="education-card">
                {data.map((item, i) => <article key={i} className="article">
                    <p>{item.name}</p>
                    <p>{item.date}</p>
                    <p>{item.where}</p>

                </article> )}

            </div>
      
    )
}

    Education.propTypes = {
    data: PropTypes.array
    }

    export default Education;