import React from "react";
import { Row, Col } from 'antd';
import { Form, Button } from 'antd';

const BottomBar = props => (
    <Row style={{ padding: '1.5rem 3.125rem', borderTop: '2px solid #f2f2f2' }}>
        <Col span={24} style={{ textAlign: 'right' }}>
            <Form
                name="basic"
                initialValues={{ remember: true }} >
                <Form.Item
                    style={{ padding: '0', margin: '0' }}
                    rules={[{ required: true, message: 'Please enter your search query!' }]} >
                    <Button ref={React.createRef()} style={{ marginRight: '1rem', borderRadius: '0.25rem' }}>Cancel</Button>
                    <Button ref={React.createRef()} style={{ borderRadius: '0.25rem' }} type="primary" disabled>Save</Button>
                </Form.Item>
            </Form>
        </Col>
    </Row>
);

export default BottomBar;