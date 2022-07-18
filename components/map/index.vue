<template>
  <div>
    <p>Hey</p> {{ popup }}
    <div id="map" />
    <Popup
      v-if="isPopup == 0 ||isPopup == 1"
      state="{isPopup}"
      address="{address}"
      street-type="{latLong.addr_street_type}"
      parcel-i-d="{parcelID}"
      county="{county}"
      mun="{mun}"
      place="{place}"
      sale-price="{salePrice}"
      market-value-building="{marketValueBuilding}"
      market-value-land="{marketValueLand}"
      acre-age="{acreAge}"
      land-code="{landCode}"
      elevation="{elevation}"
      mailing-address1="{mailingAddress1}"
      mailing-address2="{mailingAddress2}"
      owner-occupied="{ownerOccupied}"
      no-of-buildings="{noOfBuildings}"
      year-built="{yearBuilt}"
      school-dist="{schoolDist}"
      updated="{updated}"
      lat="{latLong.lat}"
      long="{latLong.lon}"
      activate="{true}"
    />
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import Popup from '@/components/map/Popup.vue'

export default {
  components: {
    Popup
  },
  data: () => ({
    isPopup: 1,
    center: [-93.1247, 44.9323],
    zoom: 10.5,
    mapboxgl: null,
    mapbox: null,
    latLong: null,
    owner: null,
    address: null,
    vectorSource: `https://reportallusa.com/api/rest_services/client=${process.env.REPORT_ALL_API}/ParcelsVectorTile/MapBoxVectorTileServer/tile/{z}/{x}/{y}.mvt`
  }),

  mounted () {
    this.mapbox = new mapboxgl.Map({
      accessToken: process.env.MAPBOX_API_KEY,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      minzoom: 5,
      center: this.center,
      zoom: this.zoom,
      hash: true,
      showTileBoundaries: true
    })

    this.mapbox.on('load', () => this.setupMapBox())
  },

  methods: {
    setupMapBox () {
      /* eslint-disable camelcase */
      let features_selected = null
      /* eslint-disable camelcase */
      let features_hovered = null

      this.mapbox.addSource('parcels', {
        type: 'vector',
        tiles: [this.vectorSource],
        minzoom: 16,
        maxzoom: 17,
        promoteId: { parcels: 'robust_id' }
      })

      this.mapbox.addSource('parcels-2', {
        type: 'vector',
        tiles: [this.vectorSource],
        minzoom: 16,
        maxzoom: 17,
        promoteId: { parcels: 'robust_id' }
      })

      const hoveredLine = {
        id: 'hovered-line',
        source: 'parcels-2',
        'source-layer': 'parcels',
        type: 'line',
        paint: {
          'line-width': 3,
          'line-color': [
            'case',
            ['boolean', ['feature-state', 'selected'], false],
            '#111111',
            'transparent'
          ]
        }
      }

      this.mapbox.addLayer(hoveredLine)

      const parcelsLine1 = {
        id: 'parcels-line1',
        source: 'parcels',
        'source-layer': 'parcels',
        type: 'line',
        paint: {
          'line-width': 3,
          'line-color': [
            'case',
            ['boolean', ['feature-state', 'selected'], false],
            '#111111',
            'transparent'
          ]
        }
      }
      this.mapbox.addLayer(parcelsLine1)

      const parcelsFill = {
        id: 'parcels-fill',
        source: 'parcels',
        'source-layer': 'parcels',
        type: 'fill',
        paint: {
          'fill-outline-color': 'transparent',
          'fill-color': [
            'case',
            ['boolean', ['feature-state', 'selected'], false],
            'rgba(130, 130, 130, 0.42)',
            'transparent'
          ]
        }
      }
      this.mapbox.addLayer(parcelsFill)

      const parcelsLine = {
        id: 'parcels-line',
        source: 'parcels',
        'source-layer': 'parcels',
        type: 'line',
        paint: {
          'line-width': 1,
          'line-color': [
            'case',
            ['boolean', ['feature-state', 'selected'], false],
            '#111111',
            '#111111'
          ]
        }
      }

      this.mapbox.addLayer(parcelsLine)

      this.mapbox.on('mousemove', 'parcels-fill', (e) => {
      // hoveredParcels.features = [];
        if (features_hovered && features_hovered.length > 0) {
          features_hovered = [...features_hovered, ...e.features]
        } else {
          features_hovered = e.features
        }
        //  hoveredParcels.features = e.features;

        if (features_hovered && features_hovered.length) {
          for (let i = 0; i < features_hovered.length; i++) {
            this.mapbox.setFeatureState(
              {
                source: 'parcels-2',
                sourceLayer: 'parcels',
                id: features_hovered[i].id
              },
              { selected: false }
            )
          }
        }

        this.mapbox.setFeatureState(
          {
            source: 'parcels-2',
            sourceLayer: 'parcels',
            id: e.features[0].id
          },
          { selected: true }
        )
      })

      this.mapbox.on('click', 'parcels-fill', (e) => {
        // Un-highlight any currently highlighted feature(s).
        if (features_selected && features_selected.length) {
          for (let i = 0; i < features_selected.length; i++) {
            this.mapbox.setFeatureState(
              {
                source: 'parcels',
                sourceLayer: 'parcels',
                id: features_selected[i].id
              },
              { selected: false }
            )
          }
        }
        // eslint-disable-next-line no-const-assign
        features_selected = null

        // Create popup, initially only with attributes included in vector tile.
        let robust_id = null
        for (let i = 0; i < e.features.length; i++) {
          const feature = e.features[i]
          robust_id = feature.id
          this.mapbox.setFeatureState(
            { source: 'parcels', sourceLayer: 'parcels', id: feature.id },
            { selected: true }
          )
        }
        // eslint-disable-next-line no-const-assign
        features_selected = e.features

        if (robust_id !== null) {
        // Issue request for parcel details (attributes) and update popup contents when response is received.
          const detailsUrl =
          'https://reportallusa.com/api/rest_services/client=' +
          process.env.REPORT_ALL_API +
          '/Parcels/MapServer/0/query?where=robust_id=%27' +
          robust_id +
          '%27'
          const xhr = new XMLHttpRequest()
          xhr.open('GET', detailsUrl)
          xhr.onreadystatechange = function () {
            if (this.readyState !== 4) { return }
            if (this.status === 200) {
              const detailsResp = JSON.parse(this.responseText)
              // var det_table = "<table>\n";
              const features = detailsResp.features
              if (features) {
                for (let i = 0; i < features.length; i++) {
                  const feature = features[i]
                  const attributes = feature.attributes
                  console.log(attributes.robust_id, robust_id)
                  try {
                    if (attributes.robust_id === robust_id) {
                      console.log('got')
                      // console.log(attributes);
                      this.latLong = {
                        note: ' ',
                        robust_id: attributes.robust_id,
                        lat: attributes.latitude,
                        lon: attributes.longitude,
                        owner: attributes.owner,
                        parcel_id: attributes.parcel_id,
                        addr_city: attributes.addr_city,
                        addr_number: attributes.addr_number,
                        addr_street_name: attributes.addr_street_name,
                        addr_street_type: attributes.addr_street_type,
                        addr_zip: attributes.addr_zip,
                        county_name: attributes.county_name,
                        census_place: attributes.census_place,
                        state_abbr: attributes.state_abbr,
                        muni_name: attributes.muni_name,
                        mkt_val_tot: attributes.mkt_val_tot,
                        mkt_val_land: attributes.mkt_val_land,
                        mkt_val_bldg: attributes.mkt_val_bldg,
                        acreage_calc: attributes.acreage_calc,
                        land_use_code: attributes.land_use_code,
                        land_use_class: attributes.land_use_class,
                        elevation: attributes.elevation,
                        mail_address1: attributes.mail_address1 || 'N/A',
                        mail_address2:
                        attributes.mail_address2 || attributes.mail_address3,
                        mail_statename: attributes.mail_statename,
                        owner_occupied: attributes.owner_occupied,
                        buildings: attributes.buildings,
                        year_built: attributes.year_built,
                        school_district: attributes.school_district,
                        last_updated: attributes.last_updated
                      }
                      this.isPopup = 1
                      // setOwner(attributes.owner)
                      if (
                        attributes.addr_number &&
                      // attributes.census_place &&
                      attributes.state_abbr &&
                      attributes.census_zip
                      ) {
                        // setAddress(
                        //   (attributes.addr_number?.toUpperCase() || '') +
                        //   ' ' +
                        //   (attributes.addr_street_name?.toUpperCase() || '') +
                        //   ' ' +
                        //   (attributes.addr_street_type?.toUpperCase() || '') +
                        //   '<br/>' +
                        //   (attributes.addr_city?.toUpperCase() ||
                        //     attributes.census_place?.toUpperCase() ||
                        //     '') +
                        //   ', ' +
                        //   (attributes.state_abbr?.toUpperCase() || '') +
                        //   ', ' +
                        //   (attributes.census_zip?.toUpperCase() || '')
                        // )
                        this.isPopup = 1
                      } else if (
                        attributes.addr_number &&
                      attributes.census_place
                      ) {
                        // setAddress(
                        //   (attributes.addr_number?.toUpperCase() || '') +
                        //   ' ' +
                        //   (attributes.addr_street_name?.toUpperCase() || '') +
                        //   ' ' +
                        //   (attributes.addr_street_type?.toUpperCase() || '') +
                        //   '<br/>' +
                        //   (attributes.addr_city?.toUpperCase() ||
                        //     attributes.census_place?.toUpperCase() ||
                        //     '') +
                        //   ' ' +
                        //   (attributes.state_abbr?.toUpperCase() || '') +
                        //   ' ' +
                        //   (attributes.census_zip?.toUpperCase() || '')
                        // )
                      }
                      this.isPopup = 1
                    }
                  } catch (e) {}
                }
              }
            }
          }
          xhr.send()
        }
      })
    }
  }
}
</script>
    </popup>
  </div>
</template>
