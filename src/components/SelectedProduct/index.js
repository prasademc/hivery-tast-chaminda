import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Revenue from '../../utils/revenue';

const SelectedProduct = props => {
    return (
        props.selectedProducts.map(selectedProduct => (
            <Row key={selectedProduct.product_code}>
                <Col span={24}>
                    <Product onClick={props.showUpdatedProducts}>
                        <div style={{ width: '32px' }}>
                            <img alt={selectedProduct.product_name} width="32px" src={`https://cdn.vendinganalytics.com/reyes-ccb/tb/${selectedProduct.product_code}.png`} />
                        </div>
                        <div style={{ width: 'calc(100% - 32px)', marginLeft: '1.5rem' }}>
                            <h4 style={{ marginBottom: '0' }}>{selectedProduct.product_name}</h4>
                            <SPAN style={{ display: 'block', marginBottom: '0.75rem', color: '#989a9e' }}>{selectedProduct.product_code}</SPAN>
                            <UL>
                                <LI>
                                    <SPAN>Price:</SPAN>${selectedProduct.price * 0.01}
                                </LI>
                                <LI>
                                    <SPAN>Vends:</SPAN>{selectedProduct.vends}
                                </LI>
                                <LI>
                                    <SPAN>Revenue:</SPAN>${Revenue(selectedProduct.average_sales, selectedProduct.price)}
                                </LI>
                                <LI>
                                    <SPAN>Cols:</SPAN>{selectedProduct.cols}
                                </LI>
                            </UL>
                        </div>
                    </Product>
                </Col>
            </Row>
        ))
    )
};

const Product = styled.a`
    color: #333333;
    margin-right: 1rem;
    padding: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-top;
    border-bottom: 1px solid #eeeeee;

    &:hover {
        color: #333333;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08);
    }
`;

const UL = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const LI = styled.li`
    font-weight: bold;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

const SPAN  = styled.span `
    display: block;
    min-width: 100px;
`;

export default SelectedProduct;