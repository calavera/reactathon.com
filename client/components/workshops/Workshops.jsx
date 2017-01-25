import React, { PureComponent } from 'react';
import classnames from 'classnames/bind';

import styles from './workshops.styl';
import workshopsInfo from './workshops.json';
import workshopsBg from './bg-workshops.png';

import TitleCard from '../Title-Card.jsx';

import ben from '../../images/peeps/ben.png';
import berks from '../../images/peeps/berks.png';
import brian from '../../images/peeps/brian.png';
import david from '../../images/peeps/david.png';
import mike from '../../images/peeps/mike.png';
import moose from '../../images/peeps/moose.png';

const images = {
  ben,
  berks,
  brian,
  david,
  mike,
  moose
};
const cx = classnames.bind(styles);
const propTypes = {};
const seen = {};
const instructors = workshopsInfo
  .filter(workshop => {
    if (seen[workshop.instructor]) {
      return false;
    } else {
      seen[workshop.instructor] = true;
      return true;
    }
  })
  .map(({ title, instructor, company, img }) => (
    <div
      className={ cx('instructor-container') }
      key={ instructor }
      >
      <img src={ images[img] }/>
      <h3 className={ cx('instructor') }>
        { instructor }
      </h3>
      <div className={ cx('instructor-info') }>
        <h4>{ title }</h4>
        <h4>{ company }</h4>
      </div>
    </div>
  ));
const workshops = workshopsInfo.map(({
  name,
  date,
  title,
  company,
  instructor,
  difficulty
}) => (
  <div
    className={ cx('workshop-container') }
    key={ name }
    >
    <div className={ cx('workshop-info') }>
      <header className={ cx('title-container') }>
        <h4 className={ cx('title') }>
          { difficulty }
        </h4>
      </header>
      <h2 className={ cx('name') }>
        { name }
      </h2>
      <h3>
        { instructor }
      </h3>
      <h4>
        { title }, { company }
      </h4>
    </div>
    <div className={ cx('date') }>
      { date }
    </div>
  </div>
));
export default class Workshops extends PureComponent {
  render() {
    return (
      <div className={ cx('workshops') }>
        <TitleCard img={ workshopsBg }>
          Workshops
        </TitleCard>
        <div className={ cx('info') }>
          <h1>March 7 - 10</h1>
          <h2>Learn from Leaders in the Field</h2>
          <h3>
            Choose your workshops a la carte,
            or select tracks for multi-day instruction and discounts.<br />Please note: ALL of our workshops assume that you are
            comfortable using JavaScript.
          </h3>
          <h3>

          </h3>
        </div>
        <div className={ cx('instructors-list') }>
          { instructors }
        </div>
        <div className={ cx('workshops-list') }>
          { workshops }
        </div>
      </div>
    );
  }
}
Workshops.displayName = 'Workshops';
Workshops.propTypes = propTypes;
