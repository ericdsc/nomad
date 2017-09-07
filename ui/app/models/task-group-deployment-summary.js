import Fragment from 'ember-data-model-fragments/fragment';
import attr from 'ember-data/attr';
import { fragmentOwner } from 'ember-data-model-fragments/attributes';

export default Fragment.extend({
  deployment: fragmentOwner(),

  name: attr('string'),

  autoRevert: attr('boolean'),
  promoted: attr('boolean'),

  placedCanaries: attr('number'),
  desiredCanaries: attr('number'),
  desiredTotal: attr('number'),
  placedAllocs: attr('number'),
  healthyAllocs: attr('number'),
  unhealthyAllocs: attr('number'),
});
