import styled from 'styled-components';
import Colors from '../Colors';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: transparent;
  color: ${Colors.whiteish};
  line-height: 1.05;
  font-size: 16px;
  font-weight: bold;
  padding: ${props => (props.large ? '15px 34px;' : '12px 30px;')}
  border: 1px;
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  transition-duration: 0.3s;
  &:hover {
    color: #3c3b3b;
    background: ${Colors.white};
  }
`;

export const HireMe = styled.div`
  line-height: 1.05;
  font-size: ${props => (props.large ? '18px' : '16px')};
  padding: ${props => (props.large ? '16px 50px' : '12px 30px')};
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  background: transparent;
  color: ${Colors.whiteish};
  font-weight: bold;
  transition-duration: 0.3s;
  &:hover {
    color: #3c3b3b;
    background: ${Colors.white};
  }
`;

export const HiremePage = styled.div`
  line-height: 1.05;
  font-size: ${props => (props.large ? '18px' : '16px')};
  padding: ${props => (props.large ? '16px 50px' : '12px 30px')};
  border-radius: 100px;
  border: 1px solid #3c3b3b;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  background: transparent;
  color: '#3c3b3b';
  font-weight: bold;
  transition-duration: 0.3s;
  &:hover {
    color: ${Colors.white};
    background: ${Colors.dark};
  }
`;

export const LinkButton = styled(Button)`
  font-size: 0.9;
  border: none;
  text-decoration: underline;
  &:hover {
    border: none;
  }
`;
