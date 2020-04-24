import styled from 'styled-components';

export const TabsWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 0;
    padding-left: 0;
    @media all and (min-width: 600px) {
        flex-direction: row;
    }
`;

export const TabItem = styled.div`
    list-style: none;
    box-sizing: border-box;
    background: #eee;
    border: 1px solid #ddd;
    
    a {
        display: flex;
        text-decoration: none;
        padding: 1.6rem;
        cursor: pointer;
        z-index: 1;
        margin-left: -1px;
        border-left: 10px solid #ccc;
        max-height: 54px;
        color: #555;
        
        &:hover{
          background-color: #fff;
        }
        
        &:focus {
            outline: -webkit-focus-ring-color auto 5px;
        }
                
        &.active {
            background: #fff;
            cursor: default;
            border-left-color: #008a00;
        }
    }
  
    @media all and (min-width: 600px) {
        flex-grow: 1;
    }
`;

export const TabContent = styled.div`
   padding: 1em;
   order: 1;
`;
