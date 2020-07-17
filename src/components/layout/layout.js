import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import HeaderComponent from "../header/header"
import FooterComponent from "../footer/footer"
import { Helmet } from "react-helmet"
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap'
// import "../../static_files/css/theme.css"


export default function Layout(props) {
  return (
    <Container fluid>
      <Helmet bodyAttributes={{
        "data-spy": 'scroll',
        "data-target": '#toc',
      }}>
        <script type="text/javascript" src="/js/jquery-3.5.1.min.js"></script>
        <link rel="stylesheet" type="text/css" media="all" href="/css/bootstrap.min.css" />
        <script type="text/javascript" src="/js/bootstrap.min.js"></script>
        {props.showTOC &&
          <link rel="stylesheet" href="https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.css" />
        }
        {props.showTOC &&
          <script type="text/javascript" src="https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.js"></script>
        }
        <link rel="stylesheet" type="text/css" media="all" href="/css/theme.css" />
        <link rel="stylesheet" type="text/css" media="all" href="/css/style.css" />
        <link rel="stylesheet" type="text/css" media="all" href="/css/menu.css" />
        <script type="text/javascript" src="/js/base.js"></script>
      </Helmet>
      <Row>
        <HeaderComponent></HeaderComponent>
      </Row>
      <Row>
        <Container>
          <Row style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Col>
              {props.children}
            </Col>
            {props.showTOC &&
              <Col lg={2}>
                {props.headerText}
                <nav id="toc" data-toggle="toc" class="sticky-top"></nav>
              </Col>
            }
          </Row>
        </Container>
      </Row>
      <Row>
        <FooterComponent></FooterComponent>
      </Row>
    </Container>
  )
}