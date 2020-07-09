import Vue from 'vue'
import { DruxtBreadcrumb } from 'druxt-breadcrumb'

Vue.use({
  install: function (Vue) {
    if (Vue._druxt_breadcrumb_installed) return
    Vue._druxt_breadcrumb_installed = true

    // Register components.
    Vue.component('DruxtBreadcrumb', DruxtBreadcrumb)
  }
})

export default (context, inject) => {
  const options = <%= JSON.stringify(options.breadcrumb) %>

  inject('druxtBreadcrumb', { options })
}
