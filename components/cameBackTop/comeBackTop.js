import classes from './cameBackTop.module.scss';
import { BsArrowUp } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const ComeBackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // check scroll status
  const checkScrollStatusHandler = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // create event scroll
  useEffect(() => {
    window.addEventListener('scroll', checkScrollStatusHandler);

    return () => {
      window.removeEventListener('scroll', checkScrollStatusHandler);
    };
  }, []);

  // scroll to top
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // check if visible
  if (!isVisible) return;

  return (
    <div className={classes.ComeBackTop} onClick={scrollToTopHandler}>
      <BsArrowUp className={classes.ComeBackTop__icon} />
    </div>
  );
};

export default ComeBackTop;
