import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ImageGallery from './pages/Gallery';
import FirstConsoleApp from './pages/FirstConsoleApp';
import GroupdConsoleProject from './pages/GroupConsoleProject';
import FishingLicenceApp from './pages/FishingLicenceApp';
import RSAApp from './pages/RSAApp';
import MajorProject from './pages/MajorProject';
import AvatarGame from './pages/AvatarGame';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/gallery">
            <ImageGallery />
          </Route>
          <Route exact path="/projects/firstconsoleapp">
            <FirstConsoleApp />
          </Route>
          <Route exact path="/projects/groupconsoleproject">
            <GroupdConsoleProject />
          </Route>
          <Route exact path="/projects/fishinglicence">
            <FishingLicenceApp />
          </Route>
          <Route exact path="/projects/rsa">
            <RSAApp />
          </Route>
          <Route exact path="/projects/majorproject">
            <MajorProject  />
          </Route>
          <Route exact path="/projects/matchgame">
            <AvatarGame />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}