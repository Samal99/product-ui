import React from 'react'

function MyWallet() {
  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1 className="pagheader">
          My Wallet
        </h1>

      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row welletmar">
            <div className="col-md-4 offset-md-4">
              <div className="totalbal">
                <div className="rounded-sec"><i className="fa-solid fa-wallet"></i></div>
                <p>Total Balance</p>
                <h5>Rs. 25,000.00</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="totalbal erningview" style={{background: '#35a3e9'}}>
                <div className="rounded-sec" style={{background:'#35a3e9', padding:'25px'}}><i className="fa-solid fa-sack-dollar" style={{color:'#ffffff'}}></i></div>
                <div className="earningsecbox">
                  <p>Earnings</p>
                  <h5>Rs. 25,000.00</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="totalbal erningview" style={{background:'#ff0303'}}>
                <div className="rounded-sec" style={{background:'#ff0303' , padding: '25px' }}><i className="fa-solid fa-money-bill-1" style={{color:'#ffffff'}}></i></div>
                <div className="earningsecbox">
                  <p>Withdrawals</p>
                  <h5>Rs. 25,000.00</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="totalbal erningview" style={{background:'#7bbe13'}}>
                <div className="rounded-sec" style={{background:'#7bbe13', padding:'25px'}}><i className="fa-solid fa-coins" style={{color:'#ffffff'}}></i></div>
                <div className="earningsecbox">
                  <p>Deposits</p>
                  <h5>Rs. 25,000.00</h5>
                </div>
              </div>
            </div>
          </div>
         </div> 
      </section>


      <section className="content transationdeatils">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h2>Transactions Details</h2>
              <div className="tabset">
                <input type="radio" name="tabset" id="tab1" aria-controls="Earnings" checked />
                <label for="tab1">Earnings</label>
                <input type="radio" name="tabset" id="tab2" aria-controls="Withdrawals" />
                <label for="tab2">Withdrawals</label>
                <input type="radio" name="tabset" id="tab3" aria-controls="Deposits" />
                <label for="tab3">Deposits</label>

                <div className="tab-panels">
                  <section id="Earnings" className="tab-panel">
                    <div className="box sellteble">
                      <div className="table-responsive">
                        <table className="table table-hover gap-separate">
                          <tr>
                            <th>SL NO</th>
                            <th>SELL DATE</th>
                            <th>USER ID</th>
                            <th style={{width:'110px'}}>DOWNLOAD</th>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>Oct 10, 2023</td>
                            <td>987654G2</td>
                            <td><button type="button" className="btn bg-olive">Download</button></td>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>Oct 10, 2023</td>
                            <td>987654G2</td>
                            <td><button type="button" className="btn bg-olive">Download</button></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </section>
                  <section id="Withdrawals" className="tab-panel">
                    <div className="box sellteble">
                      <div className="table-responsive">
                        <table className="table table-hover gap-separate">
                          <tr>
                            <th>SL NO</th>
                            <th>SELL DATE</th>
                            <th>USER ID</th>
                            <th style={{width:'110px'}}>DOWNLOAD</th>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>Oct 10, 2023</td>
                            <td>987654G2</td>
                            <td><button type="button" className="btn btn-warning">Download</button></td>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>Oct 10, 2023</td>
                            <td>987654G2</td>
                            <td><button type="button" className="btn btn-warning">Download</button></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </section>
                  <section id="Deposits" className="tab-panel">
                    <div className="box sellteble">
                      <div className="table-responsive">
                        <table className="table table-hover gap-separate">
                          <tr>
                            <th>SL NO</th>
                            <th>SELL DATE</th>
                            <th>USER ID</th>
                            <th style={{width:'110px'}}>DOWNLOAD</th>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>Oct 10, 2023</td>
                            <td>987654G2</td>
                            <td><button type="button" className="btn bg-blue">Download</button></td>
                          </tr>
                          <tr>
                            <td>183</td>
                            <td>Oct 10, 2023</td>
                            <td>987654G2</td>
                            <td><button type="button" className="btn bg-blue">Download</button></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </section>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default MyWallet
