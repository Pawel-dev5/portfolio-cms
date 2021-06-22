export const Footer = ({data}) => {
    return (
        <>
        <h1>Footer</h1>
        <p>{data.email}</p>
        <p>{data.formessage}</p>
        <p>{data.name}</p>
        <p>{data.sectiontitle}</p>
        <p>{data.send}</p>
        <p>{data.title}</p>
    </>
    )
}