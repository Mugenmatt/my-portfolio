import React, {Fragment} from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { 
    CardContainer,
    CardImageBox,
    CardImage,
    CardInfo,
    CardTitle,
    CardDescription,
    CardYear,
    CardLink,
} from './style'

const EducationCard = ({imgFirst, title, description, year, img, altText, link}) => {

    return (
        <CardContainer >

            {
                imgFirst ? 
                <Fragment>
                    <CardImageBox >
                        <CardImage src={img} alt={altText} />
                    </CardImageBox>
                    <CardInfo>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                        <CardYear>{year}</CardYear>
                        <CardLink target='_blank' href={link} >
                            <BsBoxArrowUpRight />
                        </CardLink>
                    </CardInfo>
                </Fragment>
                :
                <Fragment>
                    <CardInfo infoToLeft={'infoToLeft'}>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                        <CardYear>{year}</CardYear>
                        <CardLink target='_blank' href={link} >
                            <BsBoxArrowUpRight />
                        </CardLink>
                    </CardInfo>
                    <CardImageBox>
                        <CardImage src={img} alt={altText} />
                    </CardImageBox>
                </Fragment>
            }
            
        </CardContainer>
    );
};

export default EducationCard;