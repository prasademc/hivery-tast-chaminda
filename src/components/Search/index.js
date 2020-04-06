import React from "react";
import { Form, Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const Search = props => (
    <Form
        style={{ padding: '1.5rem  0  0  0' }}
        name="basic"
        initialValues={{ remember: true }} >
        <Form.Item
            rules={[{ required: true, message: 'Please enter your search query!' }]} >
            <Input
                placeholder="Search"
                suffix={<QuestionCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />} />
        </Form.Item>
    </Form>
)

export default Search;