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
    <th>Amount</th>
    <th>Method</th>
    <th>Donor</th>
    <th>Candidate</th>
  </thead>
  <tbody>
    {#each whereaboutList as whereabout}
      <tr>
        <td>
          {whereabout.amount}
        </td>
        <td>
          {whereabout.method}
        </td>
        <td>
          {whereabout.candidate.lastName}, {whereabout.candidate.firstName}
        </td>
        <td>
          {whereabout.donor.lastName},  {whereabout.donor.firstName}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
