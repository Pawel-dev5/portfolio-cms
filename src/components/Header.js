import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Header = (props) => {
    const {
        data
    } = props;
    return (
        <section id="home">
            <Container className="header-container container-lg" >
                <Row >
                    <Col >
                        <div className="headet-txt-box">
                            <h1 className="responsive-headline">{data.name}</h1>
                            <h3>{data.shortBio}</h3>
                            <hr />
                            <Container>
                                <a href="tel:791-893-867">
                                    {/* <FontAwesomeIcon className="icon-footer" icon={faPhone} /> */}
                                    {data.phone}
                                </a>
                                <a href="mailto:p.nowecki@gmail.com">
                                    {/* <FontAwesomeIcon className="icon-footer" icon={faEnvelope} /> */}
                                    {data.email}
                                </a>
                                <a href={data.social[0].url}>
                                    {/* <FontAwesomeIcon className="icon-footer" icon={faGithub} /> */}
                                    {data.social[0].name}
                                </a>
                                <a href={data.social[1].url}>
                                    {/* <FontAwesomeIcon className="icon-footer" icon={faLinkedin} /> */}
                                    {data.social[1].name}
                                </a>
                                <a href={data.social[2].url}>
                                    {/* <FontAwesomeIcon className="icon-footer" icon={faFacebook} /> */}
                                    {data.social[2].name}
                                </a>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}