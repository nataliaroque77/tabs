import React from 'react';
import { Container, HeroInnerWrapper, HeroImage } from './styles';

export default function Hero() {
    return (
        <Container>
            <HeroInnerWrapper>
                <HeroImage>
                    <img src={require('../assets/images/girl.jpg')} alt="Hero" width="1200" height="675" />
                </HeroImage>
            </HeroInnerWrapper>
        </Container>
    );
}
