import _ from 'underscore'

export default async function (context, inject) {
  context.$_ = _
  inject('_', _)
}
