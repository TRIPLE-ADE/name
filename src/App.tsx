import { Layout, Header, Pipeline } from "./components";
import { PipelineData } from "./types/Pipeline";


function App() {

  const pipelines: PipelineData[] = [
    { from: 'State A', to: 'State B', condition: 'green' },
    { from: 'State B', to: 'State C', condition: 'yellow' },
    { from: 'State C', to: 'State D', condition: 'red' },
    { from: 'State D', to: 'State E', condition: 'green' },
    { from: 'State E', to: 'State F', condition: 'yellow' },
    { from: 'State F', to: 'State G', condition: 'green' },
    { from: 'State G', to: 'State H', condition: 'yellow' },
    { from: 'State H', to: 'State I', condition: 'green' },
    { from: 'State I', to: 'State J', condition: 'yellow' },
    { from: 'State J', to: 'State L', condition: 'red' },
    { from: 'State C', to: 'State F', condition: 'red' },
    { from: 'State G', to: 'State J', condition: 'red' },
];

  

  return (
    <Layout>
      <Header />
      {/* <Hero /> */}
      <Pipeline pipelines={pipelines} />
    </Layout>
  );
}

export default App;
