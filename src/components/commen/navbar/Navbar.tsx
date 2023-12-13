import  { useCallback, useMemo, useState } from 'react';
import styles from '../../../styles/styles';
import { navlinks } from '../../../data/navlinks';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = useCallback(() => {
      setToggle((prevToggle) => !prevToggle);
    }, []);
  
    const memoizedHandleClick = useMemo(() => handleClick, [handleClick]);

  return (
    <nav className={`${styles.flexBetween}`}>
    <img src="logo.svg" alt="site_logo" />
    
    <ul className={`${styles.flexitems} gap-3`}>
        {navlinks.map(navlink => (
          <a href={navlink.link} className='' key={navlink.name}>
            {navlink.link}
          </a>
        ))}
    </ul>
    <div className={`${styles.flexitems} gap-3`}>
        <img src={''} alt="" />
    </div>

    </nav>
  )
}

export default Navbar 