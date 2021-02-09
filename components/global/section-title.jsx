import PropTypes from 'prop-types';

import styles from '../../styles/components/global/SectionTitle.module.scss';

const SectionTitle = ({ title }) => {
  const uppercase = title.toUpperCase();

  return(
    <div className={ styles.container }>
      <h2>
        { uppercase }
      </h2>
      
      <h3>
        { uppercase }
      </h3>
    </div>
  );
}

export default SectionTitle;

SectionTitle.proptypes = {
  title: PropTypes.string.isRequired
}