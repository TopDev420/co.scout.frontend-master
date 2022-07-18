<template>
  <div
    class="searchForAnythingWrapper"
  >
    <div class="searchForAnythingContainer">
      <div class="scout-row scout-h-100">
        <div
          class="scout-col-6 scout-col-md-12 scoutSearchForAnythingLeftCol"
        >
          <h1>Search For Anything</h1>
          <p>
            Search for property information based on owner, address or parcel
            ID. Yup, we have it all!
          </p>
          <a href="/onboard">
            <a>
              <button>
                <p>Get Started</p>
                <img src="~/assets/icons/arrow-right-white.svg">
              </button>
            </a>
          </a>
        </div>
        <div
          class="scout-col-6 scout-col-md-12 scoutSearchForAnythingRightCol"
        >
          <div
            class="searchForAnythingWhiteBackground"
          >
            <img
              src="~/assets/images/search-for-anything.png"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>
