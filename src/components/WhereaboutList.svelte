<script>
  import {getContext, onMount} from 'svelte'

  const whereaboutService = getContext("WhereaboutService");
  let whereaboutList = [];

  onMount(async () => {
    whereaboutList = await whereaboutService.getWhereabouts();
  });
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Value of Job</th>
    <th>Job Category</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Allocated to</th>
    <th>Created by User</th>
     </thead>
  <tbody>
    {#each whereaboutList as whereabout}
      <tr>
        <td>
          {whereabout.jobvalue}
        </td>
        <td>
          {whereabout.jobcategory}
        </td>
        <td>
          {whereabout.lat}
        </td>
        <td>
          {whereabout.long}
        </td>
        <td>
          {whereabout.employee.firstName} {whereabout.employee.lastName}
        </td>
        <td>
          {whereabout.user.firstName} {whereabout.user.lastName}
        </td>
             </tr>
    {/each}
  </tbody>
</table>
