<template>
    <div>
        <Alert></Alert>
        <frontNavbar/>
        <router-view></router-view>
        <frontFooter/>
    </div>
</template>


<script>
import frontNavbar from './frontNavbar';
import frontFooter from './frontFooter';
import Alert from '../AlertMessage';

export default {
    components: {
      frontNavbar,
      frontFooter,
      Alert,
    },
};
</script>

