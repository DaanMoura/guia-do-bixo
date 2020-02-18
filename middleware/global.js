export default {
  head () {
    return {
      title: 'Guia do Bixo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { ref: '/node_modules/@fortawesome/fontawesome-free/css/all.css', rel: 'stylesheet' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab&display=swap' }
      ]
    }
  }

}
