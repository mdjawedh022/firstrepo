import React from "react";
import { FaClipboard } from "react-icons/fa";
import { ComponentWrapper, VariantWrapper } from "./App.styled";
import { Avatar } from "./components/Avatar";
import { Button } from "./components/Button";
import { Pagination } from "./components/Pagination";

function App() {
  const [pages, setpages] = React.useState<number>(1);

  const updateCurrentPage = (val: number): void => {
    // let value = val + page;
    setpages(val);
  };

  const label ="Pagination"




  return (
    <div className="App">
      {/* Different Buttons */}
      <ComponentWrapper>
        <h3>Buttons</h3>
        <VariantWrapper>
          <h4>Variants</h4>
          <Button variant="primary">Hello</Button>
          <Button variant="secondary">Hello</Button>
        </VariantWrapper>
        <br />
        <VariantWrapper>
          <h4>Disabled</h4>
          <Button variant="primary" disabled={true}>
            Hello
          </Button>
          <Button variant="secondary" disabled={true}>
            Hello
          </Button>
        </VariantWrapper>
        <br />
        <VariantWrapper>
          <h4>Sizes</h4>
          <Button size="xs">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="md">Hello</Button>
          <Button size="lg">Hello</Button>
        </VariantWrapper>
        <VariantWrapper>
          <h4>Icons</h4>
          <Button rightIcon={<FaClipboard />}>Copy</Button>
          <Button leftIcon={<FaClipboard />}>Copy</Button>
          <Button size="lg" rightIcon={<FaClipboard />}>
            Copy
          </Button>
          <Button size="lg" leftIcon={<FaClipboard />}>
            Copy
          </Button>
        </VariantWrapper>
        <VariantWrapper>
          <Button onClick={() => console.log("button Clicked")}>
            Click me!
          </Button>
        </VariantWrapper>
      </ComponentWrapper>

      <ComponentWrapper>
        <h3>Avatars</h3>
        <VariantWrapper>
          <h4>Variants</h4>
          <Avatar name="Kola Tioluwani" />
          <Avatar name="Kola Tioluwani" src="https://bit.ly/sage-adebayo" />
        </VariantWrapper>
        <VariantWrapper>
          <h4>Sizes</h4>
          <Avatar size="xs" name="Anand Kulkarni" />
          <Avatar size="sm" name="Baburoa" />
          <Avatar size="md" name="Albert S" />
          <Avatar size="lg" name="Ritesh Firodiya" />
        </VariantWrapper>
      </ComponentWrapper>

      <Pagination  
        count = {10} 
        currentPage = {pages}
        updateCurrentPage ={updateCurrentPage}
        
      />
    </div>
  );
}

export default App;
