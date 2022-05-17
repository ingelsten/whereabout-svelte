<script>
  import icon from "/src/assets/icons.png";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import LoginForm from "../components/LoginForm.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Whereabout Services Inc."} subTitle={"Sign up or Log in"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="column is-4 is-offset-4">
  <div class="box">
 <section class="section">
      <h1 class="title">Login</h1>
      <LoginForm/>
    </div>
  </div>

