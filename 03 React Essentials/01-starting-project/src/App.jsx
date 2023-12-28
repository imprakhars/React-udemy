import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';


function App() {

  const [selectedTopic, setSelectedTopic] = useState('');

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = <p>Select a Button</p>;
  if(selectedTopic){
    tabContent = (<div id='tab-content'>
    <h3>{ EXAMPLES[selectedTopic].title }</h3> {/*for displaying title */}
    <p>{ EXAMPLES[selectedTopic].description }</p>   {/*for displaying description */}
    <pre>     {/*pre tag for displaying code in the CORE_CONCEPTS code property */}
      <code>
        { EXAMPLES[selectedTopic].code }
      </code>
    </pre>
  </div>)
  }
  
  return (
    <div>
      {/*<Header />*/}
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/*<CoreConcept 
              title = {CORE_CONCEPTS[0].title}
              description = {CORE_CONCEPTS[0].description}
              image = {CORE_CONCEPTS[0].image}
            />
            <CoreConcept 
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept 
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept 
              {...CORE_CONCEPTS[3]}
  /> */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key = {conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect = {() => handleClick("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect = {() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect = {() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect = {() => handleClick("state")}>State</TabButton>
            {/*OR
            <TabButton label='Components' />
            and destructured it in component function
            */}
          </menu>
          { tabContent }
          
        </section>
      </main>
    </div>
  );
}

export default App;
