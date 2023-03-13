<template>
  <header class="navbar navbar-expand-lg fixed-top py-5 shadow-sm bg-white">
    <div class="container ">
      <!-- <a class="navbar-brand pe-sm-3" href="index.html"><span class="text-primary flex-shrink-0 me-2 fw-bold">
          <img src="../assets/image/Intersect.png" style="height:40px;" alt=""> </span></a> -->
      <RouterLink to="/">
        <a class="navbar-brand pe-sm-3" ><span class="text-primary flex-shrink-0 me-2  fs-4">
          <i class="bi bi-chat-right-quote-fill fs-2"> </i> <span class="fw-bold">Hi! Arwen</span> </span></a>
      </RouterLink>

      <button class="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span
          class="navbar-toggler-icon"></span></button>
      <nav class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav navbar-nav-scroll ms-auto" style="--ar-scroll-height: 520px;">
          <li class="nav-item p-5">
            <RouterLink to="/home"><a class="nav-link " href="">關於</a></RouterLink>
          </li>
          <li class="nav-item p-5">
            <RouterLink to="/about"> <a class="nav-link " href="">專案</a></RouterLink>
          </li>
          <li class="nav-item p-5">
            <a class="nav-link " href="https://viccjiang.github.io/">部落格</a>
          </li>
          <li class="nav-item p-5"><a class="nav-link btn btn-primary rounded-pill text-white ms-5" href="https://www.cakeresume.com/pdf/s--4x6fK6-Wm9avhWI6x0030g--/vpVgM.pdf">下載履歷 <i
                class="bi bi-download"></i> </a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style scoped></style>
