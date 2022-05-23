<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";
  import Coordinates from "./Coordinates.svelte";

  const dispatch = createEventDispatcher();

  const whereaboutService = getContext("WhereaboutService");

  let jobvalue = 0;

  let employeeList = [];
  let selectedEmployee = "";

  let jobCategory = ["electrical", "civils", "service"];
  let selectedJobCategory = "";

  let lat = 51.620358;
  let long = -8.905555;

  let message = "Please add a whereabout";

  onMount(async () => {
    employeeList = await whereaboutService.getEmployees()
  });

  async function addjob() {
    if (selectedEmployee && jobvalue && selectedJobCategory) {
      const employeeNames = selectedEmployee.split(',')
      const employee = employeeList.find(employee => employee.lastName == employeeNames[0] && employee.firstName == employeeNames[1]);
      const whereabout = {
        jobvalue: jobvalue,
        jobcategory: selectedJobCategory,
        employee: employee._id,
        lat: lat,
        long: long
      };
      const success = await whereaboutService.addjob(whereabout);
      if (!success) {
        message = "Whereabout addition not completed - some error occurred";
        return;
      }
      message = `Thanks! You have added a job with  ${jobvalue} to ${employee.firstName} ${employee.lastName}`;
      dispatch("message", {
        whereabout: whereabout,
      });
    } else {
      message = "Please select jobvalue, jobcategory and employee";
    }
  }
</script>
<form class="box">
<form on:submit|preventDefault={addjob}>

 <!-- <div class="field">
    <div class="control">
      {#each jobCategory as jobcategory}
        <input bind:group={selectedJobCategory} class="radio" type="radio" value="{jobcategory}"> {jobcategory}
      {/each}
    </div>
  </div>
-->

<div class="field is-horizontal">
  <div class="field">
    <label class="label" for="jobvalue">Enter Amount</label> <input bind:value={jobvalue} class="input" id="jobvalue"
                                                                  name="jobvalue" placeholder="Euros" type="number">
  </div>
  <div class="field">
        <label class="label" for="jobvalue">Assign Category</label>
    <div class="select">
      <select bind:value={selectedJobCategory}>
        {#each jobCategory as jobcategory}
          <option>{jobcategory}</option>
        {/each}
      </select>
    </div>
  </div>
  <div class="field">
    <label class="label" for="jobvalue">Assign Employee</label>
    <div class="select">
      <select bind:value={selectedEmployee}>
        {#each employeeList as employee}
          <option>{employee.lastName},{employee.firstName}</option>
        {/each}
      </select>
        </div>
     </div>
</div>
  <div class="field">
    <label class="label" for="jobvalue">Latitude and Longitude</label>
  <Coordinates bind:lat={lat} bind:long={long}/>
  </div>
  <div class="field">
      <button class="button is-warning">Add a Whereabout</button>
    </div>

</form>
</form>

