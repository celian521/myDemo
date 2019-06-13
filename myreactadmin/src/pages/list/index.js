/**
 *  @Title   初始页
 *  @Auther  Stephen WU
 *  @Des     描述
 *  @Time    2019
 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Table, Button } from 'antd';
import { Link } from "react-router-dom";
import './index.scss'

import Tpl from './template'
import dataSource from './data'
import dataColumns from './columns'


@inject(({ globalStore }) => ({

}))


class welcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      filteredInfo: null,
      sortedInfo: null,
    };
  }
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  // clearFilters = () => {
  //   this.setState({ filteredInfo: null });
  // }
  //
  // clearAll = () => {
  //   this.setState({
  //     filteredInfo: null,
  //     sortedInfo: null,
  //   });
  // }
  //
  // setAgeSort = () => {
  //   this.setState({
  //     sortedInfo: {
  //       order: 'descend',
  //       columnKey: 'age',
  //     },
  //   });
  // }

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }

  columnsFun = () => {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const sortOrder = e => sortedInfo.columnKey === e && sortedInfo.order
    const createFun = strFun => new Function(`return ${strFun}`)()
    const columns = []
    dataColumns.map((item) => {
      const { title, dataIndex, key, renderFun = null, sorterFalg = false } = item
      const columnsItem = { title, dataIndex, key }
      if (renderFun) {
        // if(typeof(renderFun) === )
        columnsItem.render = Tpl[renderFun]
        // const Mycomponent = Tpl['DemoA']
        // columnsItem.render = (text, record) => <Mycomponent  name='Table custom 表格自定义' text={text} record={record} />
      }
      if (sorterFalg) {
        columnsItem.sorter = createFun(`(a, b) => a.${key} - b.${key}`)
        columnsItem.sortOrder = sortOrder(key)
      }
      columns.push(columnsItem)
    })
    return columns
  }

  render() {
    const { selectedRowKeys } = this.state;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };


    let data = dataSource|| []


    const Mycomponent = Tpl['DemoA']
    return (
      <div>
        <div className="table-operations">
          <Button onClick={ this.setAgeSort }>Sort age</Button>
          <Button onClick={ this.clearFilters }>Clear filters</Button>
          <Button onClick={ this.clearAll }>Clear filters and sorters</Button>
        </div>
        <Mycomponent name='Table custom 表格自定义' />
        <Table
          rowSelection={ rowSelection }
          dataSource={ data }
          columns={ this.columnsFun() }
          onChange={ this.handleChange }
          position = 'top'
        />
      </div>
    )
  }
}

export default welcomePage;
