import DS from 'ember-data';

export default DS.Model.extend({
  originalname: DS.attr('string'),
  encoding: DS.attr('string'),
  mimetype: DS.attr('string'),
  destination: DS.attr('string'),
  filename: DS.attr('string'),
  path: DS.attr('string'),
  size: DS.attr('string'),
});
