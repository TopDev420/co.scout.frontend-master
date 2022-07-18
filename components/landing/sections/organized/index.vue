<template>
  <div ref="{containerStayOrganized}" class="stayOrganizedWrapper">
    <div class="stayOrganizedContainer">
      <div class="scout-row scout-h-100">
        <div
          class="scout-col-6 scout-col-md-12 scoutstayOrganizedRightCol"
        >
          <div
            class="stayOrganizedWhiteBackground"
          >
            <img
              ref="{stayOrganizedMobile}"
              src="~/assets/images/stay-organized.png"
            >
          </div>
        </div>

        <div
          class="scout-col-6 scout-col-md-12 scoutstayOrganizedLeftCol"
        >
          <h1>Stay Organized</h1>
          <p>
            Find the property and save it for later. Copy any property info in
            a tap of a button.
          </p>
          <p class="stayOrganizedSubText">
            Want to remember something related to this property? Write a note!
          </p>
          <a href="/onboard">
            <a>
              <button>
                <p>Get Started</p>
                <img src="~/assets/icons/arrow-right-black.svg">
              </button>
            </a>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
