import React from 'react';
import {
    ImageContainer,
    BackgroundImage,
    ColorOverlay
} from './style'


const SeparatorImg = ({img}) => {

    return (
        <ImageContainer >
            
            <BackgroundImage picture={img} alt='Separator Image'>

                <ColorOverlay />

            </BackgroundImage>

        </ImageContainer>
    );
};

export default SeparatorImg;