import React, { useState } from 'react';
import { TabsWrapper, TabItem, TabContent } from './styles'

function Tabs(props: any) {
    const initialState = { selected: props.selected };
    const [state, setState] = useState(initialState);

    const handleSelection = (  event: any, index: number ):void => {
        event.preventDefault();
        setState({
            ...state,
            selected: index
        });
    }

    return (
        <>
            <TabsWrapper role="tablist">
                {props.children.map( (item:any, index:number) => {
                    return (
                        <TabItem role="tab" key={index} aria-controls={`panel${index}`}>
                            <a className={state.selected === index ? 'active' : ''}
                               onClick={ (e: any) => handleSelection(e, index) }
                               href="/#">
                                {item.props.label}
                            </a>
                        </TabItem>
                    );
                })}
            </TabsWrapper>
            <TabContent>
                {props.children[state.selected]}
            </TabContent>
        </>
    );
}
export default Tabs;
