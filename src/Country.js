/**
 * Сlass for storing country data.
 */
class Country {
  /**
   * Repository countries data.
   *
   * @method  repository
   * @return  {array}
   * @author  DieGOs <https://github.com/9585999>
   */
  static repository() {
    return require('./repository.json')
  }
}

export default Country
