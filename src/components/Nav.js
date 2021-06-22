export const Nav = ({ data }) => {
    return (
        <>
            <h3>Title:</h3>
            <p>{data.name}</p>
            <h3>Bio:</h3>
            <p>{data.shortBio}</p>
            <ul>
                {data.menu.map((item, id) => {
                    return (
                        <li key={id}>{item.name}</li>
                    )
                })}
            </ul>
        </>
    )
}