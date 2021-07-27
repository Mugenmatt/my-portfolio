import React, {useEffect} from 'react';
import {
    ProjectContainer,
    PaddingContent,
    ImgBox,
    ProjectImg,
    ProjectTitle,
    ProjectDescription,
    LinkBox,
    LinksAnchor,
} from './style'
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const WorkProject = ({backColor, img, altText, linkGit, linkWeb, title, description, deploy}) => {

    const {ref, inView} = useInView();
    const animationProject = useAnimation();

    useEffect(() => {
        
        if(inView) {

            animationProject.start(i => ({
                opacity: [0, 1],
                y: [-500, 0],
                transition: {delay: i * 0.3, duration: 1.2}
            }))
        }

    }, [inView, animationProject])

    return (
        <ProjectContainer backColor={backColor} ref={ref}>
            
            <PaddingContent>

            <ImgBox animate={animationProject} custom={1}>
                <ProjectImg src={img} alt={altText} />
            </ImgBox>

            <ProjectTitle animate={animationProject} custom={2}>{title}</ProjectTitle>

            <ProjectDescription animate={animationProject} custom={3}>{description}</ProjectDescription>

            {
                deploy ?
                <LinkBox animate={animationProject} custom={4}>
                    <LinksAnchor target='_blank' href={linkGit} ><FaGithub/></LinksAnchor>
                    <LinksAnchor target='_blank' href={linkWeb} ><BsBoxArrowUpRight/></LinksAnchor>
                </LinkBox>
                :
                <LinkBox animate={animationProject} custom={4}>
                    <LinksAnchor target='_blank' href={linkGit}><FaGithub/></LinksAnchor>
                </LinkBox>
            }

            </PaddingContent>
            
        </ProjectContainer>
    );
};

export default WorkProject;