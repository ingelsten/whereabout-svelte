<script>
    import icon3 from "/src/assets/icons.png";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

    const whereaboutService = getContext("WhereaboutService");

let totalBYJobCategory = {
  labels: ["electrical", "civils", "service"],
  datasets: [
    {
      values: [0, 0, 0]
    }
  ]
};
let totalByEmployee = {
  labels: [],
  datasets: [
    {
      values: []
    }
  ]
}
onMount(async () => {
  let whereaboutList = await whereaboutService.getWhereabouts();
  whereaboutList.forEach(whereabout => {
    if (whereabout.jobcategory == "electrical") {
      totalBYJobCategory.datasets[0].values[0] += whereabout.jobvalue
    } 
  if (whereabout.jobcategory == "civils") {
      totalBYJobCategory.datasets[0].values[1] += whereabout.jobvalue
    }
  else if (whereabout.jobcategory == "service") {
      totalBYJobCategory.datasets[0].values[2] += whereabout.jobvalue
    }
  });

  let employees = await whereaboutService.getEmployees()
  totalByEmployee.labels = [];
  employees.forEach(employee => {
    totalByEmployee.labels.push(`${employee.lastName}, ${employee.firstName}`)
    totalByEmployee.datasets[0].values.push(0);
  })
  employees.forEach((employee, i) => {
    whereaboutList.forEach(whereabout => {
      if (whereabout.employee._id == employee._id) {
        totalByEmployee.datasets[0].values[i] += whereabout.jobvalue;
      }
    });
  });
});
</script>

<div class="columns is-vcentered">
<div class="column is-two-thirds">
  <TitleBar subTitle={"Whereabout Analytics"} title={"Whereabout Services Inc."}/>
</div>
<div class="column">
  <MainNavigator/>
</div>
</div>

<div class="columns">
  <div class="column">
    <div class="box">
  <h1 class="title is-4">Value by Job Type</h1>
  <Chart data={totalBYJobCategory} type="pie"/>
</div>
</div>
<div class="column">
  <div class="box">
  <h1 class="title is-4">Value by Employee</h1>
  <Chart data={totalByEmployee} type="bar"/>
</div>
</div>
<div class="column">
  <div class="box">
  <h1 class="title is-4">Valye By Employee</h1>
  <Chart data={totalByEmployee} type="line"/>
</div>
</div>
</div>