import React from 'react';

const Summaryofvisitingstatus = () => {
    return (
        <div>
            <div id="page-wrapper">
  {/* /.container-fluid */}
  <div className="container-fluid">
    <div className="row bg-title">
      {/* .page title */}
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">Summary of Visiting Status</h4>  
      </div>
      {/* /.page title */}
      {/* .breadcrumb */}
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">                        
        <ol className="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Report</a></li>
          <li className="active">Summary of Visiting Status</li>
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
              <form data-toggle="validator" className="form-horizontal" name="marketWiseTargetAdd" id="marketWiseTargetAdd" method="POST" action="summaryOfVisitingStatusReportPrint.jsp?sessionid=59BB43E81CB7B9AB3AA27557019EDA6E
&act=add" onsubmit="return dataValidate()" target="_blank">
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Teritory Name *</label>
                  <div className="col-md-9">
                    <select id="teritoryId" name="teritoryId" className="form-control input-sm customInput-sm chosen-select" style={{height: 30}} required>
                      <option value>SELECT</option> <option value={53
}> Pahartoli
                      </option>  <option value={54
}> TER-002
                      </option>  <option value={55
}> TER-003
                      </option>  <option value={56
}> TER-004
                      </option>  <option value={57
}> TER-005
                      </option>  <option value={58
}> TER-006
                      </option>  <option value={59
}> TER-007
                      </option>  <option value={60
}> TER-008
                      </option>  <option value={61
}> TER-009
                      </option>  <option value={62
}> TER-010
                      </option>  <option value={63
}> TER-011
                      </option>  <option value={64
}> TER-012
                      </option>  <option value={65
}> TER-013
                      </option>  <option value={66
}> TER-014
                      </option>  <option value={67
}> TER-015
                      </option>  <option value={68
}> TER-016
                      </option>  <option value={69
}> TER-017
                      </option>  <option value={70
}> TER-018
                      </option>  <option value={71
}> TER-019
                      </option>  <option value={72
}> TER-020
                      </option>  <option value={73
}> TER-021
                      </option>  <option value={74
}> TER-022
                      </option>  <option value={75
}> TER-023
                      </option>  <option value={76
}> TER-024
                      </option>  <option value={77
}> TER-025
                      </option>  <option value={78
}> TER-026
                      </option>  <option value={79
}> TER-027
                      </option>  <option value={80
}> TER-028
                      </option>  <option value={81
}> TER-029
                      </option>  <option value={82
}> TER-030
                      </option>  <option value={83
}> TER-031
                      </option>  <option value={84
}> TER-032
                      </option>  <option value={85
}> TER-033
                      </option>  <option value={86
}> TER-034
                      </option>  <option value={87
}> TER-035
                      </option>  <option value={88
}> TER-036
                      </option>  <option value={89
}> TER-037
                      </option>  <option value={90
}> TER-038
                      </option>  <option value={91
}> TER-039
                      </option>  <option value={92
}> TER-040
                      </option>  <option value={93
}> TER-041
                      </option>  <option value={94
}> TER-042
                      </option>  <option value={95
}> TER-043
                      </option>  <option value={96
}> TER-044
                      </option>  <option value={97
}> TER-045
                      </option>  <option value={98
}> TER-046
                      </option>  <option value={99
}> TER-047
                      </option>  <option value={100
}> TER-048
                      </option>  <option value={101
}> TER-049
                      </option>  <option value={102
}> TER-050
                      </option>  <option value={103
}> TER-051
                      </option>  <option value={104
}> TER-052
                      </option>  <option value={105
}> TER-053
                      </option>  <option value={106
}> TER-054
                      </option>  <option value={107
}> TER-055
                      </option>  <option value={108
}> TER-056
                      </option>  <option value={109
}> TER-057
                      </option>  <option value={110
}> TER-058
                      </option>  <option value={111
}> TER-059
                      </option>  <option value={112
}> TER-060
                      </option>  <option value={113
}> TER-061
                      </option>  <option value={114
}> TER-062
                      </option>  <option value={115
}> TER-063
                      </option>  <option value={116
}> TER-064
                      </option>  <option value={117
}> TER-065
                      </option>  <option value={118
}> TER-066
                      </option>  <option value={119
}> TER-067
                      </option>  <option value={120
}> TER-068
                      </option>  <option value={121
}> TER-069
                      </option>  <option value={122
}> TER-070
                      </option>  <option value={123
}> TER-071
                      </option>  <option value={124
}> TER-072
                      </option>  <option value={125
}> TER-073
                      </option>  <option value={126
}> TER-074
                      </option>  <option value={127
}> TER-075
                      </option>  <option value={128
}> TER-076
                      </option>  <option value={129
}> TER-077
                      </option>  <option value={130
}> TER-078
                      </option>  <option value={131
}> TER-079
                      </option>  <option value={132
}> TER-080
                      </option>  <option value={133
}> TER-081
                      </option>  <option value={134
}> TER-082
                      </option>  <option value={135
}> TER-083
                      </option>  <option value={136
}> TER-084
                      </option>  <option value={137
}> TER-085
                      </option>  <option value={138
}> TER-086
                      </option>  <option value={139
}> TER-087
                      </option>  <option value={140
}> TER-088
                      </option>  <option value={141
}> TER-089
                      </option>  <option value={142
}> TER-090
                      </option>  <option value={143
}> TER-091
                      </option>  <option value={144
}> TER-092
                      </option>  <option value={145
}> TER-093
                      </option>  <option value={146
}> TER-094
                      </option>  <option value={147
}> TER-095
                      </option>  <option value={148
}> TER-096
                      </option>  <option value={149
}> TER-097
                      </option>  <option value={150
}> TER-098
                      </option>  <option value={151
}> TER-099
                      </option>  <option value={152
}> TER-0100
                      </option>  <option value={153
}> TER-0101
                      </option>  <option value={154
}> TER-0102
                      </option>  <option value={155
}> TER-0103
                      </option>  <option value={156
}> TER-0104
                      </option>  <option value={157
}> TER-0105
                      </option>  <option value={158
}> TER-0106
                      </option>  <option value={159
}> TER-0107
                      </option>  <option value={160
}> TER-0108
                      </option>  <option value={161
}> TER-0109
                      </option>  <option value={162
}> TER-0110
                      </option>  <option value={163
}> TER-0111
                      </option>  <option value={164
}> TER-0112
                      </option>  <option value={165
}> TER-0113
                      </option>  <option value={166
}> TER-0114
                      </option>  <option value={167
}> TER-0115
                      </option>  <option value={168
}> TER-0116
                      </option>  <option value={169
}> TER-0117
                      </option>  <option value={170
}> TER-0118
                      </option>  <option value={171
}> TER-0119
                      </option>  <option value={172
}> TER-0120
                      </option>  <option value={173
}> TER-0121
                      </option>  <option value={174
}> TER-0122
                      </option>  <option value={175
}> TER-0123
                      </option>  <option value={176
}> TER-0124
                      </option>  <option value={177
}> TER-0125
                      </option>  <option value={178
}> TER-0126
                      </option>  <option value={179
}> TER-0127
                      </option>  <option value={180
}> TER-0128
                      </option>  <option value={181
}> TER-0129
                      </option>  <option value={182
}> TER-0130
                      </option>  <option value={183
}> TER-0131
                      </option>  <option value={184
}> TER-0132
                      </option>  <option value={185
}> TER-0133
                      </option>  <option value={186
}> TER-0134
                      </option>  <option value={187
}> TER-0135
                      </option>  <option value={188
}> TER-0136
                      </option>  <option value={189
}> TER-0137
                      </option>  <option value={190
}> TER-0138
                      </option>  <option value={191
}> TER-0139
                      </option>  <option value={192
}> TER-0140
                      </option>  <option value={193
}> TER-0141
                      </option>  <option value={194
}> TER-0142
                      </option>  <option value={195
}> TER-0143
                      </option>  <option value={196
}> TER-0144
                      </option>  <option value={197
}> TER-0145
                      </option>  <option value={198
}> TER-0146
                      </option>  <option value={199
}> TER-0147
                      </option>  <option value={200
}> TER-0148
                      </option>  <option value={201
}> TER-0149
                      </option>  <option value={202
}> TER-0150
                      </option>  <option value={203
}> TER-0151
                      </option>  <option value={204
}> TER-0152
                      </option>  <option value={205
}> TER-0153
                      </option>  <option value={206
}> TER-0154
                      </option>  <option value={207
}> TER-0155
                      </option>  <option value={208
}> TER-0156
                      </option>  <option value={209
}> TER-0157
                      </option>  <option value={210
}> TER-0158
                      </option>  <option value={211
}> TER-0159
                      </option>  <option value={212
}> TER-0160
                      </option>  <option value={213
}> TER-0161
                      </option>  <option value={214
}> TER-0162
                      </option>  <option value={215
}> TER-0163
                      </option>  <option value={216
}> TER-0164
                      </option>  <option value={217
}> TER-0165
                      </option>  <option value={218
}> TER-0166
                      </option>  <option value={219
}> TER-0167
                      </option>  <option value={220
}> TER-0168
                      </option>  <option value={221
}> TER-0169
                      </option>  <option value={222
}> TER-0170
                      </option>  <option value={223
}> TER-0171
                      </option>  <option value={224
}> TER-0172
                      </option>  <option value={225
}> TER-0173
                      </option>  <option value={226
}> TER-0174
                      </option>  <option value={227
}> TER-0175
                      </option>  <option value={228
}> TER-0176
                      </option>  <option value={229
}> TER-0177
                      </option>  <option value={230
}> TER-0178
                      </option>  <option value={231
}> TER-0179
                      </option>  <option value={232
}> TER-0180
                      </option>  <option value={233
}> TER-0181
                      </option>  <option value={234
}> TER-0182
                      </option>  <option value={235
}> TER-0183
                      </option>  <option value={236
}> TER-0184
                      </option>  <option value={237
}> TER-0185
                      </option>  <option value={238
}> TER-0186
                      </option>  <option value={239
}> TER-0187
                      </option>  <option value={240
}> TER-0188
                      </option>  <option value={241
}> TER-0189
                      </option>  <option value={242
}> TER-0190
                      </option>  <option value={243
}> TER-0191
                      </option>  <option value={244
}> TER-0192
                      </option>  <option value={245
}> TER-0193
                      </option>  <option value={246
}> TER-0194
                      </option>  <option value={247
}> TER-0195
                      </option>  <option value={248
}> TER-0196
                      </option>  <option value={249
}> TER-0197
                      </option>  <option value={250
}> TER-0198
                      </option>  <option value={251
}> TER-0199
                      </option>  <option value={252
}> TER-0200
                      </option>  <option value={253
}> TER-0201
                      </option>  <option value={254
}> TER-0202
                      </option>  <option value={255
}> TER-0203
                      </option>  <option value={256
}> TER-0204
                      </option>  <option value={257
}> TER-0205
                      </option>  <option value={258
}> TER-0206
                      </option>  <option value={259
}> TER-0207
                      </option>  <option value={260
}> TER-0208
                      </option>  <option value={261
}> TER-0209
                      </option>  <option value={262
}> TER-0210
                      </option>  <option value={263
}> TER-0211
                      </option>  <option value={264
}> TER-0212
                      </option>  <option value={265
}> TER-0213
                      </option>  <option value={266
}> TER-0214
                      </option>  <option value={267
}> TER-0215
                      </option>  <option value={268
}> TER-0216
                      </option>  <option value={269
}> TER-0217
                      </option>  <option value={270
}> TER-0218
                      </option>  <option value={271
}> TER-0219
                      </option>  <option value={272
}> TER-0220
                      </option>  <option value={273
}> TER-0221
                      </option>  <option value={274
}> TER-0222
                      </option>  <option value={275
}> TER-0223
                      </option>  <option value={276
}> TER-0224
                      </option>  <option value={277
}> TER-0225
                      </option>  <option value={278
}> TER-0226
                      </option>  <option value={279
}> TER-0227
                      </option>  <option value={280
}> TER-0228
                      </option>  <option value={281
}> TER-0229
                      </option>  <option value={282
}> TER-0230
                      </option>  <option value={283
}> TER-0231
                      </option>  <option value={284
}> TER-0232
                      </option>  <option value={285
}> TER-0233
                      </option>  <option value={286
}> TER-0234
                      </option>  <option value={287
}> TER-0235
                      </option>  <option value={288
}> TER-0236
                      </option>  <option value={289
}> TER-0237
                      </option>  <option value={290
}> TER-0238
                      </option>  <option value={291
}> TER-0239
                      </option>  <option value={292
}> TER-0240
                      </option>  <option value={293
}> TER-0241
                      </option>  <option value={294
}> TER-0242
                      </option>  <option value={295
}> TER-0243
                      </option>  <option value={296
}> TER-0244
                      </option>  <option value={297
}> TER-0245
                      </option>  <option value={298
}> TER-0246
                      </option>  <option value={299
}> TER-0247
                      </option>  <option value={300
}> TER-0248
                      </option>  <option value={301
}> TER-0249
                      </option>  <option value={302
}> TER-0250
                      </option> 
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Zone Name</label>
                  <div className="col-md-9">
                    <select id="zoneId" name="zoneId" className="form-control input-sm customInput-sm" style={{height: 30}}>
                      <option value selected> Select</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Route Name</label>
                  <div className="col-md-9">
                    <select id="routeId" name="routeId" className="form-control input-sm customInput-sm" style={{height: 30}}>
                      <option value selected> Select</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  {/* Date picker plugins css */}
                  <link href="http://salesapp.suffixit.com:8756/AKTWEB/commonUtil/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css" />
                  <label htmlFor="inputEmail4" className="control-label col-sm-3">Month</label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" className="form-control" id="targetMonth" name="targetMonth" placeholder="mm-yyyy" required /> <span className="input-group-addon"><i className="icon-calender" /></span> 
                    </div>
                    <div className="help-block with-errors" />
                  </div>
                  {/* Date Picker Plugin JavaScript */}
                </div>
                <div className="form-group row custom-bottom-margin-15x">
                  <label className="control-label col-md-3">Report Type</label>
                  <div className="col-md-9">
                    <select className="form-control input-sm customInput-sm" style={{height: 30}} id="reportType" name="reportType" required>
                      <option value>Select</option>
                      <option value="P">PDF</option>
                      <option value="X">XLS</option>
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
</div>

        </div>
    );
};

export default Summaryofvisitingstatus;