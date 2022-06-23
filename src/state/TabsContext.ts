import { createContext } from "react";


type TabProps = {
    name: string,
    content: string,
}

type TabsContextProps = {
    tabs: TabProps[]
}

// this data can be api call or contenful cms
const tabsContextList: TabsContextProps = {
    tabs: [
        {
            name: 'Tab 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a fermentum lorem, in placerat nulla. Nulla nec tellus tristique, faucibus arcu sed, mattis tortor. Etiam varius, justo quis interdum faucibus, dui nulla volutpat purus, et varius leo orci non tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras risus lorem, aliquam sit amet efficitur sed, consequat vel nisl. Nulla ut magna quis metus dictum pulvinar at eget massa.',
        },
        {
            name: 'Tab 2',
            content: 'Vestibulum interdum lectus eu ex euismod, ullamcorper maximus lacus tincidunt. Aenean et eros fringilla, rutrum turpis vel, viverra nisi. Integer dictum vulputate felis nec consectetur. Nunc in blandit quam. Curabitur id elementum dui.'
        },
        {
            name: 'Tab 3',
            content: 'Duis viverra condimentum leo quis posuere. Nulla at massa vulputate, tempus massa eu, rhoncus nunc. Mauris malesuada accumsan purus, ut condimentum neque sagittis ac. Vestibulum vel nibh turpis.'
        }
    ]
};
const tabsContext = createContext(tabsContextList);

export default  tabsContext;