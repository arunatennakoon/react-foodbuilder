import React from 'react'; 
import Layout from './components/Layout/Layout'
import FoodBuilder from '../src/containers/FoodBuilder/FoodBuilder'

const App = () => {
  return (
    <div>
      <Layout>
        <FoodBuilder/>
      </Layout>
    </div>
  );
}

export default App;
