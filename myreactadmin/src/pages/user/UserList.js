import React, { Component } from 'react';
import { Table, Divider, Tag, Pagination } from 'antd';
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
        })}
      </span>
    ),
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }];

  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }];

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
     onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
      }
    render() {
        return (
            <>
                <h1>用户</h1>
                <Table columns={columns} dataSource={data} />
                <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
            </>
        );
    }
}

export default UserList;
