import * as moment from 'dayjs'

export const toTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')
export const toDate = time => moment(time).format('YYYY-MM-DD')