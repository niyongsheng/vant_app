const doc = window.document

function get (key) {
  if (!key || !_has(key)) {
    return null
  }
  let regexpStr =
    '(?:^|.*;\\s*)' +
    escape(key).replace(/[-.+*]/g, '\\$&') +
    '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'
  return JSON.parse(unescape(doc.cookie.replace(new RegExp(regexpStr), '$1')))
}

function all () {
  let cookies = doc.cookie.split(/; ?/g),
    data = {}
  for (let i = cookies.length - 1; i >= 0; i--) {
    if (!String.prototype.trim.call(cookies[i])) {
      continue
    }
    let kvp = cookies[i].split('=')
    let key = unescape(kvp[0])
    data[key] = unescape(kvp[1])
  }
  return data
}

function set (key, data, time) {
  if (!key) {
    return
  }
  let expires = 'Tue, 01 Jan 2049 00:00:00 GMT'
  if (time) {
    let date
    if (Object.prototype.toString.call(time) === '[object ' + 'Date' + ']') {
      date = time
    } else {
      date = formatDate(time)
      console.log('cookie:', date)
    }
    expires = date
  }
  let expiresds = new Date(expires.replace(/-/g, '/'))
  console.log('expiresds:', expiresds)
  data = JSON.stringify(data)
  doc.cookie =
    escape(key) + '=' + escape(data) + '; expires=' + expiresds + '; path=/'
}

function formatDate (date) {
  var dates = new Date(date)
  var YY = dates.getFullYear() + '-'
  var MM =
    (dates.getMonth() + 1 < 10
      ? '0' + (dates.getMonth() + 1)
      : dates.getMonth() + 1) + '-'
  var DD = dates.getDate() < 10 ? '0' + dates.getDate() : dates.getDate()
  var hh =
    (dates.getHours() < 10 ? '0' + dates.getHours() : dates.getHours()) + ':'
  var mm =
    (dates.getMinutes() < 10 ? '0' + dates.getMinutes() : dates.getMinutes()) +
    ':'
  var ss =
    dates.getSeconds() < 10 ? '0' + dates.getSeconds() : dates.getSeconds()
  return YY + MM + DD + ' ' + hh + mm + ss
}

function remove (key) {
  if (!key || !_has(key)) {
    return
  }
  doc.cookie = escape(key) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
}

function clearAll () {
  Object.keys(all()).forEach(function (key) {
    remove(key)
  })
}

function _has (key) {
  return new RegExp(
    '(?:^|;\\s*)' + escape(key).replace(/[-.+*]/g, '\\$&') + '\\s*\\='
  ).test(doc.cookie)
}

export default {
  get,
  all,
  set,
  remove,
  clearAll,
  has: _has
}
