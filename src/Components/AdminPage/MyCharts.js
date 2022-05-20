import React from 'react';
import ReactDOM from 'react-dom';
import { 
  VictoryArea, 
  VictoryChart, 
  VictoryTheme, 
  VictoryAxis, 
  VictoryPie 
} from 'victory';
import { customerData } from '../../customerData';

export default function MyCharts() {
  const genderData = customerData.reduce((acc, customer) => {
    if (!acc[customer.gender]){
      acc[customer.gender] = 1;
    } else {
      acc[customer.gender]++;
    }
    return acc;
  }, []);
  const genderedData = Object.entries(genderData).map((gender) => {return { x: gender[0], y: gender[1] };});
  
  return (
    <div>
      <div className='charts'>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryArea data={[
            { x: 1, y: 2, y0: 0 },
            { x: 2, y: 3, y0: 1 },
            { x: 3, y: 5, y0: 1 },
            { x: 4, y: 4, y0: 2 },
            { x: 5, y: 6, y0: 2 }
          ]}
          />
          <VictoryAxis />
        </VictoryChart>
        <VictoryPie
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy', 'purple', 'gray', 'violet', 'green']}
          data={genderedData}
        />
      </div>
    </div>
  );
}
