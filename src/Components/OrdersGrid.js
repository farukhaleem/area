import React, {useEffect, useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { getOrderDetails } from './../Services/getOrdersService';

export default function OrdersGrid() {

  let [order, setOrder] = useState([]);
  useEffect(() => {

      async function fetchData() {
        const questions = await getOrderDetails(localStorage.getItem('id'), localStorage.getItem('token'));
        setOrder(questions);
        console.log(questions);
      }
      fetchData();
    }, [])

  const columns = [
    { field: 'date', headerName: 'Date', width:200, },
    { field: 'id', headerName: 'Order ID', width:200, },
    { field: 'topic', headerName: 'Topic', width:400, },
    { field: 'paperType', headerName: 'Paper Type', width:200, },
    { field: 'order_status', headerName: 'Order Status', width:200, },
    { field: 'totalPayment', headerName: 'Total Payment', width:200, },
    { field: 'paid', headerName: 'Paid', width:200, },
    { field: 'payNow', headerName: 'Pay Now', width:200, },
  ];

  const rows = order.map((orderItem)=>{
    
    
    return{
        date : orderItem.date,
        id : orderItem.order_code+orderItem.order_id,
        paperType : orderItem.paper_type_caption,
        topic : orderItem.topic ,
        order_status : orderItem.order_status,
        totalPayment : orderItem.total_payment+' '+orderItem.currency_code,
        paid : orderItem.total_paid+' '+orderItem.currency_code,
        payNow : orderItem.remaining+' '+orderItem.currency_code,
    };
  })



  return (
    <div style={{ height: 400, width: 'auto', background: '#fff' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
}
