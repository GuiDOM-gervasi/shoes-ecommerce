import React from "react";
import { StyledStatistics } from "./StyledStatistics";
import {Bar} from 'react-chartjs-2';

const Statistics = () => {
  return (
    <StyledStatistics>
      <div>
        <Bar/>
        {/* <Bar 
        data={{
          label: ['reserved','rejected','finished','paid'],
          datasets:[
            {
              label: 'orders status',
              data: [20,3,15,14]
            }
          ]
        }}
        width={30}
        height={25}
        /> */}
      </div>
    </StyledStatistics>
  );
};

export default Statistics;
