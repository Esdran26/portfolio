import styles from '../../styles/components/about/Skills.module.scss';
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

        <div className={ styles.tech }>
          {
            frontendMappingContent.map((skill, index) => (
              <div 
                key={ index }
              >
                <Image 
                  alt={ skill.name }
                  src={ skill.link }
                  className={ styles.image }
                  width={ 100 }
                  height={ 100 }
                />
                <p>{ skill.name }</p>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
}

export default FrontendSkills;