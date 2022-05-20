import React from 'react';
// import ReactDOM from 'react-dom';
import { 
  VictoryArea, 
  VictoryChart, 
  VictoryTheme, 
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
  }, []);
  const linguisticsData = Object.entries(language).map(language => {return { x: language[0], y: language[1] };});
  return (
    <div>
      <div className='charts'>
        <VictoryChart
          theme={VictoryTheme.material}
        >
          <VictoryArea data={genderedData}
            horizontal={true}
            style={{ data: { fill: '#5F465C' } }}
          />
        </VictoryChart>
        <VictoryPie
          colorScale={['#393E60', '#5F465C', '#AA98A9', 'black', 'navy', 'purple', 'indigo', '#8A626B', 'lavender']}
          data={linguisticsData}
        />
      </div>
    </div>
  );
}
