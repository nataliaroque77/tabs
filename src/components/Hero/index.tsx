import React, {useContext} from 'react';
import DropdownA11y from '../Dropdown'
import { Container, HeroInnerWrapper, HeroContent, DropdownWrapper } from './styles';
import ProvincesContext from '../../state/ProvincesContext';
// @ts-ignore
import heroImg from '../../assets/images/girl.jpg';

export default function Hero(props: any) {
    const { provinces } = useContext(ProvincesContext);
    return (
        <Container>
            <HeroInnerWrapper style={{backgroundImage: `url(${heroImg})`}}>
                <HeroContent>
                    <DropdownWrapper>
                        <DropdownA11y
                            id={'main-dropdown'}
                            items={provinces}
                            value={props.item}
                            onChange={(v: any) => props.setItem(v)}
                        />
                    </DropdownWrapper>
                </HeroContent>
            </HeroInnerWrapper>
        </Container>
    );
}
