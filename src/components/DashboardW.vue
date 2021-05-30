<template>
    <div>
        <Nav />
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="wrapper">
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Nav from './Nav'
export default {
    name: 'Dashboard',
    components: {
        Nav
  }
}
</script>