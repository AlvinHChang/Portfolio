import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px 4px;
  margin: 10px;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #b3e5fc;
  opacity: 0.8;
  width: 100px;
  height: 30px;

  &:active {
    background: black;
  }
`;
