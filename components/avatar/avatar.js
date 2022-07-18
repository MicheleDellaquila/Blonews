import { useState, useEffect, useRef } from 'react';
import classes from './avatar.module.scss';
import DropdownLink from '../../containers/dropdownLink/dropdownLink';

const Avatar = ({ name, image }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdown = useRef();

  // close dropdown
  const closeDropdownHandler = (e) => {
    if (!dropdown.current?.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  // create event listener click
  useEffect(() => {
    window.addEventListener('click', closeDropdownHandler);

    return () => {
      window.removeEventListener('click', closeDropdownHandler);
    };
  }, []);

  return (
    <div className={classes.Avatar}>
      <figure
        ref={dropdown}
        className={classes.Avatar__image}
        onClick={() => setShowDropdown(true)}
      >
        <img src={image || '/static/images/user.png'} alt={name} />
      </figure>
      {showDropdown && <DropdownLink title={name} />}
    </div>
  );
};

export default Avatar;
