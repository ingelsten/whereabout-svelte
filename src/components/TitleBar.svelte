<script>
  import icon from "/src/assets/icons.png"
  import {user} from "../stores.js"
  export let title = "";
  export let subTitle = "";
</script>

<div class="box has-text-centered columns m-2">
  <div class="column">
    <img src="{icon}" width="60" alt="img"/>
  </div>
  <div class="column">
    <div class="title is-5"> {title} </div>
    <div class="subtitle is-5"> {subTitle} </div>
  </div>
  <div class="column">
    <i style="font-size: 48px; color: rgb(255, 139, 30);" class="fas fa-hard-hat"></i>
    {#if $user.email}
      <div class="is-size-7">{$user.email} </div>
    {:else}
      <div class="is-size-7">Whereabout-Svelte v1.0</div>
    {/if}
  </div>
</div>
