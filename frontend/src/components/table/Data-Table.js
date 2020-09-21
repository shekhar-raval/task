import React from 'react';
import { Popconfirm, Table } from 'antd';

const DataTable = (props) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id', 
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Total members',
      dataIndex: 'members',
      key: 'members',
    },
    {
      title: 'Action',
      dataIndex: 'delete',
      key: '_id',
      render: (text, record) =>
        props.dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => props.handleDelete(record.key)}>
            <span>Delete</span>
          </Popconfirm>
        ) : null,
    }
  ]
  return (
    <Table columns={columns} dataSource={props.data} loading={props.loading} />
  )
}
export default DataTable;
