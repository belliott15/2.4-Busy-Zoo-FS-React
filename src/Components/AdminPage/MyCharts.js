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
import { languageData } from '../../LanguageData';

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

  const language = languageData.reduce((acc, language) => {
    if (!acc[language.primary_language]){
      acc[language.primary_language] = 1;
    } else {
      acc[language.primary_language]++;
    }
    return acc;
  });
  const linguisticsData = Object.entries(language).map(language => {return { x: language[0], y: language[1] };});
  
  return (
    <div>
      <div className='charts'>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryArea data={genderedData}
            horizontal={true}
          />
        </VictoryChart>
        <VictoryPie
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy', 'purple', 'gray', 'violet', 'green']}
          data={linguisticsData}
        />
      </div>
    </div>
  );
}
