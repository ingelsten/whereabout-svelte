<script>
  import WhereaboutForm from "../components/WhereaboutForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import WhereaboutMap from "../components/WhereaboutMap.svelte";

  let whereaboutMap = null;

  function whereaboutMade(event) {
    whereaboutMap.addWhereaboutMarker(event.detail.whereabout);
  }
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Please add a Whereabout"} title={"Whereabout Services Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns is-vcentered">
  <div class="column has-text-centered">
    <WhereaboutMap bind:this={whereaboutMap}/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Please add a whereabout</h1>
    <WhereaboutForm on:message={whereaboutMade}/>
  </div>
</div>
