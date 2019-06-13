 /**
  *  @Title   表格columns
  *  @Auther  Stephen WU
  *  @Des     描述
  *  @Time    2019
  */
import React from 'react'
import { Divider, Tag  } from 'antd';
import moment from "moment";

const test = text => <span>{text}</span>

const tags = (tags, record) => (
    <span>
      {tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') {
          color = 'volcano';
        }
        return <Tag color={color} key={tag}>{tag.toUpperCase()}{record.key}</Tag>;
      })}
    </span>
  )

 const action = (text, record) => (
    <span>
        <a href="javascript:;">编辑</a>
        <Divider type="vertical" />
        <a href="javascript:;">删除</a>
    </span>
 )

 const pictrue = (text, record) => (
   <img src={text} style={{ width: '80px' }}/>
 )

 const formatdate = (text) => moment(text).format("YYYY-MM-DD");
 const formatTime = (text) => moment(text).format("YYYY-MM-DD HH:mm:ss");


export default {
  test,
  tags,
  pictrue,
  action,
  formatdate,
  formatTime
}