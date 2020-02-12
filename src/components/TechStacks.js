import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import * as Mixins from '../Mixins';
import gatsby from '../images/gatsby.png';
import firebase from '../images/firebase.png';
import { FaGithub, FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaWordpress } from 'react-icons/fa';
import { IoLogoCss3, IoLogoSass, IoLogoJavascript } from 'react-icons/io';
import { DiMongodb, DiHeroku, DiVisualstudio } from 'react-icons/di';
import { IconContext } from 'react-icons';

const IconStacks = styled.div`
  ${Mixins.iconMixin}
  padding: 0px 0px 50px 0px;
`;

export const TechStacks = () => (
  <IconStacks>
    <IconContext.Provider value={{ size: '80px' }}>
      <div>
        <FaHtml5 style={{ color: '#e34f26' }} data-tip="html5" />
      </div>
      <div>
        <IoLogoCss3 style={{ color: '#87CEFA' }} data-tip="css3" />
      </div>
      <div>
        <IoLogoJavascript style={{ color: '#f7df1e' }} data-tip="javascript" />
      </div>
      <div>
        <IoLogoSass style={{ color: '#cc6699' }} data-tip="sass" />
      </div>
      <div>
        <FaReact style={{ color: '#00d8ff' }} data-tip="react" />
      </div>
      <img src={gatsby} style={{ height: '70px', width: '80px', padding: '5px' }} data-tip="gatsbyjs" alt="gatsbyjs" />
      <div>
        <FaNodeJs style={{ color: '#6cc24a' }} data-tip="nodejs" />
      </div>
      <div>
        <DiMongodb style={{ color: '#589636' }} data-tip="mongodb" />
      </div>
      <div>
        <FaGitAlt style={{ color: '#fca326' }} data-tip="git" />
      </div>
      <div>
        <FaGithub style={{ color: '#333' }} data-tip="github" />
      </div>
      <div>
        <DiHeroku style={{ color: '#c9c3e6' }} data-tip="heroku" />
      </div>
      <div>
        <FaWordpress style={{ color: '#0087be' }} data-tip="wordpress" />
      </div>
      <img
        src={firebase}
        style={{ height: '70px', width: '80px', padding: '5px' }}
        data-tip="firebase"
        alt="firebase"
      />
      <div>
        <DiVisualstudio style={{ color: '#5d2b90' }} data-tip="visualstudio" />
      </div>
    </IconContext.Provider>
    <ReactTooltip type="light" />
  </IconStacks>
);
