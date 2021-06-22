export const Work = ({ data }) => {
    return (
        <>
            <h1>Tytuł: {data.worktitle}</h1>
            <div>
                {data.work.map((item, index) => {
                    return (
                        <div hey={index}>
                            <div>
                                <h3>Tytuł: {item.title}</h3>
                                <p>Lata: {item.years}</p>
                                <p>Firma: {item.company}</p>
                                <div>
                                    <div>
                                        {item.description.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                <p>{item.title}</p>
                                                <input value={item.title}></input>
                                                <p>{item.subtitle}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}