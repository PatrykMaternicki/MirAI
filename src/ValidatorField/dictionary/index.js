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
  'cache': {
    'required': false,
    'type': 'boolean',
  },
  'strategy': {
    'required': false,
    'type': 'object'
  },
  'max_screenshots': {
    'required': false,
    'type': 'number'
  },
  "max_size_folder": {
    'required': false,
    'type': 'number'
  }
}
