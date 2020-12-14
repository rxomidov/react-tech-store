import React from 'react';

export default function CartColumns(props) {
    return (
        <div className="container-fluid text-center d-none
        d-lg-block my-5">
            <div className="row">
                {/*singlecolumn*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">products</p>
                </div>
                {/*singlecolumn*/}
                {/*singlecolumn*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">name of products</p>
                </div>
                {/*singlecolumn*/}
                {/*singlecolumn*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">price</p>
                </div>
                {/*singlecolumn*/}
                {/*singlecolumn*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div>
                {/*singlecolumn*/}
                {/*singlecolumn*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div>
                {/*singlecolumn*/}
                {/*singlecolumn*/}
                <div className="col-lg-2">
                    <p className="text-uppercase">total</p>
                </div>
                {/*singlecolumn*/}
            </div>
        </div>
    );
}
