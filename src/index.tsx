import React, {useContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './theme/globalStyle';
import Hero from './components/Hero/';
import Tabs from './components/Tabs/';
import TabItem from './components/TabItem/';
import TabsContext from "./state/TabsContext";
import ProvincesContext from "./state/ProvincesContext";

interface TabsProps {
    firstSelect: number;
}

interface TabItemProps {
    name: string;
    content: string;
}

const App = (props: TabsProps) => {
    const { tabs } = useContext(TabsContext);
    const { provinces } = useContext(ProvincesContext);
    const [item, setItem] = useState(provinces[0].name);
    return (
        <>
            <GlobalStyle />
            <Hero item={item} setItem={setItem}/>

            <Tabs selected={props.firstSelect || 0}>
                {tabs.map((tab:TabItemProps, index:number) =>
                    <TabItem label={tab.name} key={index}>
                        <h2>{item}</h2>
                        {tab.content}
                    </TabItem>
                )}
            </Tabs>
        </>
    );
};


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App firstSelect={1} />
    </React.StrictMode>
);
