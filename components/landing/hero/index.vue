<template>
  <div id="hero">
    <div class="scoutHeroWrapper">
      <div class="scountIndexSVGContainer">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,100 100,0 100,100" />
        </svg>
        <img
          class="scoutIndexLeftBlue"
          src="~/assets/images/blue-tape-left.svg"
        >
        <img
          class="scoutIndexLeftGrey"
          src="~/assets/images/grey-tape-left.svg"
        >
        <img
          class="scoutIndexRightGrey"
          src="~/assets/images/grey-tape-right.svg"
        >
        <img
          class="scoutIndexRightBlue"
          src="~/assets/images/blue-tape-right.svg"
        >
        <img
          class="scoutIndexRightWhite"
          src="~/assets/images/white-tape-right.svg"
        >
      </div>
      <div class="scoutHeroContainer">
        <!-- {/* <div class={["scout-row scout-h-100", styles.scoutHeroBanner].join(" ")}>
            <div  ref={heroBanner} class="scout-col-12">
              <h1>Scout.</h1>
              <p>Easily Lookup and Save Properties</p>
            </div>
          </div> */} -->
        <div
          class="scout-row scout-h-100 scoutHeroRow"
        >
          <div
            id="heroLeftCol"
            class="scout-col-8 scout-col-lg-7 scout-col-md-12 scoutHeroLeftCol"
          >
            <h1>
              Property details — <br>
              in your hands.
            </h1>
            <button>Learn More</button>
          </div>
          <div
            id="heroRightCol"
            class="scout-col-4 scout-no-gutter scout-col-lg-5 scout-col-md-12 scoutHeroRightCol"
          >
            <img
              style="right: 0; zIndex: 1;"
              src="~/assets/images/hero-image.png"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
