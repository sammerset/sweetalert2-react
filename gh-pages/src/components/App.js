import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

const App = () => (
  <div style={s.root}>
    <h1 style={s.title}>Page Apps for GitHub Pages</h1>
    <Interactive
      as="a"
      href="https://github.com/rafrex/spa-github-pages"
      style={s.repoLink}
      {...s.link}
    >
      https://github.com/rafrex/spa-github-pages
    </Interactive>

    <nav style={s.breadcrumbs}>
      <Breadcrumbs />
    </nav>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/example" component={ExampleComponent} />
      <Route component={PageNotFound} />
    </Switch>

    <div style={s.creditLine}>
      <Interactive
        as="a"
        href="http://www.rafaelpedicini.com"
        interactiveChild
        focus={{}}
        touchActive={{}}
        touchActiveTapOnly
      >
        Code and concept by <span {...s.childLink}>Rafael cni</span>
      </Interactive>
    </div>
  </div>
);

export default hot(module)(App);
