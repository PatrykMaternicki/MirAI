module.exports = {
  'site': {
    'required' : true,
    'type': 'string'
  },
  'wanted_file' : {
    'required' : true,
    'type': 'string'
  },
  'sizeSitemap': {
    'required': false,
    'type': 'number'
  },
  'chunkSize': {
    'required': false,
    'type': 'number'
  },
  'strategy': {
    'required': false,
    'type': 'object'
  }
}
