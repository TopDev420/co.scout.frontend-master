<template>
  <div class="{scoutPopupContainer}">
    <div class="{scoutPopupMobile}">
      <div class="{scoutPopupMobileDragger}">
        <div class="{scoutPopupMobileDragBar}" />
        <div
          class="{scoutPopupCloseMobile}"
        >
          <img src="/assets/icons/arrow_up.svg">
        </div>
      </div>
    </div>
    <div className="{styles.scoutPopupMobileWrapper}">
      <div>
        <div className="{styles.scoutPopupBody}">
          <a href="#top" />
          <div>
            <h2>Owner</h2>
            <p>{owner || "N/A"}</p>
          </div>
          <div>
            <h2>Address</h2>
            <p dangerouslySetInnerHTML="{{" __html: address }} />
          </div>
          <div>
            <h2>Parcel ID</h2>
            <p>{parcelID}</p>
          </div>
        </div>
        <div className="{scoutPopupDivider}" />
      </div>
      <div>
        <div className="{scoutPopupScroll}">
          <div>
            <h2>Street View</h2>
            <p
              onClick="{openStreetView}"
              className="scout-special-link"
            >
              View Now
            </p>
          </div>
          <div>
            <h2>County</h2>
            <p>{county}</p>
          </div>
          <div>
            <h2>Municipality</h2>
            <p>{mun}</p>
          </div>
          <div>
            <h2>Place</h2>
            <p>{place}</p>
          </div>
          <div>
            <h2>Sale Price</h2>
            <p>${salePrice || "N/A"}</p>
          </div>
          <div>
            <h2>Market Value (Land)</h2>
            <p>${marketValueLand || "N/A"}</p>
          </div>
          <div>
            <h2>Market Value (Building)</h2>
            <p>${marketValueBuilding || "N/A"}</p>
          </div>
          <div>
            <h2>Acreage</h2>
            <p>{acreAge}(calculated)</p>
          </div>
          <div>
            <h2>Land Use Code</h2>
            <p>{landCode}</p>
          </div>
          <div>
            <h2>Elevation (Ft)</h2>
            <p>{elevation}</p>
          </div>
          <div>
            <h2>Mailing Address 1</h2>
            <p>{mailingAddress1}</p>
          </div>
          <div>
            <h2>Mailing Address 2</h2>
            <p>{mailingAddress2}</p>
          </div>
          <div>
            <h2>Owner Occupied</h2>
            <p>{ownerOccupied}</p>
          </div>
          <div>
            <h2>Number of Buildings</h2>
            <p>{noOfBuildings}</p>
          </div>
          <div>
            <h2>Year Built</h2>
            <p>{yearBuilt}</p>
          </div>
          <div>
            <h2>School District</h2>
            <p>{schoolDist}</p>
          </div>
          <div>
            <h2>Updated</h2>
            <p>{updated}</p>
          </div>
          <div>
            <h2>Skiptracing (free)</h2>
            <a
              target="_blank"
              href="https://fastpeoplesearch.com"
              className="scout-special-link"
            >
              fastpeoplesearch.com
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="scoutPopup"
    >
      <div class="scoutPopupHeader">
        <h1>Parcel Details</h1>
        <img
          src="/assets/icons/arrow_up.svg"
        >
      </div>
      <div class="{scoutPopupMobileDragger}" />
      <div class="{scoutPopupDesktopBodyWrapper}">
        <div class="{scoutPopupBody}">
          <div>
            <h2>Owner</h2>
            <p>{owner || "N/A"}</p>
          </div>
          <div>
            <h2>Address</h2>
            <p dangerouslySetInnerHTML="{{" __html: address }} />
          </div>
          <div>
            <h2>Parcel ID</h2>
            <p>{parcelID}</p>
          </div>
        </div>
        <div
          class="scoutPopupBody"
        >
          <div>
            <h2>Street View</h2>
            <p onClick="{openStreetView}" className="scout-special-link">
              View Now
            </p>
          </div>
          <div>
            <h2>County</h2>
            <p>{{ }}</p>
          </div>
          <div>
            <h2>Municipality</h2>
          </div>
          <div>
            <h2>Place</h2>
          </div>
          <div>
            <h2>Sale Price</h2>
          </div>
          <div>
            <p>${marketValueLand || "N/A"}</p>
          </div>
          <div>
            <h2>Market Value (Building)</h2>
          </div>
          <div>
            <h2>Acreage</h2>
          </div>
          <div>
            <h2>Land Use Code</h2>
          </div>
          <div>
            <h2>Elevation (Ft)</h2>
          </div>
          <div>
            <h2>Mailing Address 1</h2>
          </div>
          <div>
            <h2>Mailing Address 2</h2>
          </div>
          <div>
            <h2>Owner Occupied</h2>
          </div>
          <div>
            <h2>Number of Buildings</h2>
          </div>
          <div>
            <h2>Year Built</h2>
          </div>
          <div>
            <h2>School District</h2>
          </div>
          <div>
            <h2>Updated</h2>
          </div>
          <div>
            <h2>Skiptracing (Free)</h2>
            <a
              href="https://fastpeoplesearch.com"
              target="_blank"
              className="scout-special-link"
            >
              fastpeoplesearch.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    owner: {
      type: Object,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    parcelID: {
      type: String,
      required: false
    },
    county: {
      type: String,
      required: false
    },
    mun: {
      type: String,
      required: false
    },
    place: {
      type: String,
      required: false
    },
    salePrice: {
      type: String,
      required: false
    },
    marketValueLand: {
      type: String,
      required: false
    },
    marketValueBuilding: {
      type: String,
      required: false
    },
    acreAge: {
      type: String,
      required: false
    },
    state: {
      type: String,
      required: false
    },
    landCode: {
      type: String,
      required: false
    },
    elevation: {
      type: String,
      required: false
    },
    mailingAddress1: {
      type: String,
      required: false
    },
    mailingAddress2: {
      type: String,
      required: false
    },
    ownerOccupied: {
      type: String,
      required: false
    },
    noOfBuildings: {
      type: String,
      required: false
    },
    yearBuilt: {
      type: String,
      required: false
    },
    schoolDist: {
      type: String,
      required: false
    },
    updated: {
      type: String,
      required: false
    },
    lat: {
      type: String,
      required: false
    },
    long: {
      type: String,
      required: false
    },
    streetType: {
      type: String,
      required: false
    },
    activate: {
      type: Boolean,
      required: false
    }
  },
  setup () {

  }
}
</script>
