import React from 'react';

const Addcustomer = () => {
    return (
        <div>
           <div id="page-wrapper">
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Add Outlet</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Outlet Management</a></li>
          <li className="active">Add Outlet</li>
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
            <div className="col-md-8 mx-auto"> 
              {/*<form data-toggle="validator" class="form-horizontal">*/}
              <form data-toggle="validator" className="form-horizontal" name="customerAdd" id="customerAdd" method="POST" action="customerSubmitData.jsp?sessionid=39979F1B09715C4C08EB71B428BBFD15
&act=add" onsubmit="return dataValidate()">
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Consumer Type<font color="red">*</font></label>
                  <div className="col-sm-9">                                        
                    <select className="form-control" id="consumerType" name="consumerType">
                      <option value>Select Type</option> 
                      <option value={1}>RA</option> 
                      <option value={2}>RB</option> 
                      <option value={3}>RC</option> 
                      <option value={4}>RD</option>
                      <option value={5}>WA</option>
                      <option value={6}>WB</option>
                      <option value={7}>WC</option>
                    </select>
                    <div id="consumerTypeErr" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3"> Name<font color="red">*</font></label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="consumerName" name="consumerName" placeholder="Consumer Name" required />
                    <div id="consumerNameErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Cluster<font color="red">*</font></label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="addressLine1" name="addressLine1" placeholder="Cluster" required />
                    <div id="addressLine1Err" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Address Line2</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="addressLine2" name="addressLine2" placeholder="Address Line2" />
                    <div id="addressLine2Err" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Thana<font color="red">*</font></label>
                  <div className="col-sm-9">
                    <select className="form-control input-sm customInput-sm chosen-select" style={{height: 30}} id="thanaId" name="thanaId">
                      <option value>SELECT</option> <option value={ 256
 }> Abhaynagar Upazila
                      </option>  <option value={ 180
 }> Adamdighi Upazila
                      </option>  <option value={ 146
 }> Aditmari Upazila
                      </option>  <option value={ 46
 }> Agailjhara Upazila
                      </option>  <option value={ 1
 }> Ajmiriganj Upazila
                      </option>  <option value={ 417
 }> Akhaura Upazila
                      </option>  <option value={ 175
 }> Akkelpur Upazila
                      </option>  <option value={ 252
 }> Alamdanga Upazila
                      </option>  <option value={ 383
 }> Alfadanga Upazila
                      </option>  <option value={ 410
 }> Ali Kadam Upazila
                      </option>  <option value={ 40
 }> Amtali Upazila
                      </option>  <option value={ 434
 }> Anwara Upazila
                      </option>  <option value={ 366
 }> Araihazar Upazila
                      </option>  <option value={ 424
 }> Ashuganj Upazila
                      </option>  <option value={ 302
 }> Assasuni Upazila
                      </option>  <option value={ 215
 }> Ataikula Upazila
                      </option>  <option value={ 216
 }> Atgharia Upazila
                      </option>  <option value={ 82
 }> Atpara Upazila
                      </option>  <option value={ 192
 }> Atrai Upazila
                      </option>  <option value={ 157
 }> Atwari Upazila
                      </option>  <option value={ 336
 }> Austagram Upazila
                      </option>  <option value={ 47
 }> Babuganj Upazila
                      </option>  <option value={ 193
 }> Badalgachhi Upazila
                      </option>  <option value={ 162
 }> Badarganj Upazila
                      </option>  <option value={ 318
 }> Badda
                      </option>  <option value={ 508
 }> Bagaichhari Upazila
                      </option>  <option value={ 203
 }> Bagatipara Upazila
                      </option>  <option value={ 243
 }> Bagerhat Sadar
                      </option>  <option value={ 234
 }> Bagha Upazila
                      </option>  <option value={ 257
 }> Bagherpara Upazila
                      </option>  <option value={ 235
 }> Bagmara Upazila
                      </option>  <option value={ 2
 }> Bahubal Upazila
                      </option>  <option value={ 337
 }> Bajitpur Upazila
                      </option>  <option value={ 48
 }> Bakerganj Upazila
                      </option>  <option value={ 97
 }> Baksiganj Upazila
                      </option>  <option value={ 27
 }> Balaganj Upazila
                      </option>  <option value={ 170
 }> Baliadangi Upazila
                      </option>  <option value={ 371
 }> Baliakandi Upazila
                      </option>  <option value={ 41
 }> Bamna Upazila
                      </option>  <option value={ 49
 }> Banaripara Upazila
                      </option>  <option value={ 418
 }> Bancharampur Upazila
                      </option>  <option value={ 449
 }> Bandar Thana
                      </option>  <option value={ 367
 }> Bandar Upazila
                      </option>  <option value={ 411
 }> Bandarban Sadar
                      </option>  <option value={ 3
 }> Baniyachong Upazila
                      </option>  <option value={ 435
 }> Banshkhali Upazila
                      </option>  <option value={ 204
 }> Baraigram Upazila
                      </option>  <option value={ 42
 }> Barguna Sadar
                      </option>  <option value={ 83
 }> Barhatta Upazila
                      </option>  <option value={ 52
 }> Barisal Sadar
                      </option>  <option value={ 509
 }> Barkal Upazila
                      </option>  <option value={ 9
 }> Barlekha Upazila
                      </option>  <option value={ 456
 }> Barura Upazila
                      </option>  <option value={ 393
 }> Basail Upazila
                      </option>  <option value={ 270
 }> Batiaghata Upazila
                      </option>  <option value={ 67
 }> Bauphal Upazila
                      </option>  <option value={ 28
 }> Beanibazar Upazila
                      </option>  <option value={ 499
 }> Begumganj Upazila
                      </option>  <option value={ 405
 }> Belabo Upazila
                      </option>  <option value={ 511
 }> Belaichhari Upazila
                      </option>  <option value={ 225
 }> Belkuchi Upazila
                      </option>  <option value={ 217
 }> Bera Upazila
                      </option>  <option value={ 43
 }> Betagi Upazila
                      </option>  <option value={ 338
 }> Bhairab Upazila
                      </option>  <option value={ 104
 }> Bhaluka Upazila
                      </option>  <option value={ 75
 }> Bhandaria Upazila
                      </option>  <option value={ 384
 }> Bhanga Upazila
                      </option>  <option value={ 218
 }> Bhangura Upazila
                      </option>  <option value={ 376
 }> Bhedarganj Upazila
                      </option>  <option value={ 285
 }> Bheramara Upazila
                      </option>  <option value={ 56
 }> Bhola Sadar
                      </option>  <option value={ 210
 }> Bholahat Upazila
                      </option>  <option value={ 394
 }> Bhuapur Upazila
                      </option>  <option value={ 455
 }> Bhujpur Thana
                      </option>  <option value={ 137
 }> Bhurungamari Upazila
                      </option>  <option value={ 425
 }> Bijoynagar Upazila
                      </option>  <option value={ 119
 }> Biral Upazila
                      </option>  <option value={ 117
 }> Birampur Upazila
                      </option>  <option value={ 118
 }> Birganj Upazila
                      </option>  <option value={ 16
 }> Bishwamvarpur Upazila
                      </option>  <option value={ 29
 }> Bishwanath Upazila
                      </option>  <option value={ 436
 }> Boalkhali Upazila
                      </option>  <option value={ 385
 }> Boalmari Upazila
                      </option>  <option value={ 120
 }> Bochaganj Upazila
                      </option>  <option value={ 158
 }> Boda Upazila
                      </option>  <option value={ 181
 }> Bogra Sadar
                      </option>  <option value={ 419
 }> Brahmanbaria Sadar
                      </option>  <option value={ 457
 }> Brahmanpara Upazila
                      </option>  <option value={ 57
 }> Burhanuddin Upazila
                      </option>  <option value={ 458
 }> Burichang Upazila
                      </option>  <option value={ 472
 }> Chakaria Upazila
                      </option>  <option value={ 437
 }> Chandanaish Upazila
                      </option>  <option value={ 450
 }> Chandgaon Thana
                      </option>  <option value={ 459
 }> Chandina Upazila
                      </option>  <option value={ 426
 }> Chandpur Sadar
                      </option>  <option value={ 58
 }> Char Fasson Upazila
                      </option>  <option value={ 138
 }> Char Rajibpur Upazila
                      </option>  <option value={ 386
 }> Charbhadrasan Upazila
                      </option>  <option value={ 236
 }> Charghat Upazila
                      </option>  <option value={ 501
 }> Chatkhil Upazila
                      </option>  <option value={ 219
 }> Chatmohar Upazila
                      </option>  <option value={ 460
 }> Chauddagram Upazila
                      </option>  <option value={ 258
 }> Chaugachha Upazila
                      </option>  <option value={ 226
 }> Chauhali Upazila
                      </option>  <option value={ 480
 }> Chhagalnaiya Upazila
                      </option>  <option value={ 17
 }> Chhatak Upazila
                      </option>  <option value={ 139
 }> Chilmari Upazila
                      </option>  <option value={ 121
 }> Chirirbandar Upazila
                      </option>  <option value={ 244
 }> Chitalmari Upazila
                      </option>  <option value={ 253
 }> Chuadanga Sadar
                      </option>  <option value={ 4
 }> Chunarughat Upazila
                      </option>  <option value={ 467
 }> Comilla Adarsha Sadar
                      </option>  <option value={ 471
 }> Comilla Sadar Dakshin
                      </option>  <option value={ 502
 }> Companiganj Upazila
                      </option>  <option value={ 30
 }> Companigonj Upazila
                      </option>  <option value={ 473
 }> Cox\s Bazar
                      </option>  <option value={ 271
 }> Dacope Upazila
                      </option>  <option value={ 481
 }> Daganbhuiyan Upazila
                      </option>  <option value={ 26
 }> Dakshin Sunamganj Upazila
                      </option>  <option value={ 377
 }> Damudya Upazila
                      </option>  <option value={ 254
 }> Damurhuda Upazila
                      </option>  <option value={ 68
 }> Dashmina Upazila
                      </option>  <option value={ 461
 }> Daudkandi Upazila
                      </option>  <option value={ 59
 }> Daulatkhan Upazila
                      </option>  <option value={ 279
 }> Daulatpur Thana
                      </option>  <option value={ 353
 }> Daulatpur Upazila
                      </option>  <option value={ 286
 }> Daulatpur Upazila
                      </option>  <option value={ 303
 }> Debhata Upazila
                      </option>  <option value={ 462
 }> Debidwar Upazila
                      </option>  <option value={ 159
 }> Debiganj Upazila
                      </option>  <option value={ 395
 }> Delduar Upazila
                      </option>  <option value={ 18
 }> Derai Upazila
                      </option>  <option value={ 98
 }> Dewanganj Upazila
                      </option>  <option value={ 518
 }> Dhaka
                      </option>  <option value={ 195
 }> Dhamoirhat Upazila
                      </option>  <option value={ 309
 }> Dhamrai Upazila
                      </option>  <option value={ 402
 }> Dhanbari Upazila
                      </option>  <option value={ 19
 }> Dharamapasha Upazila
                      </option>  <option value={ 105
 }> Dhobaura Upazila
                      </option>  <option value={ 182
 }> Dhunat Upazila
                      </option>  <option value={ 183
 }> Dhupchanchia Upazila
                      </option>  <option value={ 273
 }> Dighalia Upazila
                      </option>  <option value={ 486
 }> Dighinala Upazila
                      </option>  <option value={ 151
 }> Dimla Upazila
                      </option>  <option value={ 127
 }> Dinajpur Sadar
                      </option>  <option value={ 310
 }> Dohar Upazila
                      </option>  <option value={ 152
 }> Domar Upazila
                      </option>  <option value={ 451
 }> Double Mooring Thana
                      </option>  <option value={ 20
 }> Dowarabazar Upazila
                      </option>  <option value={ 74
 }> Dumki Upazila
                      </option>  <option value={ 272
 }> Dumuria Upazila
                      </option>  <option value={ 84
 }> Durgapur Upazila
                      </option>  <option value={ 237
 }> Durgapur Upazila
                      </option>  <option value={ 245
 }> Fakirhat Upazila
                      </option>  <option value={ 427
 }> Faridganj Upazila
                      </option>  <option value={ 387
 }> Faridpur Sadar
                      </option>  <option value={ 220
 }> Faridpur Upazila
                      </option>  <option value={ 438
 }> Fatikchhari Upazila
                      </option>  <option value={ 31
 }> Fenchuganj Upazila
                      </option>  <option value={ 482
 }> Feni Sadar
                      </option>  <option value={ 106
 }> Fulbaria Upazila
                      </option>  <option value={ 485
 }> Fulgazi Upazila
                      </option>  <option value={ 184
 }> Gabtali Upazila
                      </option>  <option value={ 107
 }> Gaffargaon Upazila
                      </option>  <option value={ 131
 }> Gaibandha Sadar
                      </option>  <option value={ 69
 }> Galachipa Upazila
                      </option>  <option value={ 163
 }> Gangachhara Upazila
                      </option>  <option value={ 295
 }> Gangni Upazila
                      </option>  <option value={ 108
 }> Gauripur Upazila
                      </option>  <option value={ 50
 }> Gaurnadi Upazila
                      </option>  <option value={ 360
 }> Gazaria Upazila
                      </option>  <option value={ 326
 }> Gazipur Sadar
                      </option>  <option value={ 396
 }> Ghatail Upazila
                      </option>  <option value={ 354
 }> Ghior Upazila
                      </option>  <option value={ 123
 }> Ghoraghat Upazila
                      </option>  <option value={ 372
 }> Goalandaghat Upazila
                      </option>  <option value={ 132
 }> Gobindaganj Upazila
                      </option>  <option value={ 238
 }> Godagari Upazila
                      </option>  <option value={ 32
 }> Golapganj Upazila
                      </option>  <option value={ 211
 }> Gomastapur Upazila
                      </option>  <option value={ 331
 }> Gopalganj Sadar
                      </option>  <option value={ 392
 }> Gopalpur Upazila
                      </option>  <option value={ 378
 }> Gosairhat Upazila
                      </option>  <option value={ 33
 }> Gowainghat Upazila
                      </option>  <option value={ 317
 }> Gulshan
                      </option>  <option value={ 205
 }> Gurudaspur Upazila
                      </option>  <option value={ 5
 }> Habiganj Sadar
                      </option>  <option value={ 428
 }> Haimchar Upazila
                      </option>  <option value={ 124
 }> Hakimpur Upazila
                      </option>  <option value={ 109
 }> Haluaghat Upazila
                      </option>  <option value={ 264
 }> Harinakunda Upazila
                      </option>  <option value={ 284
 }> Harintana Thana
                      </option>  <option value={ 171
 }> Haripur Upazila
                      </option>  <option value={ 355
 }> Harirampur Upazila
                      </option>  <option value={ 439
 }> Hathazari Upazila
                      </option>  <option value={ 147
 }> Hatibandha Upazila
                      </option>  <option value={ 503
 }> Hatiya Upazila
                      </option>  <option value={ 429
 }> Haziganj Upazila
                      </option>  <option value={ 51
 }> Hizla Upazila
                      </option>  <option value={ 463
 }> Homna Upazila
                      </option>  <option value={ 339
 }> Hossainpur Upazila
                      </option>  <option value={ 221
 }> Ishwardi Upazila
                      </option>  <option value={ 110
 }> Ishwarganj Upazila
                      </option>  <option value={ 99
 }> Islampur Upazila
                      </option>  <option value={ 340
 }> Itna Upazila
                      </option>  <option value={ 21
 }> Jagannathpur Upazila
                      </option>  <option value={ 34
 }> Jaintiapur Upazila
                      </option>  <option value={ 153
 }> Jaldhaka Upazila
                      </option>  <option value={ 22
 }> Jamalganj Upazila
                      </option>  <option value={ 100
 }> Jamalpur Sadar
                      </option>  <option value={ 319
 }> Jatrabari
                      </option>  <option value={ 261
 }> Jessore Sadar
                      </option>  <option value={ 63
 }> Jhalokati Sadar
                      </option>  <option value={ 265
 }> Jhenaidah Sadar
                      </option>  <option value={ 92
 }> Jhenaigati Upazila
                      </option>  <option value={ 259
 }> Jhikargachha Upazila
                      </option>  <option value={ 255
 }> Jibannagar Upazila
                      </option>  <option value={ 176
 }> Joypurhat Sadar
                      </option>  <option value={ 513
 }> Juraichhari Upazila
                      </option>  <option value={ 15
 }> Juri Upazila
                      </option>  <option value={ 507
 }> Kabirhat Upazila
                      </option>  <option value={ 430
 }> Kachua Upazila
                      </option>  <option value={ 246
 }> Kachua Upazila
                      </option>  <option value={ 185
 }> Kahaloo Upazila
                      </option>  <option value={ 125
 }> Kaharole Upazila
                      </option>  <option value={ 315
 }> Kalabagan
                      </option>  <option value={ 177
 }> Kalai Upazila
                      </option>  <option value={ 70
 }> Kalapara Upazila
                      </option>  <option value={ 304
 }> Kalaroa Upazila
                      </option>  <option value={ 298
 }> Kalia Upazila
                      </option>  <option value={ 327
 }> Kaliakair Upazila
                      </option>  <option value={ 305
 }> Kaliganj Upazila
                      </option>  <option value={ 148
 }> Kaliganj Upazila
                      </option>  <option value={ 328
 }> Kaliganj Upazila
                      </option>  <option value={ 266
 }> Kaliganj Upazila
                      </option>  <option value={ 397
 }> Kalihati Upazila
                      </option>  <option value={ 351
 }> Kalkini Upazila
                      </option>  <option value={ 86
 }> Kalmakanda Upazila
                      </option>  <option value={ 375
 }> Kalukhali Upazila
                      </option>  <option value={ 10
 }> Kamalganj Upazila
                      </option>  <option value={ 498
 }> Kamalnagar Upazila
                      </option>  <option value={ 227
 }> Kamarkhanda Upazila
                      </option>  <option value={ 35
 }> Kanaighat Upazila
                      </option>  <option value={ 329
 }> Kapasia Upazila
                      </option>  <option value={ 512
 }> Kaptai Upazila
                      </option>  <option value={ 341
 }> Karimganj Upazila
                      </option>  <option value={ 440
 }> Karnaphuli Upazila
                      </option>  <option value={ 420
 }> Kasba Upazila
                      </option>  <option value={ 332
 }> Kashiani Upazila
                      </option>  <option value={ 64
 }> Kathalia Upazila
                      </option>  <option value={ 342
 }> Katiadi Upazila
                      </option>  <option value={ 164
 }> Kaunia Upazila
                      </option>  <option value={ 510
 }> Kawkhali (Betbunia) Upazila
                      </option>  <option value={ 76
 }> Kawkhali Upazila
                      </option>  <option value={ 228
 }> Kazipur Upazila
                      </option>  <option value={ 87
 }> Kendua Upazila
                      </option>  <option value={ 311
 }> Keraniganj Upazila
                      </option>  <option value={ 321
 }> Keranigonj
                      </option>  <option value={ 260
 }> Keshabpur Upazila
                      </option>  <option value={ 487
 }> Khagrachhari Upazila
                      </option>  <option value={ 85
 }> Khaliajuri Upazila
                      </option>  <option value={ 280
 }> Khalishpur Thana
                      </option>  <option value={ 281
 }> Khan Jahan Ali Thana
                      </option>  <option value={ 126
 }> Khansama Upazila
                      </option>  <option value={ 178
 }> Khetlal Upazila
                      </option>  <option value={ 287
 }> Khoksa Upazila
                      </option>  <option value={ 343
 }> Kishoreganj Sadar
                      </option>  <option value={ 154
 }> Kishoreganj Upazila
                      </option>  <option value={ 333
 }> Kotalipara Upazila
                      </option>  <option value={ 267
 }> Kotchandpur Upazila
                      </option>  <option value={ 452
 }> Kotwali Thana
                      </option>  <option value={ 282
 }> Kotwali Thana
                      </option>  <option value={ 274
 }> Koyra Upazila
                      </option>  <option value={ 11
 }> Kulaura Upazila
                      </option>  <option value={ 344
 }> Kuliarchar Upazila
                      </option>  <option value={ 288
 }> Kumarkhali Upazila
                      </option>  <option value={ 141
 }> Kurigram Sadar
                      </option>  <option value={ 289
 }> Kushtia Sadar
                      </option>  <option value={ 474
 }> Kutubdia Upazila
                      </option>  <option value={ 6
 }> Lakhai Upazila
                      </option>  <option value={ 464
 }> Laksam Upazila
                      </option>  <option value={ 488
 }> Lakshmichhari Upazila
                      </option>  <option value={ 494
 }> Lakshmipur Sadar
                      </option>  <option value={ 60
 }> Lalmohan Upazila
                      </option>  <option value={ 149
 }> Lalmonirhat Sadar
                      </option>  <option value={ 206
 }> Lalpur Upazila
                      </option>  <option value={ 412
 }> Lama Upazila
                      </option>  <option value={ 514
 }> Langadu Upazila
                      </option>  <option value={ 441
 }> Lohagara Upazila
                      </option>  <option value={ 299
 }> Lohagara Upazila
                      </option>  <option value={ 361
 }> Lohajang Upazila
                      </option>  <option value={ 88
 }> Madan Upazila
                      </option>  <option value={ 101
 }> Madarganj Upazila
                      </option>  <option value={ 350
 }> Madaripur Sadar
                      </option>  <option value={ 7
 }> Madhabpur Upazila
                      </option>  <option value={ 388
 }> Madhukhali Upazila
                      </option>  <option value={ 398
 }> Madhupur Upazila
                      </option>  <option value={ 291
 }> Magura Sadar
                      </option>  <option value={ 489
 }> Mahalchhari Upazila
                      </option>  <option value={ 475
 }> Maheshkhali Upazila
                      </option>  <option value={ 268
 }> Maheshpur Upazila
                      </option>  <option value={ 194
 }> Manda Upazila
                      </option>  <option value={ 490
 }> Manikchhari Upazila
                      </option>  <option value={ 356
 }> Manikgonj Sadar
                      </option>  <option value={ 262
 }> Manirampur Upazila
                      </option>  <option value={ 61
 }> Manpura Upazila
                      </option>  <option value={ 77
 }> Mathbaria Upazila
                      </option>  <option value={ 491
 }> Matiranga Upazila
                      </option>  <option value={ 431
 }> Matlab Dakshin Upazila
                      </option>  <option value={ 432
 }> Matlab Uttar Upazila
                      </option>  <option value={ 468
 }> Meghna Upazila
                      </option>  <option value={ 53
 }> Mehendiganj Upazila
                      </option>  <option value={ 296
 }> Meherpur Sadar
                      </option>  <option value={ 102
 }> Melandaha Upazila
                      </option>  <option value={ 323
 }> Mirpur
                      </option>  <option value={ 290
 }> Mirpur Upazila
                      </option>  <option value={ 442
 }> Mirsharai Upazila
                      </option>  <option value={ 71
 }> Mirzaganj Upazila
                      </option>  <option value={ 399
 }> Mirzapur Upazila
                      </option>  <option value={ 345
 }> Mithamain Upazila
                      </option>  <option value={ 166
 }> Mithapukur Upazila
                      </option>  <option value={ 196
 }> Mohadevpur Upazila
                      </option>  <option value={ 320
 }> Mohammadpur
                      </option>  <option value={ 292
 }> Mohammadpur Upazila
                      </option>  <option value={ 89
 }> Mohanganj Upazila
                      </option>  <option value={ 239
 }> Mohanpur Upazila
                      </option>  <option value={ 247
 }> Mollahat Upazila
                      </option>  <option value={ 248
 }> Mongla Upazila
                      </option>  <option value={ 406
 }> Monohardi Upazila
                      </option>  <option value={ 470
 }> Monohargonj Upazila
                      </option>  <option value={ 249
 }> Morrelganj Upazila
                      </option>  <option value={ 325
 }> Motijheel
                      </option>  <option value={ 12
 }> Moulvibazar Sadar
                      </option>  <option value={ 297
 }> Mujibnagar Upazila
                      </option>  <option value={ 334
 }> Muksudpur Upazila
                      </option>  <option value={ 112
 }> Muktagachha Upazila
                      </option>  <option value={ 54
 }> Muladi Upazila
                      </option>  <option value={ 362
 }> Munshiganj Sadar
                      </option>  <option value={ 465
 }> Muradnagar Upazila
                      </option>  <option value={ 111
 }> Mymensingh Sadar
                      </option>  <option value={ 8
 }> Nabiganj Upazila
                      </option>  <option value={ 421
 }> Nabinagar Upazila
                      </option>  <option value={ 212
 }> Nachole Upazila
                      </option>  <option value={ 389
 }> Nagarkanda Upazila
                      </option>  <option value={ 400
 }> Nagarpur Upazila
                      </option>  <option value={ 142
 }> Nageshwari Upazila
                      </option>  <option value={ 413
 }> Naikhongchhari Upazila
                      </option>  <option value={ 93
 }> Nakla Upazila
                      </option>  <option value={ 65
 }> Nalchity Upazila
                      </option>  <option value={ 209
 }> Naldanga Upazila
                      </option>  <option value={ 94
 }> Nalitabari Upazila
                      </option>  <option value={ 113
 }> Nandail Upazila
                      </option>  <option value={ 186
 }> Nandigram Upazila
                      </option>  <option value={ 466
 }> Nangalkot Upazila
                      </option>  <option value={ 515
 }> Naniyachar Upazila
                      </option>  <option value={ 197
 }> Naogaon Sadar
                      </option>  <option value={ 301
 }> Naragati Thana
                      </option>  <option value={ 300
 }> Narail Sadar
                      </option>  <option value={ 368
 }> Narayanganj Sadar
                      </option>  <option value={ 379
 }> Naria Upazila
                      </option>  <option value={ 404
 }> Narsingdi Sadar
                      </option>  <option value={ 422
 }> Nasirnagar Upazila
                      </option>  <option value={ 207
 }> Natore Sadar
                      </option>  <option value={ 213
 }> Nawabganj Sadar
                      </option>  <option value={ 312
 }> Nawabganj Upazila
                      </option>  <option value={ 128
 }> Nawabganj Upazila
                      </option>  <option value={ 78
 }> Nazirpur Upazila
                      </option>  <option value={ 80
 }> Nesarabad (Swarupkati) Upazila
                      </option>  <option value={ 90
 }> Netrokona Sadar
                      </option>  <option value={ 198
 }> Niamatpur Upazila
                      </option>  <option value={ 346
 }> Nikli Upazila
                      </option>  <option value={ 155
 }> Nilphamari Sadar
                      </option>  <option value={ 500
 }> Noakhali Sadar
                      </option>  <option value={ 39
 }> Osmani Nagar Upazila
                      </option>  <option value={ 240
 }> Paba Upazila
                      </option>  <option value={ 222
 }> Pabna Sadar
                      </option>  <option value={ 453
 }> Pahartali Thana
                      </option>  <option value={ 275
 }> Paikgachha Upazila
                      </option>  <option value={ 347
 }> Pakundia Upazila
                      </option>  <option value={ 407
 }> Palash Upazila
                      </option>  <option value={ 133
 }> Palashbari Upazila
                      </option>  <option value={ 160
 }> Panchagarh Sadar
                      </option>  <option value={ 179
 }> Panchbibi Upazila
                      </option>  <option value={ 492
 }> Panchhari Upazila
                      </option>  <option value={ 454
 }> Panchlaish Thana
                      </option>  <option value={ 373
 }> Pangsha Upazila
                      </option>  <option value={ 129
 }> Parbatipur Upazila
                      </option>  <option value={ 483
 }> Parshuram Upazila
                      </option>  <option value={ 150
 }> Patgram Upazila
                      </option>  <option value={ 44
 }> Patharghata Upazila
                      </option>  <option value={ 443
 }> Patiya Upazila
                      </option>  <option value={ 199
 }> Patnitala Upazila
                      </option>  <option value={ 72
 }> Patuakhali Sadar
                      </option>  <option value={ 479
 }> Pekua Upazila
                      </option>  <option value={ 140
 }> Phulbari Upazila
                      </option>  <option value={ 122
 }> Phulbari Upazila
                      </option>  <option value={ 130
 }> Phulchhari Upazila
                      </option>  <option value={ 114
 }> Phulpur Upazila
                      </option>  <option value={ 276
 }> Phultala Upazila
                      </option>  <option value={ 167
 }> Pirgachha Upazila
                      </option>  <option value={ 172
 }> Pirganj Upazila
                      </option>  <option value={ 168
 }> Pirganj Upazila
                      </option>  <option value={ 79
 }> Pirojpur Sadar
                      </option>  <option value={ 200
 }> Porsha Upazila
                      </option>  <option value={ 91
 }> Purbadhala Upazila
                      </option>  <option value={ 241
 }> Puthia Upazila
                      </option>  <option value={ 229
 }> Raiganj Upazila
                      </option>  <option value={ 495
 }> Raipur Upazila
                      </option>  <option value={ 408
 }> Raipura Upazila
                      </option>  <option value={ 66
 }> Rajapur Upazila
                      </option>  <option value={ 143
 }> Rajarhat Upazila
                      </option>  <option value={ 374
 }> Rajbari Sadar
                      </option>  <option value={ 13
 }> Rajnagar Upazila
                      </option>  <option value={ 349
 }> Rajoir Upazila
                      </option>  <option value={ 516
 }> Rajshahi Upazila
                      </option>  <option value={ 496
 }> Ramganj Upazila
                      </option>  <option value={ 493
 }> Ramgarh Upazila
                      </option>  <option value={ 497
 }> Ramgati Upazila
                      </option>  <option value={ 250
 }> Rampal Upazila
                      </option>  <option value={ 476
 }> Ramu Upazila
                      </option>  <option value={ 73
 }> Rangabali Upazila
                      </option>  <option value={ 517
 }> Rangamati Sadar
                      </option>  <option value={ 165
 }> Rangpur Sadar
                      </option>  <option value={ 444
 }> Rangunia Upazila
                      </option>  <option value={ 201
 }> Raninagar Upazila
                      </option>  <option value={ 173
 }> Ranisankail Upazila
                      </option>  <option value={ 144
 }> Raomari Upazila
                      </option>  <option value={ 445
 }> Raozan Upazila
                      </option>  <option value={ 314
 }> Romna
                      </option>  <option value={ 414
 }> Rowangchhari Upazila
                      </option>  <option value={ 415
 }> Ruma Upazila
                      </option>  <option value={ 369
 }> Rupganj Upazila
                      </option>  <option value={ 277
 }> Rupsha Upazila
                      </option>  <option value={ 390
 }> Sadarpur
                      </option>  <option value={ 134
 }> Sadullapur Upazila
                      </option>  <option value={ 156
 }> Saidpur Upazila
                      </option>  <option value={ 401
 }> Sakhipur Upazila
                      </option>  <option value={ 391
 }> Saltha Upazila
                      </option>  <option value={ 446
 }> Sandwip Upazila
                      </option>  <option value={ 223
 }> Santhia Upazila
                      </option>  <option value={ 202
 }> Sapahar Upazila
                      </option>  <option value={ 423
 }> Sarail Upazila
                      </option>  <option value={ 251
 }> Sarankhola Upazila
                      </option>  <option value={ 187
 }> Sariakandi Upazila
                      </option>  <option value={ 103
 }> Sarishabari Upazila
                      </option>  <option value={ 447
 }> Satkania Upazila
                      </option>  <option value={ 306
 }> Satkhira Sadar
                      </option>  <option value={ 357
 }> Saturia Upazila
                      </option>  <option value={ 313
 }> Savar Upazila
                      </option>  <option value={ 504
 }> Senbagh Upazila
                      </option>  <option value={ 324
 }> Shahbag
                      </option>  <option value={ 230
 }> Shahjadpur Upazila
                      </option>  <option value={ 433
 }> Shahrasti Upazila
                      </option>  <option value={ 269
 }> Shailkupa Upazila
                      </option>  <option value={ 188
 }> Shajahanpur Upazila
                      </option>  <option value={ 382
 }> Shakhipur Upazila
                      </option>  <option value={ 293
 }> Shalikha Upazila
                      </option>  <option value={ 380
 }> Shariatpur Sadar
                      </option>  <option value={ 263
 }> Sharsha Upazila
                      </option>  <option value={ 95
 }> Sherpur Sadar
                      </option>  <option value={ 189
 }> Sherpur Upazila
                      </option>  <option value={ 352
 }> Shibchar Upazila
                      </option>  <option value={ 214
 }> Shibganj Upazila
                      </option>  <option value={ 190
 }> Shibganj Upazila
                      </option>  <option value={ 409
 }> Shibpur Upazila
                      </option>  <option value={ 358
 }> Shivalaya Upazila
                      </option>  <option value={ 307
 }> Shyamnagar Upazila
                      </option>  <option value={ 359
 }> Singair Upazila
                      </option>  <option value={ 208
 }> Singra Upazila
                      </option>  <option value={ 363
 }> Sirajdikhan Upazila
                      </option>  <option value={ 231
 }> Sirajganj Sadar
                      </option>  <option value={ 448
 }> Sitakunda Upazila
                      </option>  <option value={ 283
 }> Sonadanga Thana
                      </option>  <option value={ 484
 }> Sonagazi Upazila
                      </option>  <option value={ 505
 }> Sonaimuri Upazila
                      </option>  <option value={ 370
 }> Sonargaon Upazila
                      </option>  <option value={ 191
 }> Sonatola Upazila
                      </option>  <option value={ 38
 }> South Surma Upazila
                      </option>  <option value={ 96
 }> Sreebardi Upazila
                      </option>  <option value={ 14
 }> Sreemangal Upazila
                      </option>  <option value={ 364
 }> Sreenagar Upazila
                      </option>  <option value={ 294
 }> Sreepur Upazila
                      </option>  <option value={ 330
 }> Sreepur Upazila
                      </option>  <option value={ 506
 }> Subarnachar Upazila
                      </option>  <option value={ 135
 }> Sughatta Upazila
                      </option>  <option value={ 224
 }> Sujanagar Upazila
                      </option>  <option value={ 23
 }> Sullah Upazila
                      </option>  <option value={ 24
 }> Sunamganj Sadar
                      </option>  <option value={ 136
 }> Sundarganj Upazila
                      </option>  <option value={ 36
 }> Sylhet Sadar
                      </option>  <option value={ 25
 }> Tahirpur Upazila
                      </option>  <option value={ 308
 }> Tala Upazila
                      </option>  <option value={ 45
 }> Taltali Upazila
                      </option>  <option value={ 403
 }> Tangail Sadar
                      </option>  <option value={ 242
 }> Tanore Upazila
                      </option>  <option value={ 116
 }> Tara Khanda Upazila
                      </option>  <option value={ 169
 }> Taraganj Upazila
                      </option>  <option value={ 348
 }> Tarail Upazila
                      </option>  <option value={ 232
 }> Tarash Upazila
                      </option>  <option value={ 62
 }> Tazumuddin Upazila
                      </option>  <option value={ 316
 }> Tejgaon
                      </option>  <option value={ 477
 }> Teknaf Upazila
                      </option>  <option value={ 278
 }> Terokhada Upazila
                      </option>  <option value={ 161
 }> Tetulia Upazila
                      </option>  <option value={ 174
 }> Thakurgaon Sadar
                      </option>  <option value={ 416
 }> Thanchi Upazila
                      </option>  <option value={ 469
 }> Titas Upazila
                      </option>  <option value={ 365
 }> Tongibari Upazila
                      </option>  <option value={ 115
 }> Trishal Upazila
                      </option>  <option value={ 335
 }> Tungipara Upazila
                      </option>  <option value={ 478
 }> Ukhia Upazila
                      </option>  <option value={ 145
 }> Ulipur Upazila
                      </option>  <option value={ 233
 }> Ullahpara Upazila
                      </option>  <option value={ 322
 }> Uttara
                      </option>  <option value={ 55
 }> Wazirpur Upazila
                      </option>  <option value={ 381
 }> Zajira Upazila
                      </option>  <option value={ 37
 }> Zakiganj Upazila
                      </option>  <option value={ 81
 }> Zianagar Upazila
                      </option> 
                    </select>
                    <div id="thanaIdErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3"> Mobile No</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="consumerMobile" name="consumerMobile" placeholder="Mobile number" />
                    <div id="consumerMobileErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Email Address</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="consumerEmail" name="consumerEmail" placeholder="E-mail" />
                    <div id="consumerEmialErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Trade License Name<font color="red">*</font></label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="tradeLicenseName" name="tradeLicenseName" placeholder="Trade License Name" required />
                    <div id="tradeLicenseNameErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">Trade License No</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="tradeLicenseNo" name="tradeLicenseNo" placeholder="Trade License No" />
                    <div id="tradeLicenseNoErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">TIN</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="tin" name="tin" placeholder="TIN" />
                    <div id="tinErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-5x">
                  <label htmlFor="inputName4" className="control-label col-sm-3">VAT Reg. No.</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control input-sm" id="vatRegNo" name="vatRegNo" placeholder="VAT Reg. No." />
                    <div id="vatRegNoErr" className="help-block with-errors" />
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Route<font color="red">*</font></label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm" style={{height: 30}} id="territoryId" name="territoryId" required>
                      <option value>SELECT</option> <optgroup label="303 | Stadium Zone
 ">
                        <option value={ 1275
 }> Stadium
                        </option>  <option value={ 1276
 }> Jele Para
                        </option>  <option value={ 1277
 }> Kazir Dighi
                        </option>  <option value={ 1278
 }> Foillatali
                        </option>  <option value={ 1279
 }> Sagor Par
                        </option>  <option value={ 1280
 }> Hindu Para
                        </option>  <option value={ 1281
 }> Thana Road
                        </option>  <option value={ 1282
 }> Golichipa
                        </option>  </optgroup>  <optgroup label="304 | Sorai Para Zone
 ">
                        <option value={ 1283
 }> Soraipara
                        </option>  <option value={ 1284
 }> D.T Road
                        </option>  <option value={ 1285
 }> Jornapara
                        </option>  <option value={ 1286
 }> Lake View
                        </option>  <option value={ 1287
 }> Eidgah
                        </option>  <option value={ 1288
 }> GreenView
                        </option>  <option value={ 1289
 }> Ashraf Ali
                        </option>  <option value={ 1290
 }> College Route
                        </option>  </optgroup>  <optgroup label="305 | Halishahar Zone
 ">
                        <option value={ 1291
 }> Bow Bazar
                        </option>  <option value={ 1292
 }> Rampur
                        </option>  <option value={ 1293
 }> Noya Bazar
                        </option>  <option value={ 1294
 }> Mazar Road
                        </option>  <option value={ 1295
 }> Rongi Para
                        </option>  <option value={ 1296
 }> Boropukur
                        </option>  <option value={ 1297
 }> Hali Shohar
                        </option>  <option value={ 1298
 }> Sobujbag
                        </option>  </optgroup>  <optgroup label="306 | ZON-0004
 ">
                        <option value={ 1299
 }> ROUTE-0025
                        </option>  <option value={ 1300
 }> ROUTE-0026
                        </option>  <option value={ 1301
 }> ROUTE-0027
                        </option>  <option value={ 1302
 }> ROUTE-0028
                        </option>  <option value={ 1303
 }> ROUTE-0029
                        </option>  <option value={ 1304
 }> ROUTE-0030
                        </option>  <option value={ 1305
 }> ROUTE-0031
                        </option>  <option value={ 1306
 }> ROUTE-0032
                        </option>  <option value={ 1307
 }> ROUTE-0033
                        </option>  </optgroup>  <optgroup label="307 | ZON-0005
 ">
                        <option value={ 1308
 }> ROUTE-0034
                        </option>  <option value={ 1309
 }> ROUTE-0035
                        </option>  <option value={ 1310
 }> ROUTE-0036
                        </option>  <option value={ 1311
 }> ROUTE-0037
                        </option>  <option value={ 1312
 }> ROUTE-0038
                        </option>  <option value={ 1313
 }> ROUTE-0039
                        </option>  <option value={ 1314
 }> ROUTE-0040
                        </option>  </optgroup>  <optgroup label="308 | ZON-0006
 ">
                        <option value={ 1315
 }> ROUTE-0041
                        </option>  <option value={ 1316
 }> ROUTE-0042
                        </option>  <option value={ 1317
 }> ROUTE-0043
                        </option>  <option value={ 1318
 }> ROUTE-0044
                        </option>  <option value={ 1319
 }> ROUTE-0045
                        </option>  <option value={ 1320
 }> ROUTE-0046
                        </option>  <option value={ 1321
 }> ROUTE-0047
                        </option>  <option value={ 1322
 }> ROUTE-0048
                        </option>  <option value={ 1323
 }> ROUTE-0049
                        </option>  </optgroup> 
                    </select>
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
    {/*Chosen JavaScript */}
    {/*Chosen JavaScript */}
    {/*Chosen JavaScript */}
  </div>
  {/* /.container-fluid */}
  <footer className="footer text-center"> 2020 © Suffix IT Limited</footer>
  {/* sample modal content */}
  <div id="rupantorLGModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{display: 'none'}}>
    <div className="modal-dialog modal-lg" style={{marginTop: 100}}>
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h4 className="modal-title" id="rupantorLGModalTitle">Large modal</h4> 
        </div>
        <div className="modal-body" id="rupantorLGModalBody">
          <h4>Overflowing text to show scroll behavior</h4>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
        <div className="modal-footer" id="rupantorLGModalFooter">
          <button type="button" className="btn btn-danger waves-effect text-left" data-dismiss="modal">Close</button>
        </div>
      </div>
      {/* /.modal-content */}
    </div>
    {/* /.modal-dialog */}
  </div>
  {/* /.modal */}
</div>

           </div>
        );
};

export default Addcustomer;