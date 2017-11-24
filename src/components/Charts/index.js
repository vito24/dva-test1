/**
 * Created by vito on 2017/11/24.
 */

import numeral from 'numeral';
import ChartCard from './ChartCard';
import Field from './Field';

const yuan = val => `&yen; ${numeral(val).format('0,0')}`;

export default {
  yuan,
  ChartCard,
  Field,
};