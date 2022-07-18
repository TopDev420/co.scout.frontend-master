<template>
  <div
    id="parcelsMadeEasy"
    class="scoutParcelsMadeEasyWrapper"
  >
    <div class="scout-row scout-h-100">
      <div class="scout-col-7 scout-col-lg-12">
        <div class="scoutMapImagesContainer">
          <img
            class="scoutMapImageTwo"
            src="~/assets/images/map2.svg"
          >

          <img
            class="scoutMapImageOne"
            src="~/assets/images/map.svg"
          >
        </div>
      </div>
      <div
        class="scout-col-5 scout-col-lg-12 scoutParcelMadeEasyRight"
      >
        <h1>Parcels, made easy.</h1>
        <p>Easily look up and save property information.</p>
        <div
          class="scout-row styles.scoutParcelMadeEasyRow"
        >
          <div
            class="scoutParcelMadeEasyImageContainer"
          >
            <img src="~/assets/icons/search-icon.svg">
          </div>
          <div class="scout-col-10">
            <h5 class="scoutParcelMadeEasyHead">
              Search
            </h5>
            <p class="scoutParcelMadeEasyDesc">
              Search for parcels based on any info you have.
            </p>
            </h5>
          </div>
        </div>
        <div
          class="scout-row styles.scoutParcelMadeEasyRow"
        >
          <div
            class="scoutParcelMadeEasyImageContainer"
          >
            <img src="~/assets/icons/bookmark-icon.svg">
          </div>
          <div class="scout-col-10 ">
            <h5 class="scoutParcelMadeEasyHead">
              Save
            </h5>
            <p class="scoutParcelMadeEasyDesc">
              Tap and you got it. It’s in your saved locations.
            </p>
          </div>
        </div>
        <a href="/register">
          <a>
            <button class="scoutParcelsMadeEasyCTA">
              Sign up
            </button>
          </a>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parcels'
}
</script>
