

function Languages({ info }) {
    return (
        <div className="lang">
            <h2>{info.language}</h2>
            <p>{info.wrlevel}</p>
            <p>{info.splevel}</p>
        </div>
    )
};

export default Languages;