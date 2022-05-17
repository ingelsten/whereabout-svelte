<script>
  import WhereaboutList from "../components/WhereaboutList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Whereabouts so far..."} title={"Whereabout Services Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column box has-text-centered">
    <h1 class="title is-4">Whereabouts</h1>
    <WhereaboutList/>
  </div>
</div>
