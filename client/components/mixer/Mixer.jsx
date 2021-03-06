import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './mixer.styl';

import TitleCard from '../Title-Card.jsx';
import ActionButton from '../Action-Button.jsx';
import reddit from '../../images/sponsors/reddit.png';
import plus from '../../images/sponsors/plus.png';
import companiesTop from '../../images/sponsors/hiring-companies-top.png';
import companiesBottom from '../../images/sponsors/hiring-companies-bottom.png';

const cx = classnames.bind(styles);
const propTypes = {};

export default class Mixer extends PureComponent {
  render() {
    return (
      <div className={ cx('mixer') }>
        <TitleCard
          id='Hiring-Mixer'
          >
          Hiring Mixer
        </TitleCard>
        <div className={ cx('cards') }>
          <div className={ cx('info') }>
            <h2>Friday, March 10</h2>
            <h3>6:30PM - 9:30PM</h3>
          </div>
          <div className={ cx('logos')}>
            <img src={ companiesTop } />
          </div>
          <div className={ cx('you') }>
            <div>
              <h2>San Francisco's Hottest Companies</h2>
            </div>
            <div><img src={ plus } /></div>
            <div>
              <h2>You</h2>
            </div>
          </div>
          <div className={ cx('logos')}>
            <img src={ companiesBottom } />
          </div>
          {/* <div className={ cx('sponsors') }>
            <img src={ sponsorsBg } />
          </div> */}
          <div className={ cx('presented') }>
            <div>
              <ActionButton href='#Register'>
                Register Free
              </ActionButton>
            </div>
            <p>
              Food & Drink Provided
            </p>
            <h3>
              Hosted by
            </h3>
            <div>
              <img src={ reddit } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Mixer.displayName = 'Mixer';
Mixer.propTypes = propTypes;
