<script>
  // import 'leaflet/dist/leaflet.css';
  import {LeafletMap} from '../services/leaflet-map';
  import {getContext, onMount} from "svelte";

  const whereaboutService = getContext("WhereaboutService");

  const mapConfig = {
    location: {lat: 51.620858, long: -8.902420},
    zoom: 12,
    minZoom: 1,
  };
  let map = null;

  onMount(async () => {
    map = new LeafletMap("whereabout-map", mapConfig);
    map.showZoomControl();
    map.addLayerGroup('Whereabouts');
      map.showLayerControl();

    const whereabouts = await whereaboutService.getWhereabouts();
    whereabouts.forEach(whereabout => {
      addWhereaboutMarker(whereabout);
    });
  });

  export function addWhereaboutMarker(whereabout) {
    const whereaboutStr = `${whereabout.employee.firstName} ${whereabout.employee.lastName} €${whereabout.amount.toString()}`;
    map.addMarker({lat: whereabout.lat, long: whereabout.long}, whereaboutStr, "Whereabouts");
    map.moveTo(11, {lat: whereabout.lat, long: whereabout.long});
  }

</script>

<div class="box" id="whereabout-map" style="height:800px"></div>

