import classes from './headerLinks.module.scss';
import Social from '../../reusable/social/social';
import Navbar from '../navbar/navbar';

const HeaderLinks = () => {
  return (
    <div className={classes.HeaderLinks}>
      <Navbar />
      <Social />
    </div>
  );
};

export default HeaderLinks;
