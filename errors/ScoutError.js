module.exports = class ScoutError {
  constructor ({ name, message, status }) {
    this.name = name
    this.message = message
    this.stats = status
  }
}
