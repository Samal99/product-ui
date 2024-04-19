import React from 'react'

function MySellList() {
  return (
    <div class="content-wrapper">
      <section class="content-header">
        <h1 class="pagheader">
          My Sell Lists
        </h1>


      </section>
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="box sellteble">
                <div class="box-body table-responsive">
                  <table class="table table-hover gap-separate">
                    <tr>
                      <th>SL NO</th>
                      <th>&nbsp;</th>
                      <th class="boxsize">SELL ITEM</th>
                      <th>SELL DATE</th>
                      <th>USER ID</th>
                      <th>CITY</th>
                      <th>SELL AMOUNT</th>
                      <th>STATUS</th>
                      <th style={{width:'110px'}}>DOWNLOAD</th>
                    </tr>
                    <tr>
                      <td>183</td>
                      <td><img class=" img-responsive img-circle" src="./assets/img/sellitem.jpg" alt="sell item" /></td>
                      <td class="boxsize">
                        <h2>Noise Colorfit Icon 2 1.8''Display with...</h2>
                        <p>Color: Jet Black  Size:1.8</p>
                      </td>
                      <td>Oct 10, 2023</td>
                      <td>987654G2</td>
                      <td>Kolkata</td>
                      <td>₹1,199</td>
                      <td class="delivered">Delivered</td>
                      <td><button type="button" class="btn bg-olive">Download</button></td>
                    </tr>
                    <tr>
                      <td>183</td>
                      <td><img class=" img-responsive img-circle" src="./assets/img/sellitem.jpg" alt="sell item" /></td>
                      <td class="boxsize">
                        <h2>Noise Colorfit Icon 2 1.8''Display with...</h2>
                        <p>Color: Jet Black  Size:1.8</p>
                      </td>
                      <td>Oct 10, 2023</td>
                      <td>987654G2</td>
                      <td>Kolkata</td>
                      <td>₹1,199</td>
                      <td class="delivered">Delivered</td>
                      <td><button type="button" class="btn bg-olive">Download</button></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content container-fluid">


      </section>
    </div>
  )
}

export default MySellList
