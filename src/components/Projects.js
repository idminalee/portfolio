import React from 'react'
import { MdDesktopMac } from 'react-icons/md'
import { RiCodeSSlashLine } from 'react-icons/ri'
import { IconContainer } from './styles/IconStyles'
import { CardStyles, TitleGroup, ContentGroup } from './styles/ProjectsStyles'
import StackStyles from './styles/StackStyles'
import { data } from '../static/projectData'

const renderedProjects = data.map((project) => {
  return (
    <CardStyles>
      <TitleGroup>
        <h3 className="title">{project.title}</h3>
        <div>
          <IconContainer className="link-item">
            <a href={project.demo} aria-label="Live demo link">
              <MdDesktopMac size="24" />
            </a>
          </IconContainer>

          <IconContainer className="link-item">
            <a href={project.github} aria-label="Github link for the project">
              <RiCodeSSlashLine size="24" />
            </a>
          </IconContainer>
        </div>
      </TitleGroup>

      <ContentGroup>
        <img className="demo-gif" src={project.gif} alt="Demo GIF" />
        <div className="content-right">
          <StackStyles>
            {project.stack.map((item) => {
              return (
                <small className={item}>
                  {item === 'react' ? `${item}.js` : item}
                </small>
              )
            })}
          </StackStyles>
          <ul className="description-list">
            {project.description.map((item) => {
              return <li className="description-item">- {item}</li>
            })}
          </ul>
        </div>
      </ContentGroup>
    </CardStyles>
  )
})

const Projects = () => {
  return renderedProjects
}

export default Projects
