<script>
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

function populateByMethod(whereaboutList) {
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
}

onMount(async () => {
  let whereaboutList = await whereaboutService.getWhereabouts();
  populateByMethod(whereaboutList)

  });

</script>


  <h1 class="title is-4">Total value by Job Category</h1>
  <Chart data={totalBYJobCategory} type="pie"/>
