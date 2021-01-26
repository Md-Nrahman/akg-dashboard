import React from 'react';

const Addproduct = () => {
    return (
        <div>
            <div id="page-wrapper">
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Add New Product</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Product Management</a></li>
          <li className="active">Add New Product</li>
        </ol>
      </div>
      {/* /.breadcrumb */}
    </div>
    {/* .row */}
    <div className="row globalAlertInfoBoxConParentTT">
      {/* .globalAlertInfoBoxConTT start */}
      <div id="globalAlertInfoBoxConTT" className="col-md-12 globalAlertInfoBoxConTT" style={{display: 'none'}}>
        <div className="alert alert-primary alert-dismissable fade in" style={{borderLeft: '4px solid #4CAF50'}}>
          <a href="#" className="close closeTT" data-dismiss="alert" aria-label="close">×</a> 
          {/*                    <strong>Success!</strong> You should <a href="#" class="alert-link" style="color: #fff;">read this message</a>.*/}
          <strong />
        </div>
      </div>
      {/* .globalAlertInfoBoxConTT end */}
      <div className="col-md-12">
        <div className="white-box">
          <div className="row">
            <div className="col-md-6"> 
              {/*<form data-toggle="validator" class="form-horizontal">*/}
              <form data-toggle="validator" className="form-horizontal" name="productAdd" id="stockAdd" method="POST" action="productAddSubmitData.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E
&act=add" onsubmit="return dataValidate()">
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Product Code</label>
                  <div className="col-sm-9">
                    {/* onfocusout="productCodeCheckForNewProduct()" */}
                    {/* onkeypress="productCodeCheckForNewProduct()" */}
                    <input type="text" className="form-control input-sm" id="productCode" name="productCode" placeholder="Product Code" onkeypress="productCodeCheckForNewProduct()" required />
                    <div id="productCodeErr"><span id="productCodeCheckLoading" style={{display: 'none'}}><i className="fa fa-spin fa-spinner" /> Product code checking...</span></div>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3"> Name</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="productName" name="productName" placeholder="Product Name" required />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3"> Short Name</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="productShortName" name="productShortName" placeholder="Product Short Name" required />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Short Description</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="productShortDesc" name="productShortDesc" placeholder="Product Short Description" required />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Description</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="productDesc" name="productDesc" placeholder="Product Description" required />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Category</label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm" style={{height: 30}} id="categoryId" name="categoryId">
                      <option value>SELECT</option> <optgroup label="CG-101 | Cigrettee
">
                      </optgroup>  <optgroup label="BD-102 | Bidi
">
                      </optgroup>  <optgroup label="FB-103 | Match
">
                      </optgroup> 
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Product Size</label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm" style={{height: 30}} id="productSize" name="productSize">
                      <option value>SELECT</option> <option value={ 1
}> 1
                      </option> 
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3"> UoM</label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm" style={{height: 30}} id="productUoM1" name="productUoM1">
                      <option value>SELECT</option> <option value={ 1
}> STICK
                      </option>  <option value={ 2
}> EA
                      </option>  <option value={ 3
}> BOX
                      </option>  <option value={ 4
}> DOZEN
                      </option>  <option value={ 5
}> PAC
                      </option> 
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">XE UoM</label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm" style={{height: 30}} id="productUoM2" name="productUoM2">
                      <option value>SELECT</option> <option value={ 1
}> BOX 1 STICKS 1|1
                      </option>  <option value={ 2
}> BOX 1 STICKS 10|10
                      </option>  <option value={ 3
}> BOX 1 STICKS 20|20
                      </option>  <option value={ 4
}> BOX 1 STICKS 25|25
                      </option>  <option value={ 5
}> DOZEN 1 BOX 12|12
                      </option> 
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputEmail4" className="control-label col-sm-3">Grade</label>
                  <div className="col-sm-9">
                    <div className="form-check has-success">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" id="grade" name="grade" defaultValue={1} defaultChecked="checked" /> Default
                      </label>
                    </div>
                    <div className="form-check has-warning">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" id="grade" name="grade" defaultValue={2} /> A Grade
                      </label>
                    </div>
                    <div className="form-check has-danger">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" id="grade" name="grade" defaultValue={3} /> B Grade
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="control-label col-sm-3" />
                  <div className="col-sm-offset-3 col-sm-9">
                    <button type="submit" className="btn btn-info">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /.white-box */}
      </div>
    </div>
    {/* /.row */}
  </div>
  {/* /.container-fluid */}
  <footer className="footer text-center"> 2020 © Suffix IT Limited</footer>
</div>

        </div>
    );
};

export default Addproduct;