import React from 'react'
import { connect } from 'react-redux'
import { withStyles, Button } from '@material-ui/core'
import { stylesTasksChart } from '../styles/styles'
import { generate } from '../func'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { tab } from '../actions/tabActions'
import PropTypes from 'prop-types'

const TaskChart = ({ dataForChart, classes, changeTasksLog }) => {
  const handleClickGenerate = () => {
    changeTasksLog(generate())
  }

  return (
    <div className={classes.root}>
      <BarChart
        width={1600}
        height={325}
        maxBarSize={25}
        data={dataForChart}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name' />
        <YAxis ticks={[0, 15, 30, 45, 60]} />
        <Tooltip />
        <Legend />
        <Bar dataKey='pv' fill='#3450c7' name='Minutes in this hours' />
      </BarChart>
      <Button
        size='small'
        variant='outlined'
        onClick={handleClickGenerate}
        color='inherit'
        className={classes.buttonGenerate}
      >
        GENERATE
      </Button>
    </div>
  )
}

const mapStateToProps = ({ tab: { dataForChart } }) => ({ dataForChart })

const mapDispatchToProps = {
  changeTasksLog: tab.tasksLog
}

TaskChart.propTypes = {
  dataForChart: PropTypes.array,
  classes: PropTypes.object,
  changeTasksLog: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(stylesTasksChart)(TaskChart))
