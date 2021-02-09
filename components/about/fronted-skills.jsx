import styles from '../../styles/components/about/FrontendSkills.module.scss';
import Image from 'next/image';

import 
{ 
  frontendStaticContent, 
  frontendMappingContent
}  from '../../data/skills/frontend-data';

const FrontendSkills = () => {
  const { title, url } = frontendStaticContent;

  return(
    <div className={ styles.container }>
      <div className={ styles.illustration }>
        <Image 
          alt={ title }
          src={ url }
          width={ 645.7 }
          height={ 588 }
          priority
        />
      </div>

      <div className={ styles.skills }>
        <h3>{ title }</h3>
        <br/><br/>

        {
          frontendMappingContent.map((skill, index) => (
            <div className={ styles.progress }>
              <p>
                { skill.name }
                <span>
                  { skill.width }
                </span>
              </p>

              <div className={ styles.progressBar }>
                <div style={{ width: skill.width }}>

                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default FrontendSkills;