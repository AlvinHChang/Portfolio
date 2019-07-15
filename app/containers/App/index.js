/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ComponentsPage from 'containers/ComponentsPage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import ExperiencePage from 'containers/ExperiencePage/Loadable';
import ProjectPage from 'containers/ProjectPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <div>
      <Header />
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/components" component={ComponentsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/project" component={ProjectPage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    </div>
  );
}
