import React, {useState} from 'react';
import { TabsContainer, TabsWrapContent, TabsPanel, Accordion,} from './styles'

function Tabs(props: any) {
    const initialState = { selected: props.selected };
    const [state, setState] = useState(initialState);

    const handleSelection = (  e: any, index: number ):void => {
        e.preventDefault();
        setState({
            ...state,
            selected: index
        });
    }

    const toggle = (  e: any, index: number ):void => {
        e.preventDefault();
        if (state.selected !== index) {
            setState({
                ...state,
                selected: index
            });
        }
        else {
            setState({
                ...state,
                selected: null
            });
        }
    }

    return (
        <>
            <TabsPanel role="tablist">
                {props.children.map( (item:any, index:number) => {
                    return (
                        <li
                            role="tab"
                            id={`tab${index}`}
                            aria-controls={`panel${index}`}
                            key={`tab-${index}`}
                            tabIndex={0}
                            className={state.selected === index ? 'active' : ''}
                            onClick={ (e: any) => handleSelection(e, index) }
                            onKeyPress={ (e: any) => handleSelection(e, index) }
                        >
                             {item.props.label}
                        </li>
                    );
                })}
            </TabsPanel>
            <TabsContainer>
                {props.children.map( (item:any, index:number) => {
                    return (
                        <div key={`tabscontainer-${index}`}>
                            <Accordion
                                role="tab"
                                id={`tab${index}`}
                                aria-controls={`panel${index}`}
                                tabIndex={0}
                                className={state.selected === index ? 'active' : ''}
                                onClick={ (e: any) => toggle(e, index) }
                                onKeyPress={ (e: any) => toggle(e, index) }
                            >
                                {item.props.label}
                            </Accordion>
                            <TabsWrapContent
                                role="tabpanel"
                                id={`panel${index}`}
                                aria-labelledby={`tab${index}`}
                                className={state.selected === index ? 'active' : ''}
                            >
                                {props.children[state.selected]}
                            </TabsWrapContent>
                        </div>
                    );
                })}
             </TabsContainer>
        </>
    );
}
export default Tabs;
