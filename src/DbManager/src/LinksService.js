class LinksService {
  constructor(db) {
    this.db = db;
    this.id = 0;
    this.date = new Date();
  }

  setLinks(links) {
    links.forEach(link => {
      this.db.insert({
        'id': this.id,
        'date': this.date,
        'link': link,
      });
      this.id++;
    });
  }

  isLinks() {
    return this.readAll().length > 0;
  }

  readAll() {
    return this.db().select('id', 'date', 'link');
  }
}

module.exports = LinksService;
