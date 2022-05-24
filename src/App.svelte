<script>
  import {setContext} from "svelte";
  import {WhereaboutService} from "./services/whereabout-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Report from "./pages/Report.svelte";
  import Whereabout from "./pages/Whereabout.svelte";
  import Map from "./pages/Map.svelte";
  import Router from "svelte-spa-router";
  import Charts from "./pages/Charts.svelte";

  setContext("WhereaboutService", 
  new WhereaboutService("https://ingelsten4.herokuapp.com"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/whereabout": Whereabout,
    "/report": Report,
    "/map": Map,
    "/charts": Charts,
    "/logout": Main

  }
</script>

<div class="container">
  <Router {routes}/>
</div>
