import { useEffect, useState } from 'react'

const useFetchList = (url: string) => {
  const [data, setData] = useState<Array<any>>([])
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await fetch(url)
        const json = await res.json()

        setData(json)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return {data, error, loading}
}

export default useFetchList;
