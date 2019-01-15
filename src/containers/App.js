import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Header from '../components/Header';
import S11 from '../components/S11';
import S12 from '../components/S12';
import S13 from '../components/S13';
import S14 from '../components/S14';
import S15 from '../components/S15';
import S16 from '../components/S16';
import S17 from '../components/S17';
import S18 from '../components/S18';
import S19 from '../components/S19';
import S20 from '../components/S20';
import S21 from '../components/S21';
import S22 from '../components/S22';
import S23 from '../components/S23';
import S24 from '../components/S24';
import S25 from '../components/S25';
import S26 from '../components/S26';
import S27 from '../components/S27';
import S28 from '../components/S28';
import S29 from '../components/S29';
import S30 from '../components/S30';
import S31 from '../components/S31';
import S32 from '../components/S32';
import S33 from '../components/S33';
import S34 from '../components/S34';
import S34_2 from '../components/S34_2';
import S34_3 from '../components/S34_3';
import S35 from '../components/S35';
import S36 from '../components/S36';
import S37 from '../components/S37';
import S38 from '../components/S38';
import S38_2 from '../components/S38_2';
import S38_3 from '../components/S38_3';
import S39 from '../components/S39';
import S40 from '../components/S40';
import S41 from '../components/S41';
import S42 from '../components/S42';

class App extends Component {
  render() {
    return (
        <div className="container">
            <Header />
            <div className="flex">
              <div>
                  <h4 className="App-title">Stage 1:</h4>
                  <ul>
                      <li><Link to='/S11'>S11</Link></li>
                      <li><Link to='/S12'>S12</Link></li>
                      <li><Link to='/S13'>S13</Link></li>
                      <li><Link to='/S14'>S14</Link></li>
                      <li><Link to='/S15'>S15</Link></li>
                      <li><Link to='/S16'>S16</Link></li>
                      <li><Link to='/S17'>S17</Link></li>
                      <li><Link to='/S18'>S18</Link></li>
                      <li><Link to='/S19'>S19</Link></li>
                      <li><Link to='/S20'>S20</Link></li>
                      <li><Link to='/S21'>S21</Link></li>
                      <li><Link to='/S22'>S22</Link></li>
                      <li><Link to='/S23'>S23</Link></li>
                      <li><Link to='/S24'>S24</Link></li>
                      <li><Link to='/S25'>S25</Link></li>
                      <li><Link to='/S26'>S26</Link></li>
                      <li><Link to='/S27'>S27</Link></li>
                      <li><Link to='/S28'>S28</Link></li>
                      <li><Link to='/S29'>S29</Link></li>
                      <li><Link to='/S30'>S30</Link></li>
                  </ul>
              </div>
              <div>
                  <h4 className="App-title">Stage 2:</h4>
                  <ul>
                      <li><Link to='/S31'>S31</Link></li>
                      <li><Link to='/S32'>S32</Link></li>
                      <li><Link to='/S33'>S33</Link></li>
                      <li><Link to='/S34'>S34</Link></li>
                      <li><Link to='/S34_2'>S34_2</Link></li>
                      <li><Link to='/S34_3'>S34_3</Link></li>
                      <li><Link to='/S35'>S35</Link></li>
                      <li><Link to='/S36'>S36</Link></li>
                      <li><Link to='/S37'>S37</Link></li>
                      <li><Link to='/S38'>S38</Link></li>
                      <li><Link to='/S38_2'>S38_2</Link></li>
                      <li><Link to='/S38_3'>S38_3</Link></li>
                      <li><Link to='/S39'>S39</Link></li>
                      <li><Link to='/S40'>S40</Link></li>
                      <li><Link to='/S41'>S41</Link></li>
                      <li><Link to='/S42'>S42</Link></li>
                  </ul>
              </div>
            </div>

            <Switch>
              <Route path='/S11' component={S11} />
              <Route path='/S12' component={S12} />
              <Route path='/S13' component={S13} />
              <Route path='/S14' component={S14} />
              <Route path='/S15' component={S15} />
              <Route path='/S16' component={S16} />
              <Route path='/S17' component={S17} />
              <Route path='/S18' component={S18} />
              <Route path='/S19' component={S19} />
              <Route path='/S20' component={S20} />
              <Route path='/S21' component={S21} />
              <Route path='/S22' component={S22} />
              <Route path='/S23' component={S23} />
              <Route path='/S24' component={S24} />
              <Route path='/S25' component={S25} />
              <Route path='/S26' component={S26} />
              <Route path='/S27' component={S27} />
              <Route path='/S28' component={S28} />
              <Route path='/S29' component={S29} />
              <Route path='/S30' component={S30} />
              <Route path='/S31' component={S31} />
              <Route path='/S32' component={S32} />
              <Route path='/S33' component={S33} />
              <Route path='/S34' component={S34} />
              <Route path='/S34_2' component={S34_2} />
              <Route path='/S34_3' component={S34_3} />
              <Route path='/S35' component={S35} />
              <Route path='/S36' component={S36} />
              <Route path='/S37' component={S37} />
              <Route path='/S38' component={S38} />
              <Route path='/S38_2' component={S38_2} />
              <Route path='/S38_3' component={S38_3} />
              <Route path='/S39' component={S39} />
              <Route path='/S40' component={S40} />
              <Route path='/S41' component={S41} />
              <Route path='/S42' component={S42} />
            </Switch>
        </div>
    );
  }
}

export default App;
