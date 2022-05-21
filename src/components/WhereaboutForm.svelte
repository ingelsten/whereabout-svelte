<script>
  import {createEventDispatcher, getContext, onMount} from "svelte";
  import Coordinates from "./Coordinates.svelte";

  const dispatch = createEventDispatcher();

  const whereaboutService = getContext("WhereaboutService");

  let jobvalue = 0;

  let employeeList = [];
  let selectedEmployee = "";

  let paymentMethods = ["paypal", "direct"];
  let selectedMethod = "";

  let lat = 51.620358;
  let long = -8.905555;

  let message = "Please whereabout";

  onMount(async () => {
    employeeList = await whereaboutService.getEmployees()
  });

  async function donate() {
    if (selectedEmployee && jobvalue && selectedMethod) {
      const employeeNames = selectedEmployee.split(',')
      const employee = employeeList.find(employee => employee.lastName == employeeNames[0] && employee.firstName == employeeNames[1]);
      const whereabout = {
        jobvalue: jobvalue,
        method: selectedMethod,
        employee: employee._id,
        lat: lat,
        long: long
      };
      const success = await whereaboutService.donate(whereabout);
      if (!success) {
        message = "Whereabout not completed - some error occurred";
        return;
      }
      message = `Thanks! You donated ${jobvalue} to ${employee.firstName} ${employee.lastName}`;
      dispatch("message", {
        whereabout: whereabout,
      });
    } else {
      message = "Please select jobvalue, method and employee";
    }
  }
</script>

<form on:submit|preventDefault={donate}>
  <div class="field">
    <label class="label" for="jobvalue">Enter Amount</label> <input bind:value={jobvalue} class="input" id="jobvalue"
                                                                  name="jobvalue" placeholder="Euros" type="number">
  </div>
  <div class="field">
    <div class="control">
      {#each paymentMethods as method}
        <input bind:group={selectedMethod} class="radio" type="radio" value="{method}"> {method}
      {/each}
    </div>
  </div>
  <div class="field">
    <div class="select">
      <select bind:value={selectedEmployee}>
        {#each employeeList as employee}
          <option>{employee.lastName},{employee.firstName}</option>
        {/each}
      </select>
    </div>
  </div>
  <Coordinates bind:lat={lat} bind:long={long}/>
  <div class="field">
    <div class="control">
      <button class="button is-link is-light">Whereabout</button>
    </div>
  </div>
  <div class="section">
    {message}
  </div>
</form>

