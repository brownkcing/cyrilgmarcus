import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';
import { Content } from './Layout';
import { media } from '../MediaQueries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterWrapper = styled.div`
  background: ${Colors.darkest};
  color: ${Colors.white};
  padding: ${props => (props.big ? '210px' : props.medium ? '100px' : '80px')} 0 60px 0;
  ${media.tablet`padding: ${props => (props.big ? '150px' : props.medium ? '100px' : '128px')} 20px 50px 20px;`}
`;

const Copyright = styled.p`
  text-align: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  div > a {
    justify-content: space-around;
    width: 100px;
    margin: 10px;
    text-align: center;
  }
`;

const SocialMedia = () => (
  <FlexWrapper>
    <div>
      <a href="https://www.linkedin.com/in/cyril-marcus/">
        <FontAwesomeIcon icon={['fab', 'linkedin']} color="#0e76a8" size="2x" />
      </a>
      <a href="https://github.com/brownkcing">
        <FontAwesomeIcon icon={['fab', 'github-square']} color="#FFFED2" size="2x" />
      </a>
      <a href="https://codepen.io/brownkcing">
        <FontAwesomeIcon icon={['fab', 'codepen']} color="#000" size="2x" />
      </a>
    </div>
  </FlexWrapper>
);

const Footer = ({ big, medium }) => (
  <FooterWrapper {...(big && { big })} {...(medium && { medium })}>
    <Content>
      <Copyright white align="center">
        <SocialMedia />© Cyril Marcus 2020
      </Copyright>
    </Content>
  </FooterWrapper>
);

export default Footer;
