import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Revenue from '../../utils/revenue';
import NetGain from '../../utils/netGain';
import { CheckCircleTwoTone } from '@ant-design/icons';
import ProductDetail from '../ProductDetails';
import './style.css';


class UpdatedProducts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDetails: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState((prevState) => {
            return { showDetails: !prevState.showDetails }
        });
    }
    
    render() {
        let activeClasses = (this.state.showDetails ? ' active': '');

        return (
            this.props.updatedProducts.map(updatedProduct => (
                <Row style={{ borderBottom: '1px solid #d2d2d4' }} key={updatedProduct.product_code} onClick={this.handleClick}>
                    <Col span={12} style={{ borderLeft: '8px solid #82cc1e', paddingLeft: '2rem', display: 'flex', flexDirection: 'row', flex: 'wrap' }}>
                        <Image>
                            <img alt={updatedProduct.product_name} width="12px" height="auto" src={`https://cdn.vendinganalytics.com/reyes-ccb/tb/${updatedProduct.product_code}.png`} />
                        </Image>
                        <Wrapper>
                            <h4 style={{ marginBottom: '0' }}>{updatedProduct.product_name}</h4>
                            <SPAN>{updatedProduct.product_code}</SPAN>
                        </Wrapper>
                        {this.props.selectedProducts.map((selectedProdct) =>
                            selectedProdct.product_code === updatedProduct.product_code ?
                                <Icon key={selectedProdct.product_code}>
                                    <CheckCircleTwoTone />
                                </Icon>
                                : null
                        )}
                    </Col>
                    <Col span={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '0.5rem' }}>
                        ${updatedProduct.price * 0.01}
                    </Col>
                    <Col span={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '0.5rem' }}>
                        {updatedProduct.vends}
                    </Col>
                    <Col span={3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '0.5rem' }}>
                        ${Revenue(updatedProduct.average_sales, updatedProduct.price)}
                    </Col>
                    <Col span={3} style={{ color: '#82cc1e', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '0.5rem' }}>
                        +${updatedProduct.cannibalised ? 
                            (Math.round(NetGain(Revenue(updatedProduct.average_sales, updatedProduct.price), 2.3, updatedProduct.cannibalised.products) * 100) / 100).toFixed(2)
                            :  null
                        }
                    </Col>
                    {updatedProduct.cannibalised ? 
                        <Row className={`product-details ${activeClasses}`} style={{ cursor: 'pointer', overflow: 'hidden', width: '100%', backgroundColor: '#ffffff', borderTop: '1px solid #d2d2d4' }}>
                            <ProductDetail
                                addedProductRevenue = {updatedProduct.cannibalised.addedProductRevenue} 
                                replacedProductRevenue = {updatedProduct.cannibalised.replacedProductRevenue} 
                                products = {updatedProduct.cannibalised.products} />
                        </Row>
                    : null}
                </Row>
            ))
        )
    }
};

const SPAN  = styled.span `
    display: block;
    min-width: 100px;
    margin: 0;
    color: #989a9e;
`;

const Wrapper  = styled.div `
    flex: 0 0 calc(100% - 78px);
    display: flex;
    flex-direction: column;
    margin: 0 0 0 1rem;
    padding: 0.5rem 0;
`;

const Image  = styled.div `
    flex: 0 0 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0.5rem 0;
    align-self: flex-end;
`;

const Icon  = styled.div `
    flex: 0 0 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0.5rem 0;
`;

export default UpdatedProducts;