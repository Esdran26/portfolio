import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/components/projects/ProjectsList.module.scss';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(
      'https://portfolio-backend-mern.herokuapp.com/api/projects/'
    )
    .then(res => {
      setProjects(res.data.projects);
    })
    .catch(error => {
      console.log(error);
    });
  }, [setProjects]);

  return(
    <div className={ styles.container }>
      {
        projects.map(({ technologies, title, linkImage, linkWebSite, id }) => (
          <div 
            key={ id } 
            className={ styles.project }
          >
            <div className={ styles.tech }>
              <div  className={ styles.optionTech }>
                {
                  technologies.map((technologie, index) => (
                      <p key={ index }>* { technologie } </p>
                  ))
                }
              </div>

              <a 
                target="_blank" 
                href={ linkWebSite }
                className={ styles.image }
              >
                <Image 
                  alt={ title }
                  src={ linkImage }
                  width={ 445 }
                  height={ 254.74 }
                  priority
                />
              </a>
            </div>

            <a 
              target="_blank" 
              href={ linkWebSite }
              className={ styles.title }
            >
              <h3>{ title }</h3>
            </a>
          </div>
        ))
      }
    </div>
  );
}

export default ProjectsList;