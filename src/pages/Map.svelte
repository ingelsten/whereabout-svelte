<script>
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import WhereaboutMap from "../components/WhereaboutMap.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Map of Whereabout Locations"} title={"Whereabout Services Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<WhereaboutMap/>
