import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import * as Mixins from '../Mixins';
import { Icons } from './Layout';
import gatsby from '../images/gatsby.png';
import firebase from '../images/firebase.png';

const IconStacks = styled.div`
  ${Mixins.iconMixin}
  padding: 0px 0px 50px 0px;
`;

export const TechStacks = () => (
  <IconStacks>
    <Icons icon="html5" style={{ fill: '#e34f26' }} data-tip="html5"></Icons>
    <Icons icon="css3" style={{ fill: '#87CEFA' }} data-tip="css3"></Icons>
    <Icons icon="javascript" style={{ fill: '#f7df1e' }} data-tip="javascript"></Icons>
    <Icons icon="sass" style={{ fill: '#cc6699' }} data-tip="sass"></Icons>
    <Icons icon="react" style={{ fill: '#00d8ff' }} data-tip="react"></Icons>
    <img src={gatsby} style={{ height: '70px', width: '70px', padding: '5px' }} data-tip="gatsbyjs" alt="gatsbyjs" />
    <Icons icon="nodejs_small" style={{ fill: '#6cc24a' }} data-tip="nodejs"></Icons>
    <Icons icon="mongodb" style={{ fill: '#589636' }} data-tip="mongodb"></Icons>
    <Icons icon="git" style={{ fill: '#fca326' }} data-tip="git"></Icons>
    <Icons icon="github" style={{ fill: '#333' }} data-tip="github"></Icons>
    <Icons icon="heroku" style={{ fill: '#c9c3e6' }} data-tip="heroku"></Icons>
    <Icons icon="wordpress" style={{ fill: '#0087be' }} data-tip="wordpress"></Icons>
    <img src={firebase} style={{ height: '70px', width: '70px', padding: '5px' }} data-tip="firebase" alt="firebase" />
    <Icons icon="visualstudio" style={{ fill: '#5d2b90' }} data-tip="visualstudio"></Icons>
    <ReactTooltip type="light" />
  </IconStacks>
);
