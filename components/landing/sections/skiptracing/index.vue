<template>
  <div
    class="searchForAnythingWrapper"
  >
    <div class="searchForAnythingContainer">
      <div class="scout-row scout-h-100">
        <div
          ref="{scoutSearchAnythingText}"
          class="scout-col-6 scout-col-md-12 scoutSearchForAnythingLeftCol"
        >
          <h1>Free Skiptracing</h1>
          <p>
            Look up property owner contact information and phone number for
            free.
          </p>
          <Link href="/onboard">
            <a>
              <button>
                <p>Get Started</p>
                <img src="/assets/icons/arrow-right-white.svg">
              </button>
            </a>
          </Link>
        </div>
        <div
          class="scout-col-6 scout-col-md-12 scoutSearchForAnythingRightCol"
        >
          <div
            ref="{searchAnythingWhiteBackground}"
            class="searchForAnythingWhiteBackground"
          >
            <img
              ref="{searchAnythingMobile}"
              src="~/assets/images/skip_tracing_image.png"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
