import styled from 'styled-components';
import { color, media } from '../../theme';
import { rem } from 'polished';

export const TabsContainer = styled.div`
    clear: left;
    min-height: initial;
    width: 100%;
    padding: 0;
    background: ${color.palette.white};

    @media ${media.medium} {
        min-height: 300px;
    }
`;
export const TabsWrapContent = styled.div`
    display: none;
    padding: 16px 24px;
    
    &.active {
     display: block;
    }
`;

export const TabsPanel = styled.ul`
    display: none;
    margin: 0;
    padding: 0;
 
    li {
        display: flex;
        flex-grow: 1;
        list-style: none;
        margin: 1px .2px 0 0;

        background: ${color.palette.dustyGray};
        color: ${color.palette.white};
        padding: .9em 1em;
        text-decoration: none;
    
        font-weight: bold;
        font-size: ${rem('27px')};
        cursor: pointer;
        line-height: 1;
      
        &:hover {
          background: ${color.palette.doveGray};
        }
        
        &:focus {
            outline: 2px solid ${color.palette.lightOrient};
            outline-offset: 2px;
        }
        
        &.active  {
            background: ${color.palette.rubi};
        }
    }
  
    li.tab-active {
      background: ${color.palette.white};
        color: ${color.palette.black};
        &:hover {
          background: ${color.palette.doveGray};
        }
    }

   @media ${media.medium} {
        display: flex;
        flex-wrap: wrap;
        margin-top: 0;
        padding-left: 0;
   }
`;

export const Accordion = styled.h2`
    display: block;
    padding: 6px 15px;
    border: 0;
    margin: 1px 0 0;
    background: ${color.palette.mosqueLight};
    color: ${color.palette.white};
    font-size: ${rem('27px')};
    font-weight: normal;
    cursor: pointer;
    
    &:hover {
      background: ${color.palette.doveGray};
    }

   &:focus {
     outline: 1px dotted ${color.palette.white};
     outline-offset: -2px;
   }
    
    &.active {
        margin-bottom: 0;
        border: 2px solid ${color.palette.mosqueLight};
        background: ${color.palette.white};
        color: ${color.palette.mosqueLight};

        &:hover {
            background: ${color.palette.white};
            color: ${color.palette.doveGray};
        }
    }

    @media ${media.medium} {
       display: none;
    }
`;




