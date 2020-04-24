import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  height: calc(100vh - 470px);

  @media (min-width: 767px) {
    height: calc(100vh - 300px);
  }
`;

export const HeroInnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  background-image: url(../assets/images/4.jpg);
`;

export const HeroImage = styled.div`
  position: relative;
  top: 0;
  height: 100%;
  img {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    //max-width: 20%;
    height: auto;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    //opacity: 0;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
  }
`;
