import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(

    <div class="container-fluid">
      <ul class="nav_bar row no-gutters">
	<li class="dropdown">
	  <a href="home.html" class="drop_item">Home</a>
	</li>

	<li class="dropdown">
	  <a href="wetlab.html">Wet Lab</a>
	</li>

	<li class="dropdown">
	  <a href="productdevelopment.html">Product Development</a>
	</li>

	<li class="dropdown">
	  <a href="policyandpractices.php">Policy and Practices</a>
	</li>

	<li class="dropdown">
	  <a href="business.php">Business</a>
	</li>

	<li class="dropdown human">
	  <a href="ourteam.php">Our Team</a>
	</li>
      </ul>
      
      <div class="cover row no-gutters">
	<img src="images/stock_chemist.jpg">
	  <div class="covertext">
	    <p id="title">Redo</p>
	    <p id="titledesc">A Revolutionary Ratiometric Redox Sensor</p>
	  </div>
      </div>

      <div class="home_summary">
	<p id="subtitle">The Problem</p>
	<p id="desc">When faced with wastewater treatment, measuring water pollution can be a slow and costly process. Current methods involve using hydrogen peroxide, treatment with various compounds, aeration tanks, or using some special filters, among others. Our project aims to reduce the burden of monitering water pollution by allowing for it to be done in real time through the introduction of genetically engineered bacteria. With our modified bacteria we can add to this by having a real-time substoichiometric readout of the amount of reducing agents in the environment, which not only helps in wastewater, but can be brought to many other fields as well.</p>
      </div>

      <div class="home_subtitle">
	<p id="subtitle">Our Solution</p>
      </div>

      <div class="accordion">
	<ul>
	  <li>
	    <div> <a href="wetlab.html">
		<h2>The Biology</h2>
		<p>A roGFP-Orp1 Reporter &amp; Response</p>
	    </a> </div>
	  </li>
	  <li>
	    <div> <a href="productdevelopment.html">
		<h2>The Technology</h2>
		<p>Responsive Light Suppression &amp; Promotion</p>
	    </a> </div>
	  </li>
	  <li>
	    <div> <a href="policyandpractices.html">
		<h2>Outreach</h2>
		<p>Community Education &amp; Industry Response</p>
	    </a> </div>
	  </li>
	  <li>
	    <div> <a href="business.html">
		<h2>Business</h2>
		<p>Economic Feasibility &amp; Sponsorship</p>
	    </a> </div>
	  </li>
	</ul>
      </div>
    </div>,
    document.getElementById('root'));


