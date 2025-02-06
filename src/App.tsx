import SomeHeading from "./someHeading"
import Section from './Section';

function App() {


  return (
    <Section level={1}>
    <SomeHeading/>
    <SomeHeading/>
    
    <Section level={3}>
    <SomeHeading/>
    <SomeHeading/>
    </Section>
    <Section level={1}>
    <SomeHeading/>
    <SomeHeading/>
    </Section>
    </Section>
  )
}

export default App

