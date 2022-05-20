<script>
  export let lat = 0.0;
  export let long = 0.0;
</script>

<div class="box field is-horizontal">
  <div class="field-label is-normal">
    <label for="long" class="label">Lat</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded">
        <input id="long" class="input" type="float" bind:value={lat}>
      </p>
    </div>
    <div class="field-label is-normal">
      <label for="lat" class="label">Long</label>
    </div>
    <div class="field">
      <p class="control is-expanded ">
        <input id="lat" class="input"  type="float" bind:value={long}>
      </p>
    </div>
  </div>
</div>
