import dayjs from 'dayjs'

export const formatTime = (time, template = 'YYYY-MM-DD HH:mm:ss') =>
  dayjs(time).locale('en').format(template)
