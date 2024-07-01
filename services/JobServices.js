import Client from './api'

export const GetJobs = async () => {
  try {
    const res = await Client.get('/Jobs')
    return res.data
  } catch (error) {
    throw error
  }
}
