import classes from './footer.module.scss';
import FooterBio from '../../containers/footerBio/footerBio';
import FooterMenu from '../../containers/footerMenu/footerMenu';
import { aboutUs, category, siteMap } from '../../utility/menuFooter';
import FooterContact from '../../containers/footerContact/footerContact';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-lg-3'>
            <FooterBio />
          </div>
          <div className='col-xs-12 col-lg-9'>
            <div className='row'>
              <div className='col-xs-12 col-sm-6 col-lg-3'>
                <FooterMenu name='Categoria' list={category} />
              </div>
              <div className='col-xs-12 col-sm-6 col-lg-3'>
                <FooterMenu name='Mappa Sito' list={siteMap} />
              </div>
              <div className='col-xs-12 col-sm-6 col-lg-3'>
                <FooterMenu name='Compania' list={aboutUs} />
              </div>
              <div className='col-xs-12 col-sm-6 col-lg-3'>
                <FooterContact />
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12'>
            <div className={classes.Footer__rights}>
              <p className={classes.Footer__text}>© 2022 Blonews. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
