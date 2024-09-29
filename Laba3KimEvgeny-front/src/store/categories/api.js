import Api from '@/api/index';

class Categories extends Api {

  /**
   * Вернет список всех групп
   * @returns {Promise<Response>}
   */
  categories = () => this.rest('/categories/list', {
    method: 'GET',
    'Content-Type': 'application/json',
  });

  /**
   * Удалит группу по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = ( id ) => this.rest('/categories/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает


  add = ( category ) => this.rest('/categories/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(category),
  }).then(() => ({...category, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает

  /**
   * Отправит измененную запись
   * @param category объект группы, взятый из FormGroup
   * @returns {Promise<*>}
   */
  update = ( category ) => this.rest('/categories/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(category),
  }).then(() => category) // then - заглушка, пока метод ничего не возвращает

}

export default new Categories();
