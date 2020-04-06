import React from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

const ProductDetails = props => {
    return (
        <Col span={24} style={{ padding: '2rem 0 1rem 0', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Content>
                <Heading>Added Product</Heading>
                <Heading>Replaced Product(s)</Heading>
                <Heading>Cannibalised Product(s)</Heading>
            </Content>
            <Graph>
                <APR style={{ width: props.addedProductRevenue * 2 + '%' }}>
                    <SPAN>
                    +${props.addedProductRevenue}
                    </SPAN>
                </APR>
                <RPR style={{ width: props.replacedProductRevenue * 2 + '%', left: (props.addedProductRevenue - props.replacedProductRevenue)* 2 + '%' }}>
                    <SPAN>
                    +${props.replacedProductRevenue}
                    </SPAN>
                </RPR>
                {/* <RPR style={{ width: '100px' }}>
                    {props.products.reduce((a, b) => ({revenue: a.revenue + b.revenue}))}
                    {props.products.map(product => {
                        return <div>{product.revenue}</div>
                    })}
                </RPR> */}
                <Space title="10"></Space>
                <Space title="20"></Space>
                <Space title="30"></Space>
                <Space title="40"></Space>
                <Space title="50"></Space>
            </Graph>
        </Col>
    )
}

const Content  = styled.div `
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

const Graph  = styled.div `
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    position: relative;
    flex: wrap;
    border-left: 2px solid #f2f2f2;
`;

const Space  = styled.div `
    flex: 0 0 20%;
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    position: relative;
    border-right: 2px dashed #f2f2f2;

    &:after {
        content: attr(title);
        position: absolute;
        top: -14px;
        right: -10px;
    }

    &:before {
        content: "0";
        position: absolute;
        top: -14px;
        left: -1px;
    }
`;

const Heading  = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0.75rem 0.75rem 0.75rem 0;
    position: relative;
    text-align: right;

    &:after {
        content: "-";
        position: absolute;
        top: 25%;
        right: 0px;
    }
`;

const APR  = styled.div `
    background-color: #82cc1e;
    width: auto;
    height: 1.5rem;
    left: 0;
    top: 0.75rem;
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
`;

const RPR  = styled.div `
    background-color: #f55d3e;
    width: auto;
    height: 1.5rem;
    left: 0;
    top: 3.625rem;
    margin: 0;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
`;

const SPAN  = styled.span `
    color: #ffffff;
    padding: 0 0.25rem;
    line-height: 1;
`;

export default ProductDetails;