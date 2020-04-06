import React from "react";
import { Row, Col } from 'antd';
import Search from '../Search';
import Flavers from '../Flavers';

const TopBar = props => {
    return (
        <Row style={{ padding: '0 3.125rem' }}>
            <Col span={6}>
                <Search />
            </Col>
            <Col span={18}>
                <Flavers />
            </Col>
        </Row>
    )
}

export default TopBar;