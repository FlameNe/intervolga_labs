<template>
  <Layout title="Виды масел">
    <MotorList />
  </Layout>
</template>

<script>
import Layout from '@/components/Layout/Layout';
import MotorList from '@/components/MotorList/MotorList.vue';

export default {
  name: 'Motors',
  components: {
    Layout,
    MotorList,
  }
}
</script>
