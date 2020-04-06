import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SelectedProduct from '../../components/SelectedProduct';
import UpdatedProduct from '../../components/UpdatedProduct';

class Products extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            isEmptyState: true,
            selectedProducts: [],
            updatedProducts: []
        }
    }

    componentDidMount() {
        fetch(`data/products.json`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            })
            .then((response) => response.json())
            .then((data) => this.setState({
                selectedProducts: data.currentProducts,
                updatedProducts: data.productUpdateData
            }));
    }

    _showUpdatedProductsHandler = () => {
        this.setState({
            ...this.state,
            isEmptyState: false,
            isShowAllProductsState: true
        })
    }

    render() {
        return (
            <Row style={{ padding: '0 3.125rem' }}>
                <Col span={6} style={{ borderRight: '1px solid #d2d2d4' }}>
                    <SelectedProduct selectedProducts={this.state.selectedProducts} showUpdatedProducts={this._showUpdatedProductsHandler} />
                </Col>
                <Col span={18}>
                    {this.state.isShowAllProductsState && <UpdatedProduct updatedProducts={this.state.updatedProducts} selectedProducts={this.state.selectedProducts}/>}
                </Col>
            </Row>
        )
    }
}

export default  Products;