import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from '../../styles/components/global/SectionText.module.scss';

const SectionText = ({ text, title = '', icons }) => {
  return(
    <div className={ styles.container } >
      <p>
        { text }
      </p>

      {
        title !== '' && <h3>{ title }</h3>
      }

      <div className={ styles.icons }>
        {
          icons.map((icon, index) => (
            <div className={ styles.iconContent } key={ index }>
                <Image 
                alt={ icon.imageTitle }
                src={ icon.imageUrl }
                width={ 75 }
                height={ 75 }
                priority
              />

              <p className={ styles.hobbieTitle }>
                { icon.imageTitle }
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default SectionText;

SectionText.proptypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  icons: PropTypes.array.isRequired
}