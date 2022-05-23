<script>
  export let lat = 0.0;
  export let long = 0.0;
</script>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label for="Lat" class="label">Lat</label>
  </div>
  <div class="field-body">
    <div class="field">

        <input id="Lat" class="input" type="float" bind:value={lat}>

    </div>
    <div class="field-label is-normal">
      <label for="Long" class="label">Long</label>
    </div>
    <div class="field">

        <input id="Long" class="input"  type="float" bind:value={long}>

    </div>
  </div>
</div>
