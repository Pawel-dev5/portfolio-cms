export const AboutMe = ({ data }) => {
    return (
        <>
            <h3>Title:</h3>
            <p>{data.title}</p>
            <h3>Bio:</h3>
            <p>{data.bioWork}</p>
            <p>{data.biopriv}</p>
        </>
    )
}