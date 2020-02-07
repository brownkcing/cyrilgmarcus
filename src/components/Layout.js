import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../GlobalStyles';
import * as Mixins from '../Mixins';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import DevIcon from 'devicon-react-svg';

library.add(fab, faCheckSquare, faCoffee, faGithub, faLinkedin);

export const Content = styled.div`
  ${Mixins.contentMixin}
`;

export const LayoutWrapper = styled.div`
  position: relative;
`;

export const Icons = styled(DevIcon)`
  width: 80px;
`;

const Layout = ({ children, theme, bigFooter, mediumFooter, openContactPopup }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyles />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Cyril/s Portfolio'
            },
            { name: 'keywords', content: 'portfolio cyril' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header theme={theme} openContactPopup={openContactPopup} />
        <LayoutWrapper>{children}</LayoutWrapper>
        <Footer big={bigFooter} medium={mediumFooter} openContactPopup={openContactPopup} />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  bigFooter: PropTypes.bool,
  mediumFooter: PropTypes.bool
};

export default Layout;
