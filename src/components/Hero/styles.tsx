import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  height: calc(100vh - 400px);

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
`;

export const HeroImage = styled.div`
  position: relative;
  top: 0;
  height: 100%;
  img {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    height: auto;
    width: 100%;
    top: 150px;
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;
    
    @media (min-width: 767px) {
       top: 64%;
    }
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

export const PageHeading = styled.h1`
    color: #000;
  
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 20px;
  width: 100%;
  right: 0;
  padding: 0 20px;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  right: 0;
  padding: 0 15px;

  @media (min-width: 767px) {
       right: 100px;
       width: 250px;
  }
`;