import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from 'material-table';
import { customerData } from '../../customerData';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%', fontSize: 15 }}>
      <MaterialTable
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
          { title: 'E-mail', field: 'email' },
          { title: 'Gender', field: 'gender' },
          { title: 'Avatar', field: 'avatar' }
        ]}
        data={customerData}
        title="Customer Data"
      />
    </div>
  );
}
