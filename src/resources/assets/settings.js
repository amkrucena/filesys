let settings = document.getElementById('settings')
const mediaTypes = {
  file: 'file',
  dir: 'dir',
  image: 'image',
  media: 'media',
  document: 'document'
}

export default {
  filesUrl: settings.getAttribute('data-files-url'),
  foldersUrl: settings.getAttribute('data-folders-url'),
  treeUrl: settings.getAttribute('data-tree-url'),
  dirIcon: settings.getAttribute('data-dir-icon-url'),
  iconDir: settings.getAttribute('data-icon-dir'),
  params: JSON.parse(settings.getAttribute('data-params').replaceAll('\'', '"')),

  /**
   * Gets icon absolute URL depending on name.
   * @param {string} name
   * @returns {string|null}
   */
  icon (name) {
    return name ? `${this.iconDir}${name}.png` : null
  },

  target () {
    if (this.params && this.params.target) {
      return this.params.target.toLowerCase()
    }

    return 'input'
  },

  mediaTypes,
  mediaType () {
    if (this.params && this.params.type && mediaTypes[this.params.type]) {
      return this.params.type
    }

    return mediaTypes.file
  },

  callback () {
    if (this.params && this.params.callback) {
      return this.params.callback
    }

    return false
  }
}
