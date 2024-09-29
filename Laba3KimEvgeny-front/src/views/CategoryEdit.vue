<template>
  <Layout :title="id ? 'Редактирование записи' : 'Создание записи'">
    <CategoryForm
        :id="id"
        @submit="onSubmit"
    />
  </Layout>
</template>

<script>
import { useStore } from 'vuex';

import { updateItem, addItem } from '@/store/categories/selectors';
import Layout from '@/components/Layout/Layout';
import CategoryForm from '@/components/CategoryForm/CategoryForm.vue';
export default {
  name: 'CategoryEdit',
  props: {
    id: String,
  },
  components: {
    Layout,
    CategoryForm,
  },
  setup() {
    const store = useStore();
    return {
      onSubmit: ({ id, category, description }) => id ?
          updateItem(store, { id, category, description }) :
          addItem(store, { category, description }),
    };
  }
}
</script>

