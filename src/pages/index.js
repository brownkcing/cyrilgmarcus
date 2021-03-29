import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import Janice from '../images/janiceport.png';
import Placeholder from '../images/placeholder.png';
import Startyfy from '../images/startyfy.png';
import Shopvery from '../images/shopvery.jpg';
import { HireMe, LinkButton, HiremePage } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import { darken } from 'polished';
import { TechStacks } from '../components/TechStacks';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 100px 0;

  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  &:hover .ItemImage {
    opacity: 0.3;
  }
  &:hover .TextMiddle {
    opacity: 1;
  }
`;

const ItemImage = styled.img`
  opacity: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 85%;
  position: relative;
  transition: 0.5s ease;
  ${media.tablet`max-width: none;`}
`;

const TextMiddle = styled.a`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
  .link2 {
    padding: 0;
    font-size: 30px;
    color: ${Colors.darkest};
    text-decoration-style: dotted;
  }
  @media only screen and (max-width: 600px) {
    max-width: none;
    left: 50% !important;
  }
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 200px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 50%; margin: 0 auto 20px auto;`}
  }
  .link {
    padding: 1em;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img
              critical={true}
              fluid={data.avatarHomepage.childImageSharp.fluid}
              alt="Cyril Marcus"
              className="avatar"
            />
            <t.H1 style={{ color: 'white' }} align="center">
              Hi, I'm Cyril
            </t.H1>
            <t.LargeP white align="center" max45>
              I'm a Front-End Developer. A curious one with a knack of solving puzzles and design enthusiast.
            </t.LargeP>
            <HireMe style={{ border: '1px solid #fcfcfc' }} large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Tech Stacks
            </t.H2>
            <t.P align="center" max70 className="who-desc">
              Building web-based application requires some of my favourite tech stacks. I've used these more or less to
              get the job done.
            </t.P>
            <TechStacks>something </TechStacks>

            <t.H2 primary align="center" bold className="portfolio">
              Project
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ImageContainer>
                  <ItemImage className="ItemImage" src={Janice} alt="JaniceArtwork" />
                  <TextMiddle className="TextMiddle">
                    <LinkButton primary bold className="link2" as="a" target="_blank" href="https://janicezilin.art">
                      View Live
                    </LinkButton>
                  </TextMiddle>
                </ImageContainer>
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Janice's Artwork</t.H2>
                <t.P>Client's art portfolio.</t.P>
                <t.P>
                  Minimalistic in design, the portfolio is perfect for showcasing their talent. The site is a headless
                  CMS from DatoCMS with GatsbyJS built on top and deployed on Netlify. Utilizing static-generated page,
                  it loads not only fast but responsive as well.
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://janicezilin.art">
                  View Live
                </LinkButton>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://github.com/brownkcing/janiceart"
                >
                  Repo
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Startyfy </t.H2>
                <t.P>Start-up for startups </t.P>
                <t.P>
                  A simple landing page with simple authentication system. Created with Laravel on one version and React
                  + NodeJS on the other. Mobile based app are currently being developed.
                </t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://startyfy-laravel.herokuapp.com/"
                >
                  Laravel v1
                </LinkButton>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://startyfy-laravel.herokuapp.com/"
                >
                  React + NodeJS v2
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ImageContainer>
                  <ItemImage className="ItemImage" src={Startyfy} alt="Startyfy" />
                  <TextMiddle className="TextMiddle">
                    <LinkButton
                      primary
                      bold
                      className="link2"
                      as="a"
                      target="_blank"
                      href="https://startyfy-react.netlify.app/"
                    >
                      ReactJS + NodeJS
                    </LinkButton>
                    <LinkButton
                      primary
                      bold
                      className="link2"
                      as="a"
                      target="_blank"
                      href="https://startyfy-laravel.herokuapp.com/"
                    >
                      PHP + Laravel
                    </LinkButton>
                  </TextMiddle>
                </ImageContainer>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={Shopvery} alt="Shopvery" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Shopvery</t.H2>
                <t.P>Shopvery</t.P>
                <t.P>Grocery deliveries right at your door step</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://codepen.io/brownkcing/full/ZPVZwK"
                >
                  Work in progress lorem ipsum dolor sit amet
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Placeholder website</t.H2>
                <t.P>Lorem ipsum</t.P>
                <t.P>Dolor sit amet</t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="#">
                  Lorem ipsum
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={Placeholder} alt="Placeholder title" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>Fancy working with me? Contact me for more info! </t.LargeP>
            <HiremePage onClick={this.openContactPopup} book>
              Contact me
            </HiremePage>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
    backgroundImage: file(relativePath: { eq: "background2.jpeg" }) {
      ...fluidImage
    }
  }
`;
