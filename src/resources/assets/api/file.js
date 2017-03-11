import vue from 'vue'
import Blob from '../models/Blob'
import settings from '../settings'

export default {
  /**
   * Rename folder.
   * @param {Blob} blob
   * @param {string} name
   * @returns {Promise.<Blob>}
   */
  update (blob, name) {
    return new Promise((resolve, reject) => {
      vue.http.patch(`${settings.filesUrl}/${blob.full_name}`, {name})
        .then(({data}) => { resolve(new Blob(data)) }, reject)
    })
  },

  /**
   * Delete file.
   * @param {Blob} blob
   * @returns {Promise.<Boolean>}
   */
  delete (blob) {
    return new Promise((resolve, reject) => {
      vue.http.delete(`${settings.filesUrl}/${blob.dir}/${blob.full_name}`)
        .then(({data}) => { resolve(!!data) }, reject)
    })
  }
}
