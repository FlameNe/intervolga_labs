import Api from '@/api/index';

class Categories extends Api {


  categories = () => this.rest('/categories/list.json');


  remove = ( id ) => this.rest('/categories/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает


  add = ( category ) => this.rest('categories/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(category),
  }).then(() => ({...category, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает


  update = ( category ) => this.rest('categories/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(category),
  }).then(() => category) // then - заглушка, пока метод ничего не возвращает

}

export default new Categories();
