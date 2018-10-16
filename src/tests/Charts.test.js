import { dataForTaskChart } from '../func'
import { dataForChart, taskLog } from './testConsts'

it('Should build an array for the graph from the table', () => {
  expect(dataForTaskChart(taskLog)).toEqual(dataForChart)
})
