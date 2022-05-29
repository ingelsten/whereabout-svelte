<script>
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import icon from "/src/assets/icons.png"
  import TitleBar from "../components/TitleBar.svelte";
  import {getContext} from "svelte";

  const whereaboutService = getContext("WhereaboutService");
  whereaboutService.logout();
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Sign up or Log in"} title={"Whereabout Services Inc."}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="box">
  <h3 class="title is-3" style="text-align:center;">
      Welcome to Whereabouts - Version 2
  </h3>
  <p></p>
  <p class="subtitle is-6" style="text-align:center;">
      This is a small geolocation app by Wheraabouts. Login to start using the app. If you are a new user - please press sign up
      to register.
  </p></div>

<div class="columns">
<div class="column is-two-thirds">
  <div class="box" style="text-align:center;">
    <br>
<p class="subtitle is-5" style="text-align:center;">
 Whereabouts cater for Geopositioning.
</p>
<br>
<p class="subtitle is-5" style="text-align:center;">
 Geopositioning, also known as geotracking, geolocalization, geolocating, geolocation, or geoposition fixing is the process of determining or estimating the geographic position of an object.
 </p>
 <br>
<p class="subtitle is-5" style="text-align:center;">
  Location and Mapping – the real-time location of jobs and analytics available on the Whereabout’s platform. 
     <br><br>
<p class="subtitle is-5" style="text-align:center;">
  The location could be updated on a regular basis.
</p>
<br>
</div>
</div>
<div class="column">
<div class="box" style="text-align:center;">
 <figure class="image is-100x100">
<img src="{icon}" width="400" alt="img"/>
 </div>
</div>
</div>

<div class="box">
  <h4 class="title is-4"style="text-align:center;">© 2022 Whereabouts.</h4>
</div>

