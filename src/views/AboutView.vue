<template>
  <div class="container mt-25 mt-md-25 py-10 py-md-18">
    <ul class="nav nav-pills mb-10 d-flex justify-content-between " id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link px-25 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
          type="button" role="tab" aria-controls="pills-home" aria-selected="true">Vue</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link px-25" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
          type="button" role="tab" aria-controls="pills-profile" aria-selected="false">JavaScript</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link px-25" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
          type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Web Layout</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link px-25" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button"
          role="tab" aria-controls="pills-contact" aria-selected="false">All</button>
      </li>

    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
        tabindex="0">

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/vue01.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body m-0">
                <h5 class="card-title">Some Sweet 法式甜品網站</h5>
                <p class="card-text text-secondary"> Vite、Pinia、Vue Router、Bootstrap 5、RESTful API</p>
              </div>
              <a href="https://viccjiang.github.io/somesweet/#/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/vue02.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body">
                <h5 class="card-title">Taipei Travel 台北旅遊網站</h5>
                <p class="card-text text-secondary">Open Data API、TDX API 資料串接</p>
              </div>
              <a href="https://viccjiang.github.io/taiwan_travel/#/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/vue03.jpg" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body">
                <h5 class="card-title">re.HOUSE 家俱電商網站</h5>
                <p class="card-text text-secondary">Vue Cli、RESTful API 資料串接、SCSS 客製化網頁樣式</p>
              </div>
              <a href="https://viccjiang.github.io/vue_rehouse/#/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
        </div>

      </div>
      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/js01.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body m-0">
                <h5 class="card-title">woworoom 窩窩家居</h5>
                <p class="card-text text-secondary"> RESTful API、CRUD</p>
              </div>
              <a href="https://viccjiang.github.io/woworoom/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/js02.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body m-0">
                <h5 class="card-title">Calculate Your BMI</h5>
                <p class="card-text text-secondary"> 計算你的 BMI 值</p>
              </div>
              <a href="https://viccjiang.github.io/bmi_calculator/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>

        </div>

      </div>
      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/w01.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body m-0">
                <h5 class="card-title">PETPET</h5>
                <p class="card-text text-secondary"> Vite、Pinia、Vue Router、Bootstrap 5、RESTful API</p>
              </div>
              <a href="https://viccjiang.github.io/weblayout_1231_hw08/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/w-02.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body">
                <h5 class="card-title">DOYOGA </h5>
                <p class="card-text text-secondary">Open Data API、TDX API 資料串接</p>
              </div>
              <a href="https://viccjiang.github.io/2021layout_week8_doyoga/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/w03.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body">
                <h5 class="card-title">ZHEG Leather</h5>
                <p class="card-text text-secondary">Vue Cli、RESTful API 資料串接、SCSS 客製化網頁樣式</p>
              </div>
              <a href="https://viccjiang.github.io/vue_rehouse/#/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
        </div>

      </div>
      <div class="tab-pane fade" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabindex="0">

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/vue01.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body m-0">
                <h5 class="card-title">Some Sweet 法式甜品網站</h5>
                <p class="card-text text-secondary"> Vite、Pinia、Vue Router、Bootstrap 5、RESTful API</p>
              </div>
              <a href="https://viccjiang.github.io/somesweet/#/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/vue02.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body">
                <h5 class="card-title">Taipei Travel 台北旅遊網站</h5>
                <p class="card-text text-secondary">Open Data API、TDX API 資料串接</p>
              </div>
              <a href="https://viccjiang.github.io/taiwan_travel/#/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/vue03.jpg" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body">
                <h5 class="card-title">re.HOUSE 家俱電商網站</h5>
                <p class="card-text text-secondary">Vue Cli、RESTful API 資料串接、SCSS 客製化網頁樣式</p>
              </div>
              <a href="https://viccjiang.github.io/vue_rehouse/#/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/js01.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body m-0">
                <h5 class="card-title">woworoom 窩窩家居</h5>
                <p class="card-text text-secondary"> RESTful API、CRUD</p>
              </div>
              <a href="https://viccjiang.github.io/woworoom/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/js02.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body m-0">
                <h5 class="card-title">Calculate Your BMI</h5>
                <p class="card-text text-secondary"> 計算你的 BMI 值</p>
              </div>
              <a href="https://viccjiang.github.io/bmi_calculator/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/w01.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body m-0">
                <h5 class="card-title">PETPET</h5>
                <p class="card-text text-secondary"> Bootstrap 5、SCSS 客製化</p>
              </div>
              <a href="https://viccjiang.github.io/weblayout_1231_hw08/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/w-02.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body">
                <h5 class="card-title">DOYOGA </h5>
                <p class="card-text text-secondary">Bootstrap 5、SCSS 客製化</p>
              </div>
              <a href="https://viccjiang.github.io/2021layout_week8_doyoga/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
          <div class="col">
            <div class="card card-hover border-0 h-75">
              <img src="../assets/image/w03.png" class="card-img-top rounded-4 h-50 object-fit" alt="...">
              <div class="card-body">
                <h5 class="card-title">ZHEG Leather</h5>
                <p class="card-text text-secondary">Bootstrap 5</p>
              </div>
              <a href="https://viccjiang.github.io/vue_rehouse/#/" class="stretched-link text-end">線上 Demo <i
                  class="bi bi-box-arrow-up-right"></i> </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.card-hover img {
  filter: brightness(1);
  overflow: hidden;
}

.card-hover:hover img {
  filter: brightness(0.8);
  transition: 0.5s;
}
</style>
