<script>
    import icon3 from "/src/assets/icons.png";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

    const whereaboutService = getContext("WhereaboutService");

let totalByMethod = {
  labels: ["paypal", "direct"],
  datasets: [
    {
      values: [0, 0]
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
    if (whereabout.method == "paypal") {
      totalByMethod.datasets[0].values[0] += whereabout.amount
    } else if (whereabout.method == "direct") {
      totalByMethod.datasets[0].values[1] += whereabout.amount
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
        totalByEmployee.datasets[0].values[i] += whereabout.amount;
      }
    });
  });
});
</script>

<div class="columns is-vcentered">
<div class="column is-two-thirds">
  <TitleBar subTitle={"Donation Analytics"} title={"Donation Services Inc."}/>
</div>
<div class="column">
  <MainNavigator/>
</div>
</div>

<div class="columns">
<div class="column box has-text-centered">
  <h1 class="title is-4">By Payment Method</h1>
  <Chart data={totalByMethod} type="pie"/>
</div>
<div class="column box has-text-centered">
  <h1 class="title is-4">By Employee</h1>
  <Chart data={totalByEmployee} type="bar"/>
</div>
</div>