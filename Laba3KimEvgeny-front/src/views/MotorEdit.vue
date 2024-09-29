<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <MotorForm @submit="onSubmit" :id="id"  />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/motors/selectors';
import MotorForm from '@/components/MotorForm/MotorForm.vue';
import Layout from '@/components/Layout/Layout';

export default {
  name: 'MotorEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    MotorForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, brand, viscosity, volume, category }) => id ?
          updateItem(store, { id, brand, viscosity, volume, category }) :
          addItem(store, { brand, viscosity, volume, category } )
    }
  }

}
</script>

