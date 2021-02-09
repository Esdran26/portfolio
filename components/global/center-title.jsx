import styles from '../../styles/components/global/CenterTitle.module.scss';
import PropTypes from 'prop-types';

const CenterTitle = ({ title = '' }) => {
  const titleUppercase = title.toUpperCase();

  return(
    <h1 className={ styles.title }>
      { titleUppercase }
    </h1>
  );
}

export default CenterTitle;

CenterTitle.proptypes = {
  title: PropTypes.string.isRequired
}