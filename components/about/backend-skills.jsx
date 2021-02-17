import Image from 'next/image';

import
{
  backendStaticContent,
  backendMappingContent
} from '../../data/skills/backend-data';
import styles from '../../styles/components/about/Skills.module.scss';

const BackendSkills = () => {
  const { title, url } = backendStaticContent;

  return (
    <div style={{ flexDirection: 'column-reverse' }} className={ styles.container }>
      <div className={ styles.skills }>
        <h3>{ title }</h3>
        <br/><br/>

        <div className={ styles.techBackend }>
          {
            backendMappingContent.map((skill, index) => (
              <div 
                key={ index }
              >
                <Image 
                  alt={ skill.name }
                  src={ skill.link }
                  className={ styles.image }
                  width={ 100 }
                  height={ 100 }
                  priority
                />
                <p>{ skill.name }</p>
              </div>
            ))
          }
        </div>

      </div>

      <div className={ styles.illustration }>
        <Image 
          alt={ title }
          src={ url }
          width={ 645.7 }
          height={ 477.33 }
          priority
        />
      </div>
    </div>
  );
}

export default BackendSkills;