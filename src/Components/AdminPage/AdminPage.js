import React from 'react';
import MyCharts from './MyCharts';
import MyTable from './MyTable';

export default function AdminPage() {
  return (
    <div>
      <MyTable />
      <MyCharts />
    </div>
  );
}
