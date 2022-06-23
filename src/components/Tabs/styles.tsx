import styled from 'styled-components';

export const TabsContainer = styled.div`
    padding: 0;
    background-color: #fff;
    clear: left;
    min-height: initial;
    width: 100%;
    
    @media all and (min-width: 767px) {
        min-height: 630px;
    }
`;
export const TabsWrapContent = styled.div`
    display: none;
    padding: 1em 1.4em;
    
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
        margin: 1px .2em 0 0;

        background: #929090;
        color: #fff;
        padding: .9em 1em;
        text-decoration: none;
    
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        line-height: 1;
       
      
        &:hover {
          background: #766A62;
        }
        
        &:focus {
            outline: 2px solid #169BA2;
            outline-offset: 2px;
        }
        
        &.active  {
            //background: #006983;
            background: #A12016;
        }
    }
  
    li a {
     
    }
   
    li.tab-active {
        background: #fff;
        color: #212121;
        &:hover {
          background: #766A62;
        }
    }
    
    @media all and (min-width: 767px) {
        display: flex;
        flex-wrap: wrap;
        margin-top: 0;
        padding-left: 0;
        flex-direction: row;
    }
`;

export const Accordion = styled.h2`
    display: block;
    cursor: pointer;
    padding: 6px 15px;
    font-size: 18px;
    background: #006983;
    font-weight: normal;
    color: #fff;
    border: 0;
    margin: 1px 0 0;
    
    &:hover {
      background: #766a62;
    }

   &:focus {
     outline: 1px dotted #fff;
     outline-offset: -2px;
   }
    
    &.tab-active {
        margin-bottom: 0;
        background: #fff;
        color:#006983;
        border: 1px solid #006983;
        
        &:hover {
            color: #766a62;
            background: #fff;
        }
    }
    
    @media all and (min-width: 767px) {
       display: none;
    }
`;




