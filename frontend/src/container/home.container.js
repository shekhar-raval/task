import React from 'react';
import { Row, Col, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import DataTable from '../components/table/Data-Table';
import FamilyModal from '../components/models/Add-Family';
import { FamilyActions } from '../redux/family/actions';
import { ModelActions } from '../redux/model/actions';

import './home.container.css';

const Home = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.family);
  const { show } = useSelector(state => state.model)

  const { addFamily } = FamilyActions;
  const { hideModel, showModel } = ModelActions;

  const handleCancel = () => dispatch(hideModel()); 
  
  const handleOk = (values)=> {
    dispatch(addFamily(values.user));
  };
  
  const handleDelete = () => {}
  return (
    <div className="m-20">
      <Row>
        <Col offset={4} span={12}>
          <h3>List of Families</h3>
        </Col>
        <Col span={4}>
          <Button type="primary" onClick={() => dispatch(showModel())}>Add Family</Button>
        </Col>
      </Row>
      <Row>
        <Col offset={4} span={12}>
          <DataTable loading={loading} dataSource={[]} handleDelete={handleDelete}/>
        </Col>
      </Row>
      { show &&  (
          <FamilyModal 
            visible={show} 
            handleCancel={handleCancel}
            confirmLoading={loading}
            handleOk={handleOk}/>
      )}
    </div>
  )
}

export default Home;

