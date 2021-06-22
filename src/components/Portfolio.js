export const Portfolio = ({ data }) => {
    return (
        <>
            <h1>Portfolio</h1>
            <h3>Tytuł:</h3>
            <p>{data.title}</p>
            <ul>
                {data.projects.map((item, id) => {
                    return (
                        <li key={id}>
                            <p>Item ID: {item.id}</p>
                            <p>Item title: {item.title}</p>
                            <p>Item description:<br /> {item.description}</p>
                            <p>Item URL: {item.git}</p>
                            <p>Kategorie:</p>
                            <ul>
                                {item.category.map((i, index) => {
                                    return (
                                        <li key={index}>{i}</li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}