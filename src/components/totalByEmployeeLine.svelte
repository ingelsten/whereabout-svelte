<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

    const whereaboutService = getContext("WhereaboutService");


let totalByEmployeeLine = {
  labels: [],
  datasets: [
    {
      values: []
    }
  ]
}

function populateByEmployee(whereaboutList, employees) {
    totalByEmployeeLine.labels = [];
  employees.forEach(employee => {
    totalByEmployeeLine.labels.push(`${employee.lastName}, ${employee.firstName}`)
    totalByEmployeeLine.datasets[0].values.push(0);
  })
  employees.forEach((employee, i) => {
    whereaboutList.forEach(whereabout => {
      if (whereabout.employee._id == employee._id) {
        totalByEmployeeLine.datasets[0].values[i] += whereabout.jobvalue;
      }
    });
  });
  }

  onMount(async () => {
    let whereaboutList = await whereaboutService.getWhereabouts();
    let employees = await whereaboutService.getEmployees()
    populateByEmployee(whereaboutList, employees);
  });

</script>

<h1 class="title is-4">Total Value by Employee</h1>
<Chart data={totalByEmployeeLine} type="line"/>