<script>
  import WhereaboutList from "../components/WhereaboutList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import TotalByMethod from "../components/totalByJobCategory.svelte";
  import TotalByEmployee from "../components/totalByEmployeeBar.svelte";
  import TotalByEmployeeLine from "../components/totalByEmployeeLine.svelte";

</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Whereabouts"} title={"Whereabout Services Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns">
  <div class="column">
    <div class="box">
  <div class="column has-text-centered">
    <TotalByEmployee/>
  </div>
    </div>
  </div>
  <div class="column">
    <div class="box">
  <div class="column has-text-centered">
    <TotalByMethod/>
  </div>
    </div>
  </div>
  <div class="column">
    <div class="box">
  <div class="column has-text-centered">
    <TotalByEmployeeLine/>
  </div>
    </div>
  </div>
</div>

<div class="columns">
  <div class="column box has-text-centered">
    <h1 class="title is-4">Whereabouts</h1>
    <WhereaboutList/>
  </div>
</div>


