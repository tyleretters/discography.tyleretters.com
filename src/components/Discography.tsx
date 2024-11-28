import discography from '@tyleretters/discography'

const Discography = () => {
  return (
    <pre className="whitespace-pre-wrap break-words">
      {JSON.stringify(discography, null, 2)}
    </pre>
  )
}

export default Discography
