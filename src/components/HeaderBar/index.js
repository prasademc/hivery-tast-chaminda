import React from "react";
import { Row, Col } from 'antd';

const HeaderBar = props =>  (
    <Row style={{ backgroundColor: '#e4e6ea', padding: '0 3.125rem' }}>
        <Col span={6} style={{ borderRight: '1px solid #d2d2d4' }}>
            <Row style={{ backgroundColor: '#e4e6ea' }}>
                <Col style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>
                    Selected Products
                </Col>
            </Row>
        </Col>
        <Col span={18}>
            <Row style={{ backgroundColor: '#e4e6ea' }}>
                <Col span={12} style={{ padding: '0.75rem 0 0.75rem 2rem', fontWeight: 'bold' }}>
                    Product
                </Col>
                <Col span={3} style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>
                    Price
                </Col>
                <Col span={3} style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>
                    Vends
                </Col>
                <Col span={3} style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>
                    Revenue
                </Col>
                <Col span={3} style={{ padding: '0.75rem 0', fontWeight: 'bold' }}>
                    Net Gain
                </Col>
            </Row>
        </Col>
    </Row>
);

export default HeaderBar; 