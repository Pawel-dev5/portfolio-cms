export const Tech = ({ data }) => {
    return (
        <>
            <h1>Tytul: {data.title}</h1>
            <h3>Tytuł: {data.certtitle}</h3>
            <div>
                {data.certificates.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>Company: {item.company}</p>
                            <p>Tytuł: {item.title}</p>
                            <p>Lata: {item.years}</p>
                            <div className="tech-desc-container">
                                {item.description.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <p>{' '}{item.title}, {''}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}