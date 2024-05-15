
import "./experience.scss"
import PropTypes from "prop-types"

function Experience ({data}) {
    return (
        
            <div className="experience-card">
                {data.map((item, i) => <article 
                key= {i} className="article">
                    <p>{item.name}</p>
                    <p>{item.date}</p>
                    <p>{item.where}</p>
                    <p>{item.description}</p>

                </article>)}

            </div>
        
    )
}

Experience.propTypes = {
    data: PropTypes.array


};

export default Experience

