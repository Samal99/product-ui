import React from 'react'

function MyOrder() {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1 className="pagheader">
                    Orders
                </h1>

            </section>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box sellteble">
                                <div className="box-body table-responsive">
                                    <table className="table table-hover gap-separate">
                                        <tr>
                                            <th>SL NO</th>
                                            <th>&nbsp;</th>
                                            <th className="boxsize">ORDER ITEM</th>
                                            <th>ORDER ID</th>
                                            <th>ORDER AMOUNT</th>
                                            <th>DATE</th>
                                            <th style={{width:'90px'}}>STATUS</th>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td><img className=" img-responsive img-circle" src="./assets/img/sellitem.jpg" alt="sell item" /></td>
                                            <td className="boxsize">
                                                <h2>Noise Colorfit Icon 2 1.8''Display with...</h2>
                                                <p>Color: Jet Black  Size:1.8</p>
                                            </td>
                                            <td>987654G2</td>
                                            <td>₹1,199</td>
                                            <td>Oct 10, 2023</td>
                                            <td className="delivered">Delivered</td>
                                        </tr>
                                        <tr>
                                            <td>01</td>
                                            <td><img className=" img-responsive img-circle" src="./assets/img/sellitem.jpg" alt="sell item" /></td>
                                            <td className="boxsize">
                                                <h2>Noise Colorfit Icon 2 1.8''Display with...</h2>
                                                <p>Color: Jet Black  Size:1.8</p>
                                            </td>
                                            <td>987654G2</td>
                                            <td>₹1,199</td>
                                            <td>Oct 10, 2023</td>
                                            <td className="delivered">Delivered</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content container-fluid">
            </section>
        </div>
    )
}

export default MyOrder
