import React from "react";
import { StyledStatistics } from "./StyledStatistics";
import {Doughnut, Bar} from 'react-chartjs-2';
import {useQuery} from '@apollo/client';
import {GET_ORDERS_QUANTITY,GET_ORDERS} from '../../graphql/queries';
import Loader from "../Loader";

const Statistics = () => {

  const {data: dataQuantity,loading: loadingQuantity, error: errorQuantity} = useQuery(GET_ORDERS_QUANTITY, {
    variables: {
      state: ""
  }}); 

  const {data: dataOrders, loading,error} = useQuery(GET_ORDERS, {
    variables: {
      state: "paid", orderId:"all" 
  }});

  if(loadingQuantity || loading) return <Loader/>
  if(errorQuantity || error) return <span>ERROR: {errorQuantity.message}</span>

  const {reserved,rejected,paid,finished} = dataQuantity.orderQuantity;
  const {viewOrders} = dataOrders;

  

  return (
    <StyledStatistics>
      <div>
        <Bar
          data={{
            labels: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
            datasets:[
              {
                label: 'Sales of the week',
                data: [paid],
                backgroundColor: [
                  'rgba(255, 206, 86, 0.75)',
                  'rgba(255, 99, 132, 0.75)',
                  'rgba(75, 192, 192, 0.75)',
                  'rgba(54, 162, 235, 0.75)',
                ],
                hoverBackgroundColor: [
                  'rgba(255, 206, 86, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(54, 162, 235, 1)',
                ],
              }
            ],
          }}
        />
        <Doughnut 
        data={{
          labels: ['reserved','rejected','finished','paid'],
          datasets:[
            {
              label: 'orders status',
              data: [reserved,rejected,finished,paid],
              backgroundColor: [
                'rgba(255, 206, 86, 0.75)',
                'rgba(255, 99, 132, 0.75)',
                'rgba(75, 192, 192, 0.75)',
                'rgba(54, 162, 235, 0.75)',
              ],
              hoverBackgroundColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
              ],
            }
          ],
        }}
        width={300}
        height={250}
        // options={{ maintainAspectRatio: false }}
        /> 
      </div>
    </StyledStatistics>
  );
};

export default Statistics;
