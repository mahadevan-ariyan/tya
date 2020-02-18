import React, { Component } from 'react';
import './artist.css'
// import headerLogo from "../../images/logo.png"
// import { Link } from 'react-router-dom';
class Artist extends Component {
render() {
    
    return <div className="content">
    <div className="header">
        
        {/* <h1 class="page-title">Assets</h1> */}
                <ul className="breadcrumb">
        <li><a href="dashboard.html">Home</a> </li>
        <li class="active">Asset</li>
    </ul>

    </div>
    <div className="main-content">
        

<div className="col-md-7 col-md-offset-3">

<ul className="nav nav-tabs">
<li class="active"><a href="#tab1" data-toggle="tab">Basic Details</a></li>
<li><a href="#tab2" data-toggle="tab">Media Details</a></li>
</ul>
<div class="tab-content">
<div class="tab-pane active" id="tab1">
  <br/>
  <form id="tab">
      <div class="row">
<div class="col-md-6">
<div className="form-group">
  <label>Asset Type</label>
  <select class="form-control">
      <option value="1">Reference</option>
      <option value="1">Meenakshi Amman Temple</option>
    </select>
</div>
</div>
<div className="col-md-6">
<div class="form-group">
  <label>Asset Name</label>
  <input type="text" value="temple" class="form-control" />
</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="form-group">
  <label>Address</label>
  <textarea value="Smith" rows="3" class="form-control">2817 S 49th
Apt 314
San Jose, CA 95101</textarea>
</div>
</div>

</div>
<div class="row">
<div class="col-md-6">
<div class="form-group">
  <label>Street</label>
  <input type="text" value="temple" class="form-control" />
</div>
</div>
<div class="col-md-6">
<div className="form-group">
  <label>City</label>
  <select name="DropDownTimezone" id="DropDownTimezone" class="form-control">
          <option value="-12.0">Eniwetok, Kwajalein</option>
          <option value="-11.0">Midway Island, Samoa</option>
          <option value="-10.0">Hawaii</option>
          <option value="-9.0">Alaska</option>
          <option value="-8.0">Pacific Time (US &amp; Canada)</option>
          <option value="-7.0">Mountain Time (US &amp; Canada)</option>
          <option value="-6.0">Central Time (US &amp; Canada), Mexico City</option>
          <option value="-5.0">Eastern Time (US &amp; Canada), Bogota, Lima</option>
          <option value="-4.0">Atlantic Time (Canada), Caracas, La Paz</option>
          <option value="-3.5">Newfoundland</option>
          <option selected="selected" value="-3.0">Brazil, Buenos Aires, Georgetown</option>
          <option value="-2.0">Mid-Atlantic</option>
          <option value="-1.0">Azores, Cape Verde Islands</option>
          <option value="0.0">Western Europe Time, London, Lisbon, Casablanca</option>
          <option value="1.0">Brussels, Copenhagen, Madrid, Paris</option>
          <option value="2.0">Kaliningrad, South Africa</option>
          </select>
</div>
</div>

</div>
<div class="row">
<div class="col-md-6">
<div class="form-group">
  <label>State</label>
  <select name="DropDownTimezone" id="DropDownTimezone" class="form-control">
          <option value="-12.0">Eniwetok, Kwajalein</option>
          <option selected="selected" value="-11.0">Midway Island, Samoa</option>
          <option value="-10.0">Hawaii</option>
          <option value="-9.0">Alaska</option>
          <option value="-8.0">Pacific Time (US &amp; Canada)</option>
          <option value="-7.0">Mountain Time (US &amp; Canada)</option>
          <option value="-6.0">Central Time (US &amp; Canada), Mexico City</option>
          <option value="-5.0">Eastern Time (US &amp; Canada), Bogota, Lima</option>
          <option value="-4.0">Atlantic Time (Canada), Caracas, La Paz</option>
          <option value="-3.5">Newfoundland</option>
          <option value="-3.0">Brazil, Buenos Aires, Georgetown</option>
          <option value="-2.0">Mid-Atlantic</option>
          <option value="-1.0">Azores, Cape Verde Islands</option>
          <option value="0.0">Western Europe Time, London, Lisbon, Casablanca</option>
          <option value="1.0">Brussels, Copenhagen, Madrid, Paris</option>
          <option value="2.0">Kaliningrad, South Africa</option>
          </select>
</div>
</div>
<div class="col-md-6">
<div class="form-group">
  <label>Country</label>
  <select name="DropDownTimezone" id="DropDownTimezone" class="form-control">
          <option value="-12.0">Eniwetok, Kwajalein</option>
          <option value="-11.0">Midway Island, Samoa</option>
          <option value="-10.0">Hawaii</option>
          <option value="-9.0">Alaska</option>
          <option selected="selected" value="-8.0">Pacific Time (US &amp; Canada)</option>
          <option value="-7.0">Mountain Time (US &amp; Canada)</option>
          <option value="-6.0">Central Time (US &amp; Canada), Mexico City</option>
          <option value="-5.0">Eastern Time (US &amp; Canada), Bogota, Lima</option>
          <option value="-4.0">Atlantic Time (Canada), Caracas, La Paz</option>
          <option value="-3.5">Newfoundland</option>
          <option value="-3.0">Brazil, Buenos Aires, Georgetown</option>
          <option value="-2.0">Mid-Atlantic</option>
          <option value="-1.0">Azores, Cape Verde Islands</option>
          <option value="0.0">Western Europe Time, London, Lisbon, Casablanca</option>
          <option value="1.0">Brussels, Copenhagen, Madrid, Paris</option>
          <option value="2.0">Kaliningrad, South Africa</option>
          </select>
</div>
</div>

</div>
<br/>
<div lass="btn-toolbar list-toolbar text-right">
<a class="btn btn-primary btnNext" >Next</a>
</div>
  </form>
    
</div>
<div class="tab-pane" id="tab2">
  <br/>
    <form id="tab2">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
            <label>Upload Images</label>
            <input type="file"  class="form-control" />
        </div>
      </div>	
      <div class="col-md-6">
        <div class="form-group">
            <label>Upload Videos</label>
            <input type="file" class="form-control" />
        </div>
      </div>
      
    </div>
    <br/>
    <div class="btn-toolbar list-toolbar">
      <a class="btn btn-primary btnPrevious" >Previous</a>
      <div class="pull-right">
        <a class="btn btn-success btnNext" >Save</a>
        <a href="#myModal" data-toggle="modal" class="btn btn-danger">Cancel</a>
      </div>
    </div>
    </form>
    
</div>
</div>







</div>

    <div class="modal small fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3 id="myModalLabel">Cancel Confirmation</h3>
      </div>
      <div class="modal-body">
        
        <p class="error-text"><i class="fa fa-warning modal-icon"></i>Are you sure you want to Cancel the changes?</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cancel</button>
        <button class="btn btn-danger" data-dismiss="modal">Delete</button>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
}
}

export default Artist;