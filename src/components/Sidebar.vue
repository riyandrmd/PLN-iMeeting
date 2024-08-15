<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav id="sidebar" class="d-md-block bg-light sidebar">
    <div class="position-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <RouterLink
            to="/"
            class="nav-link d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-house-door"></i>
           </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink
            to="/ruangmeeting"
            class="nav-link d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-file-earmark"></i>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
#sidebar {
  height: inherit;
  width: fit-content;
  padding: 20px 15px;
}

#sidebar .nav-item {
  margin-bottom: 10px;
}

#sidebar .nav-link {
  color: #4a8394;
  font-size: 14px;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

#sidebar .nav-link:hover {
  background-color: #4a8394;
  color: white;
}

#sidebar .router-link-active {
  background-color: #4a8394;
  color: white;
}
</style>
