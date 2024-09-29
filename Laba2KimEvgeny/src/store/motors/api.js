import Api from '@/api/index';

class Motors extends Api {

  /**
   * Вернет список всех студентов
   * @returns {Promise<Response>}
   */
  motors = () => this.rest('/motors/list.json');

  /**
   * Удалит студента по id
   * @param id
   * @returns {Promise<*>}
   */
  remove = ( id ) => this.rest('/motors/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает

  /**
   * Создаст новую запись в таблице
   * @param motor объект студента, взятый из FormStudent
   * @returns {Promise<Response>}
   */
  add = ( motor ) => this.rest('/motors/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(motor),
  }).then(() => ({...motor, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает

  /**
   * Отправит измененную запись
   * @param motor объект студента, взятый из FormStudent
   * @returns {Promise<*>}
   */
  update = ( motor ) => this.rest('/motors/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(motor),
  }).then(() => motor) // then - заглушка, пока метод ничего не возвращает

}

export default new Motors();
