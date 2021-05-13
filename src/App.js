import './App.css';
import Navbar from './Components/Navbar/NaviBar';
import TableSect from './Components/Section2(Table)/TableSect';
import Section3 from './Components/Section3/Section3';
import Heading1 from './Components/Headings/Heading1';
import Heading2 from './Components/Headings/Heading2';
import Section5 from './Components/Section 5/Section5';
import Section6 from './Components/Section 6/Section6';
import Heading3 from './Components/Headings/Heading3';
import Section7 from './Components/Section7/Section7';



function App() {
    return(
        <div className="App">
        <Navbar/>
        <TableSect/>
        <Section3/>
        <Heading1/>
        <Heading2/>
        <Section5/>
        <Section6/>
        <Heading3/>
        <Section7/>
        </div>
        
    )
  
}

export default App;
