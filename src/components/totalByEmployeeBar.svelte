<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

    const whereaboutService = getContext("WhereaboutService");


let totalByEmployee = {
  labels: [],
  datasets: [
    {
      values: []
    }
  ]
}

function populateByEmployee(whereaboutList, employees) {
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
  }

  onMount(async () => {
    let whereaboutList = await whereaboutService.getWhereabouts();
    let employees = await whereaboutService.getEmployees()
    populateByEmployee(whereaboutList, employees);
  });

</script>

<h1 class="title is-4">Total By Employee</h1>
<Chart data={totalByEmployee} type="bar"/>